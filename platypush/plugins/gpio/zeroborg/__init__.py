import enum
import threading
import time

from typing import Optional

from platypush.context import get_bus
from platypush.message.event.zeroborg import ZeroborgDriveEvent, ZeroborgStopEvent
from platypush.plugins import Plugin, action
from platypush.context import get_plugin


class Direction(enum.Enum):
    DIR_UP = 'up'
    DIR_DOWN = 'down'
    DIR_LEFT = 'left'
    DIR_RIGHT = 'right'
    DIR_AUTO = 'auto'
    DIR_AUTO_TOGGLE = 'auto_toggle'


# noinspection PyPep8Naming
class GpioZeroborgPlugin(Plugin):
    """
    ZeroBorg plugin. It allows you to control a ZeroBorg
    (https://www.piborg.org/motor-control-1135/zeroborg) motor controller and
    infrared sensor circuitry for Raspberry Pi

    Triggers:

        * :class:`platypush.message.event.zeroborg.ZeroborgDriveEvent` when motors direction changes
        * :class:`platypush.message.event.zeroborg.ZeroborgStopEvent` upon motors stop

    """

    def __init__(self, directions=None, **kwargs):
        """
        :param directions: Configuration for the motor directions. A direction is basically a configuration of the
            power delivered to each motor to allow whichever object you're controlling (wheels, robotic arms etc.) to
            move in a certain direction. In my experience the ZeroBorg always needs a bit of calibration, depending on
            factory defaults and the mechanical properties of the load it controls.

        Example configuration that I use to control a simple 4WD robot::

            directions = {
                "up": {
                    "motor_1_power": 0.4821428571428572,
                    "motor_2_power": 0.4821428571428572,
                    "motor_3_power": -0.6707142857142858,
                    "motor_4_power": -0.6707142857142858
                },
                "down": {
                    "motor_1_power": -0.4821428571428572,
                    "motor_2_power": -0.4821428571428572,
                    "motor_3_power": 0.825,
                    "motor_4_power": 0.825
                },
                "left": {
                    "motor_1_power": -0.1392857142857143,
                    "motor_2_power": -0.1392857142857143,
                    "motor_3_power": -1.0553571428571429,
                    "motor_4_power": -1.0553571428571429
                },
                "right": {
                    "motor_1_power": 1.0017857142857143,
                    "motor_2_power": 1.0017857142857143,
                    "motor_3_power": 0.6214285714285713,
                    "motor_4_power": 0.6214285714285713
                },
                "auto": {
                    "sensors": [
                        {
                            "plugin": "gpio.sensor.distance",
                            "threshold": 400.0,
                            "timeout": 2.0,
                            "above_threshold_direction": "up",
                            "below_threshold_direction": "left"
                        }
                    ]
                }
            }

        Note that the special direction "auto" can contain a configuration that allows your device to move autonomously
            based on the inputs it gets from some sensors.  In this case, I set the sensors configuration (a list) to
            periodically poll a GPIO-based ultrasound distance sensor plugin. ``timeout`` says after how long a poll
            attempt should fail. The plugin package is specified through ``plugin`` (``gpio.sensor.distance``) in this
            case, note that the plugin must be configured as well in order to work). The ``threshold`` value says
            around which value your logic should trigger. In this case, threshold=400 (40 cm). When the distance value
            is above that threshold (``above_threshold_direction``), then go "up" (no obstacles ahead). Otherwise
            (``below_threshold_direction``), turn "left" (avoid the obstacle).

        :type directions: dict
        """

        if directions is None:
            directions = {}

        import platypush.plugins.gpio.zeroborg.lib as ZeroBorg
        super().__init__(**kwargs)

        self.directions = directions
        self.auto_mode = False
        self._direction = None
        self._drive_thread: Optional[threading.Thread] = None
        self._motors = [0, 0, 0, 0]

        self.zb = ZeroBorg.ZeroBorg()
        self.zb.Init()
        self.zb.SetCommsFailsafe(True)
        self.zb.ResetEpo()

    @staticmethod
    def _get_measurement(plugin, timeout):
        measure_start_time = time.time()
        value = None

        while value is None:
            value = plugin.get_measurement().output
            if time.time() - measure_start_time > timeout:
                return None

        return value

    def _get_direction_from_sensors(self):
        if Direction.DIR_AUTO.value not in self.directions:
            raise RuntimeError("Can't start auto pilot: " +
                               "no sensor configured in gpio.zeroborg.directions.auto")

        direction = None

        for sensor in self.directions[Direction.DIR_AUTO.value]['sensors']:
            plugin = get_plugin(sensor['plugin'])
            if not sensor:
                raise RuntimeError('No such sensor: ' + sensor['plugin'])

            value = self._get_measurement(plugin=plugin, timeout=sensor['timeout'])
            threshold = sensor['threshold']

            if value is None:
                self.logger.warning('Read timeout from sensor {}'.format(sensor['plugin']))
                return Direction.DIR_AUTO.value

            if value >= threshold and 'above_threshold_direction' in sensor:
                direction = sensor['above_threshold_direction']
            elif 'below_threshold_direction' in sensor:
                direction = sensor['below_threshold_direction']

            self.logger.info('Sensor: {}\tMeasurement: {}\tDirection: {}'
                             .format(sensor['plugin'], value, direction))

        return direction

    @action
    def drive(self, direction):
        """
        Drive the motors in a certain direction.

        :param direction: Direction name (note: it must be a configured direction). Special directions:
            * ``auto`` - Enter automatic drive mode
            * ``auto_toggle`` - Toggle automatic drive mode (on or off)
            * ``stop`` - Turn off the motors

        """

        def _run():
            try:
                while self._direction:
                    if self._direction == Direction.DIR_AUTO_TOGGLE.value:
                        if self.auto_mode:
                            self._direction = None
                            self.auto_mode = False
                        else:
                            self._direction = Direction.DIR_AUTO
                            self.auto_mode = True

                    if self._direction == Direction.DIR_AUTO.value:
                        self.auto_mode = True

                    try:
                        if self.auto_mode:
                            self._direction = self._get_direction_from_sensors()
                            time.sleep(0.1)

                        if self._direction in self.directions and self._direction != Direction.DIR_AUTO.value:
                            self._motors = self.directions[self._direction]
                        else:
                            self.logger.warning('Invalid direction {}: stopping motors'.format(self._direction))
                    except Exception as e:
                        self.logger.error('Error on _get_direction_from_sensors: {}'.format(str(e)))
                        break

                    for i, power in enumerate(self._motors):
                        method = getattr(self.zb, 'SetMotor{}'.format(i+1))
                        method(power)
            finally:
                self.zb.MotorsOff()
                self.zb.ResetEpo()
                self._drive_thread = None

        self._direction = direction.lower()

        if not self._drive_thread:
            self._drive_thread = threading.Thread(target=_run)
            self._drive_thread.start()

        get_bus().post(ZeroborgDriveEvent(direction=self._direction, motors=self.directions[self._direction]))
        return {'status': 'running', 'direction': direction}

    @action
    def stop(self):
        """
        Turns off the motors
        """

        self.auto_mode = False
        self._direction = None

        if self._drive_thread:
            self._drive_thread.join()

        get_bus().post(ZeroborgStopEvent())
        return {'status': 'stopped'}

    @action
    def status(self) -> dict:
        """
        Get the current direction and motors power. Example response::

            ..code-block:: json

            {
                "status": "running",
                "direction": "up",
                "motors": [1.0, 1.0, -1.0, -1.0]
            }

        """

        return {
            'status': 'running' if self._direction else 'stopped',
            'direction': self._direction,
            'motors': [getattr(self.zb, 'GetMotor{}'.format(i+1))() for i in range(4)],
        }


# vim:sw=4:ts=4:et:

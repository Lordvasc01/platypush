import enum
import math

# noinspection PyUnresolvedReferences,PyPackageRequirements
from pmw3901 import PMW3901, BG_CS_FRONT_BCM, BG_CS_BACK_BCM

from platypush.plugins import action
from platypush.plugins.gpio.sensor import GpioSensorPlugin


class Rotation(enum.IntEnum):
    ROTATE_0 = 0
    ROTATE_90 = 90
    ROTATE_180 = 180
    ROTATE_270 = 270


class SPISlot(enum.Enum):
    FRONT = 'front',
    BACK = 'back'


class GpioSensorMotionPwm3901Plugin(GpioSensorPlugin):
    """
    Plugin to interact with an `PWM3901 <https://github.com/pimoroni/pmw3901-python>`_
    optical flow and motion sensor

    Requires:

        * ``pwm3901`` (``pip install pwm3901``)
    """

    def __init__(self, rotation=Rotation.ROTATE_0.value, spi_slot=SPISlot.FRONT.value, spi_port=0, **kwargs):
        """
        :param rotation: Rotation angle for the captured optical flow. Possible options: 0, 90, 180, 270 (default: 0)
        :type rotation: int

        :param spi_slot: SPI slot where the sensor is connected if you're using a Breakout Garden interface.
            Possible options: 'front', 'back' (default: 'front')
        :type spi_slot: str

        :param spi_port: SPI port (default: 0)
        :type spi_slot: int
        """
        super().__init__(**kwargs)
        self.spi_port = spi_port
        self._sensor = None
        (self.x, self.y) = (0, 0)

        try:
            if isinstance(rotation, int):
                rotation = [r for r in Rotation if r.value == rotation][0]
            self.rotation = rotation
        except IndexError:
            raise ValueError('{} is not a valid value for rotation - possible values: {}'.format(
                rotation, [r.value for r in Rotation]))

        try:
            if isinstance(spi_slot, str):
                spi_slot = [s for s in SPISlot if s.value == spi_slot][0]

            self.spi_slot = BG_CS_FRONT_BCM if spi_slot == SPISlot.FRONT else BG_CS_BACK_BCM
        except IndexError:
            raise ValueError('{} is not a valid value for spi_slot - possible values: {}'.format(
                spi_slot, [s.value for s in SPISlot]))

    def _get_sensor(self):
        if not self._sensor:
            self._sensor = PMW3901(spi_port=self.spi_port,
                                   spi_cs=1,
                                   spi_cs_gpio=self.spi_slot)
            self._sensor.set_rotation(self.rotation)

        return self._sensor

    @action
    def get_measurement(self):
        """
        :returns: dict. Example::

            output = {
                "motion_rel_x": 0,   # Detected relative motion vector X-coord
                "motion_rel_y": 1,   # Detected relative motion vector Y-coord
                "motion_abs_x": 3,   # Detected absolute motion vector X-coord
                "motion_abs_y": 3,   # Detected absolute motion vector Y-coord
                "motion_rel_mod": 1, # Detected relative motion vector module
                "motion_abs_mod": 5  # Detected absolute motion vector module
            }

        """

        sensor = self._get_sensor()
        x, y = sensor.get_motion()
        self.x += x
        self.y += y

        return {
            'motion_rel_x': x,
            'motion_rel_y': y,
            'motion_abs_x': self.x,
            'motion_abs_y': self.y,
            'motion_rel_mod': math.sqrt(x * x + y * y),
            'motion_abs_mod': math.sqrt(self.x * self.x + self.y * self.y),
        }


# vim:sw=4:ts=4:et:
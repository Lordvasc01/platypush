from datetime import datetime, date
from typing import Optional, Union

from dateutil.parser import isoparse
from dateutil.tz import tzutc
from marshmallow import fields


class StrippedString(fields.Function):  # lgtm [py/missing-call-to-init]
    def __init__(self, *args, **kwargs):
        kwargs['serialize'] = self._strip
        kwargs['deserialize'] = self._strip
        super().__init__(*args, **kwargs)

    def _serialize(self, value, attr, obj, **kwargs) -> Optional[str]:
        if obj.get(attr) is not None:
            return self._strip(obj.get(attr))

    @staticmethod
    def _strip(value: str):
        return value.strip()


class Function(fields.Function):  # lgtm [py/missing-call-to-init]
    def _get_attr(self, obj, attr: str, _recursive=True):
        if self.attribute and _recursive:
            return self._get_attr(obj, self.attribute, False)
        if hasattr(obj, attr):
            return getattr(obj, attr)
        elif hasattr(obj, 'get'):
            return obj.get(attr)


class DateTime(Function):  # lgtm [py/missing-call-to-init]
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.metadata = {
            'example': datetime.now(tz=tzutc()).isoformat(),
            **(self.metadata or {}),
        }

    def _serialize(self, value, attr, obj, **kwargs) -> Optional[str]:
        value = normalize_datetime(self._get_attr(obj, attr))
        if value:
            return value.isoformat()

    def _deserialize(self, value, attr, data, **kwargs) -> Optional[datetime]:
        return normalize_datetime(value)


class Date(Function):  # lgtm [py/missing-call-to-init]
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.metadata = {
            'example': date.today().isoformat(),
            **(self.metadata or {}),
        }

    def _serialize(self, value, attr, obj, **kwargs) -> Optional[str]:
        value = normalize_datetime(self._get_attr(obj, attr))
        if value:
            return date(value.year, value.month, value.day).isoformat()

    def _deserialize(self, value, attr, data, **kwargs) -> Optional[date]:
        dt = normalize_datetime(value)
        return date.fromtimestamp(dt.timestamp())


def normalize_datetime(
    dt: Optional[Union[str, date, datetime]]
) -> Optional[Union[date, datetime]]:
    if not dt:
        return
    if isinstance(dt, (datetime, date)):
        return dt

    try:
        dt = float(dt)
        return datetime.fromtimestamp(dt)
    except (TypeError, ValueError):
        return isoparse(dt)

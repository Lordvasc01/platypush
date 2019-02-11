import gzip
import os
import requests
import tempfile

from platypush.message.response import Response
from platypush.plugins import Plugin, action
from platypush.utils import find_files_by_ext, get_mime_type


class MediaSubtitlesPlugin(Plugin):
    """
    Plugin to get video subtitles from OpenSubtitles

    Requires:

        * **python-opensubtitles** (``pip install -e 'git+https://github.com/agonzalezro/python-opensubtitles#egg=python-opensubtitles'``)
        * **requests** (``pip install requests``)
    """

    def __init__(self, username, password, language=None, *args, **kwargs):
        """
        :param username: Your OpenSubtitles username
        :type username: str

        :param password: Your OpenSubtitles password
        :type password: str

        :param language: Preferred language name, ISO639 code or OpenSubtitles
            language ID to be used for the subtitles. Also supports an (ordered)
            list of preferred languages
        :type language: str or list[str]
        """

        from pythonopensubtitles.opensubtitles import OpenSubtitles

        super().__init__(*args, **kwargs)

        self._ost = OpenSubtitles()
        self._token = self._ost.login(username, password)
        self.languages = []

        if language:
            if isinstance(language, str):
                self.languages.append(language.lower())
            elif isinstance(language, list):
                self.languages.extend([l.lower() for l in language])
            else:
                raise AttributeError('{} is neither a string nor a list'.format(
                    language))


    @action
    def get_subtitles(self, resource, language=None):
        """
        Get the subtitles data for a video resource

        :param resource: Media file, torrent or URL to the media resource
        :type resource: str

        :param language: Language name or code (default: configured preferred
            language). Choose 'all' for all the languages
        :type language: str
        """

        from pythonopensubtitles.utils import File

        if resource.startswith('file://'):
            resource = resource[len('file://'):]

        resource = os.path.abspath(os.path.expanduser(resource))
        if not os.path.isfile(resource):
            return (None, '{} is not a valid file'.format(resource))

        file = resource
        cwd = os.getcwd()
        media_dir = os.path.dirname(resource)
        os.chdir(media_dir)
        file = file.split(os.sep)[-1]

        local_subs = [{
            'IsLocal': True,
            'MovieName': '[Local subtitle]',
            'SubFileName': sub.split(os.sep)[-1],
            'SubDownloadLink': 'file://' + os.path.join(media_dir, sub),
        } for sub in find_files_by_ext(media_dir, '.srt', '.vtt')]

        self.logger.info('Found {} local subtitles for {}'.format(
            len(local_subs), file))

        languages = [language.lower()] if language else self.languages

        try:
            file_hash = File(file).get_hash()
            subs = self._ost.search_subtitles([{
                'sublanguageid': 'all',
                'moviehash': file_hash,
            }])

            subs = [
                sub for sub in subs if not languages or languages[0] == 'all' or
                sub.get('LanguageName', '').lower() in languages or
                sub.get('SubLanguageID', '').lower() in languages or
                sub.get('ISO639', '').lower() in languages
            ]

            for sub in subs:
                sub['IsLocal'] = False

            self.logger.info('Found {} OpenSubtitles items for {}'.format(
                len(subs), file))

            return local_subs + subs
        finally:
            os.chdir(cwd)


    @action
    def download(self, link, media_resource=None, path=None):
        """
        Downloads a subtitle link (.srt/.vtt file or gzip/zip OpenSubtitles
        archive link) to the specified directory

        :param link: Local subtitles file or OpenSubtitles gzip download link
        :type link: str

        :param path: Path where the subtitle file will be downloaded (default:
            temporary file under /tmp)
        :type path: str

        :param media_resource: Name of the media resource. If set and if it's a
            media local file then the subtitles will be saved in the same folder
        :type media_resource: str

        :returns: dict. Format::

            {
                "filename": "/path/to/subtitle/file.srt"
            }
        """

        if link.startswith('file://'):
            link = link[len('file://'):]
        if os.path.isfile(link):
            return { 'filename': link }

        gzip_content = requests.get(link).content
        f = None

        if not path and media_resource:
            if media_resource.startswith('file://'):
                media_resource = media_resource[len('file://'):]
            if os.path.isfile(media_resource):
                media_resource = os.path.abspath(media_resource)
                path = os.path.join(
                    os.path.dirname(media_resource),
                    '.'.join(os.path.basename(media_resource).split('.')[:-1])) + '.srt'

        if path:
            f = open(path, 'wb')
        else:
            f = tempfile.NamedTemporaryFile(prefix='media_subs_',
                                            suffix='.srt', delete=False)
            path = f.name

        try:
            with f:
                f.write(gzip.decompress(gzip_content))
        except Exception as e:
            os.unlink(path)
            raise e

        return { 'filename': path }


# vim:sw=4:ts=4:et:
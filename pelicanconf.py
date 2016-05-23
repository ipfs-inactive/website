#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

SITENAME = u'ipfs.io'
SITEURL = ''
DEFAULT_LANG = u'en'

PATH = 'content'

TIMEZONE = "Europe/Paris"  #Unused (Pelican complains if you don't provide it)

THEME = 'ipfs.io-theme'

USE_FOLDER_AS_CATEGORY = False

DEFAULT_PAGINATION = 10

FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

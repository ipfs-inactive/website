#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

SITENAME = u'IPFS'
SITEURL = ''
DEFAULT_LANG = u'en'

PATH = 'content'

TIMEZONE = "Europe/Paris"  #Unused (Pelican complains if you don't provide it)

THEME = 'ipfs.io-theme'
PAGE_URL = '{slug}/'
PAGE_SAVE_AS = '{slug}/index.html'
INDEX_SAVE_AS = 'blog.html'
# PAGE_ORDER_BY = 'sort_order'
# default metadata sort order

# DIRECT_TEMPLATES = ['index', 'categories', 'authors', 'archives']
DIRECT_TEMPLATES = ['index']

SOCIAL = (
        ('Twitter', 'http://twitter.com/'),
        ('Facebook', 'http://facebook.com'),
        ('Google+', 'http://plus.google.com')
)

DISPLAY_PAGES_ON_MENU = False
DISPLAY_CATEGORIES_ON_MENU = False

DEFAULT_PAGINATION = 10

FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

SITENAME = u'IPFS'
SITEURL = ''
SITEPATH = ''
DEFAULT_LANG = u'en'
DEFAULT_PAGINATION = 10

PATH = 'content'

TIMEZONE = "Europe/Paris"  #Unused (Pelican complains if you don't provide it)

THEME = 'ipfs.io-theme'
PAGE_URL = '{slug}'
PAGE_SAVE_AS = '{slug}/index.html'
INDEX_SAVE_AS = 'blog.html'
# PAGE_ORDER_BY = 'sort_order'
# default metadata sort order

SUMMARY_MAX_LENGTH = 100

YEAR_ARCHIVE_SAVE_AS = '{date:%Y}/index.html'
MONTH_ARCHIVE_SAVE_AS = '{date:%Y}/{date:%m}/index.html'

TAG_SAVE_AS = 'tag/{slug}/index.html'
TAG_URL = 'tag/{slug}'

PLUGIN_PATHS = ['pelican-plugins']
PLUGINS = ['custom_article_urls']
CUSTOM_ARTICLE_URLS = {
    'posts': {
        'URL': 'blog/{slug}',
        'SAVE_AS': 'blog/{slug}/index.html'
    }
}

# DIRECT_TEMPLATES = ['index', 'categories', 'authors', 'archives']
DIRECT_TEMPLATES = ['index']

IMAGE_PATH = 'posts/uploads'

STATIC_PATHS = ['posts/uploads']
EXTRA_PATH_METADATA = {
    'uploads': {'path': 'uploads'}
}

IGNORE_FILES = ['README.md']

SOCIAL = (
        ('Twitter', 'http://twitter.com/'),
        ('Facebook', 'http://facebook.com'),
        ('Google+', 'http://plus.google.com')
)

MD_EXTENSIONS = ['codehilite(css_class=highlight)','extra','toc']

DISPLAY_PAGES_ON_MENU = False
DISPLAY_CATEGORIES_ON_MENU = False

DEFAULT_PAGINATION = 10

FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

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
INDEX_SAVE_AS = 'blog/index.html'
# PAGE_ORDER_BY = 'sort_order'
# default metadata sort order

SUMMARY_MAX_LENGTH = 100

YEAR_ARCHIVE_SAVE_AS = '{date:%Y}/index.html'
MONTH_ARCHIVE_SAVE_AS = '{date:%Y}/{date:%m}/index.html'

TAG_SAVE_AS = 'tag/{slug}/index.html'
TAG_URL = 'tag/{slug}'

PLUGIN_PATHS = ['pelican-plugins']
PLUGINS = ['custom_article_urls']

ARTICLE_PATHS = ['posts']
PAGE_PATHS = ['pages']
CUSTOM_ARTICLE_URLS = {
    'posts': {
        'URL': 'blog/{slug}',
        'SAVE_AS': 'blog/{slug}/index.html'
    }
}

# DIRECT_TEMPLATES = ['index', 'categories', 'authors', 'archives']
DIRECT_TEMPLATES = ['index']

IMAGE_PATH = 'images'

STATIC_PATHS = ['images', 'static']

# PAGE_EXCLUDES = 'static'
# ARTICLE_EXCLUDES = 'static'

EXTRA_PATH_METADATA = {
    'static': {'path': 'static'}
}

IGNORE_FILES = ['README.md']

SOCIAL = (
        ('Twitter', 'http://twitter.com/ipfsbot'),
        ('Facebook', 'https://www.facebook.com/sharer/sharer.php?u=https://ipfs.io'),
        ('Google', 'https://plus.google.com/108638684245894749879'),
        ('YouTube', 'https://www.youtube.com/channel/UCdjsUXJ3QawK4O5L1kqqsew')
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

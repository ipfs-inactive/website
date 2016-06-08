# ipfs.io

### Dependencies

This site uses [Pelican](docs.getpelican.com) as a custom configured static site generator.

`pip install pelican markdown`

You may need to `easy_install pip` if `pip` gives you not found warnings.

## Site structure

Here's the key highlights of various important files and folders:

- [`content`](https://github.com/andyet/ipfs.io/tree/master/content) is where the site's content goes. There are subfolders for:
  - [`pages`](https://github.com/andyet/ipfs.io/tree/master/content/pages) (general site content and documentation)
  - [`posts`](https://github.com/andyet/ipfs.io/tree/master/content/posts) (blog posts) folder.
  - [`images`](https://github.com/andyet/ipfs.io/tree/master/content/images) folder for any images associated with a page or blog post
  - [`static`](https://github.com/andyet/ipfs.io/tree/master/content/static) folder for other kinds of embedded content, like [Asciinema](https://asciinema.org/) files.
- [`ipfs.io-theme`](https://github.com/andyet/ipfs.io/tree/master/ipfs.io-theme) contains the site's look and feel. This folder includes a `templates` folder, using fairly straightforward templates to build the site with. The `_styl` folder contains the stylus files that are used to build the site's CSS.
- [`ipfs.io-theme/templates/latest.html`](https://github.com/andyet/ipfs.io/blob/master/ipfs.io-theme/templates/latest.html) automatically adds the latest blog posts, plus includes custom links to featured articles and videos.
- [`pelican-plugins`] just has relevant plugins used by pelican to build the site.

## Frontend Workflow

**Preliminary Development**

The site theme files are contained in the `ipfs.io-theme` directory.

*CSS*

CSS is compiled from stylus in the `_styl` directory.

## Pages

Pages go in `./content/pages`

Pages should set their title at the top of each md file and add content below. Optionally, they can also set `section`, `pagetype`, and `constellation`. For example, see this one for the Contact page:

```
pagetype: major
title: Contact | IPFS
section: Contact
constellation: constellation-01.svg
```

A "pagetype" that includes "major" will get a larger header. The text in "section" will denote what the title embedded in the header will be, and "constellation" will allow selection of one of the pieces of constellation artwork that accompanies the headers.

Page urls can be defined (see the `docs` subfolder) or will default to a slugified version of the page name (i.e. `about.md` will end up at `/about`)

## Blog

Blog articles go in `./content/articles` and should have a title, date,
and author.

If you have images to associate with a blog post, add them to `content/images`. Then, to refer to them in a way that will allow them to be built as siblings of the blog post html, prefix their path with {attach}, like so:

```
![]({attach}/images/earthrise.png)
```

If you have files like [Asciinema](https://asciinema.org/), add those to `content/static` and refer to them as

```
{attach}/static/file
```

## Config

There are two config files `pelicanconf.py` and `publishconf.py`

Most of the config is in `pelicanconf.py` with a few things that override critical settings for building the actual production site in `publishconf.py`.  One of these things is the final url for the site.

When developing locally, the site url and site path are both empty, so all urls are things like `/foo`.

When building the production site, site url and site path are prepended to the links so they'll be something like `http://ipfs.io/ipfs/s0meth1ng/foo`

The site is built via make. Type `make` to see your options.

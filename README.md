# website

[![](https://img.shields.io/badge/made%20by-Protocol%20Labs-blue.svg?style=flat-square)](http://ipn.io)
[![](https://img.shields.io/badge/project-IPFS-blue.svg?style=flat-square)](http://ipfs.io/)
[![](https://img.shields.io/badge/freenode-%23ipfs-blue.svg?style=flat-square)](http://webchat.freenode.net/?channels=%23ipfs)
[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

> ipfs website

## Table of Contents

- [Install](#install)
  - [Dependencies](#dependencies)
- [Relative paths](#relative-paths)
- [Site structure](#site-structure)
- [Theme](#theme)
- [Pages content](#pages-content)
- [Blog content](#blog-content)
- [Building the site](#building-the-site)
- [Contribute](#contribute)
- [License](#license)

## Install

Simply clone this repository.

### Dependencies

This site uses [Pelican](docs.getpelican.com) as a custom configured static site generator.

`pip install pelican markdown`

You may need to `easy_install pip` if `pip` gives you not found warnings.

If you have issues with any of the packages, it may be a good idea to use a virtual environment. To do this:

```
virtualenv venv/
. venv/bin/activate
pip install pelican markdown
```

## Usage

Open locally in the browser.

## Relative paths

The site is presently built so that all paths are relative, making it easy to deploy to IPFS.

## Site structure

Here's the key highlights of various important files and folders:

- [`content`](https://github.com/ipfs/website/tree/master/content) is where the site's content goes. There are subfolders for:
  - [`pages`](https://github.com/ipfs/website/tree/master/content/pages) (general site content and documentation)
  - [`posts`](https://github.com/ipfs/website/tree/master/content/posts) (blog posts) folder.
  - [`images`](https://github.com/ipfs/website/tree/master/content/images) folder for any images associated with a page or blog post
  - [`static`](https://github.com/ipfs/website/tree/master/content/static) folder for other kinds of embedded content, like [Asciinema](https://asciinema.org/) files.
- [`ipfs.io-theme`](https://github.com/ipfs/website/tree/master/ipfs.io-theme) contains the site's look and feel. This folder includes a `templates` folder, using fairly straightforward templates to build the site with. The `_styl` folder contains the stylus files that are used to build the site's CSS.
- [`ipfs.io-theme/templates/latest.html`](https://github.com/ipfs/website/blob/master/ipfs.io-theme/templates/latest.html) automatically adds the latest blog posts, plus includes custom links to featured articles and videos.
- [`pelican-plugins`] just has relevant plugins used by pelican to build the site.

## Theme

The site theme files are contained in the `ipfs.io-theme` directory.

To work on the theme, install Grunt:

`npm install -g grunt-cli`

CSS is compiled from stylus in the `_styl` directory.

## Pages content

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

## Blog content

Blog articles go in `./content/posts` and should have a title, date,
and author.

If you have images to associate with a blog post, add them to `content/images`. Then, to refer to them in a way that will allow them to be built as siblings of the blog post html, prefix their path with {attach}, like so:

```
![]({attach}/images/earthrise.png)
```

If you have files like [Asciinema](https://asciinema.org/), add those to `content/static` and refer to them as

```
{attach}/static/file
```

## Building the site

The site is built via make. Type `make` to see your options.

You can run `./develop_server start` and the site will be automagically rebuilt while you're working on it.

`./develop_server stop` will stop the server

## Contribute

Feel free to join in. All welcome. Open an [issue](https://github.com/ipfs/website/issues)!

This repository falls under the IPFS [Code of Conduct](https://github.com/ipfs/community/blob/master/code-of-conduct.md).

[![](https://cdn.rawgit.com/jbenet/contribute-ipfs-gif/master/img/contribute.gif)](https://github.com/ipfs/community/blob/master/contributing.md)

## License

[MIT](LICENSE)

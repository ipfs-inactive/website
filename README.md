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
- [Pages content](#pages-content)
- [Blog content](#blog-content)
- [Building the site](#building-the-site)
- [Contribute](#contribute)
- [License](#license)

## Install

Simply clone this repository.

### Dependencies

This site uses [Hugo](https://gohugo.io/) as a custom configured static site generator.

Download the latest release [here](https://github.com/gohugoio/hugo/releases)

It also requires [Node and NPM](https://nodejs.org/en/download/), the latter to install dependencies:

```
$ npm i
```

## Running on a local dev server

```
$ npm run watch
```

Open in the browser at [localhost:1313](localhost:1313).

## Relative paths

The site is presently built so that all paths are relative, making it easy to deploy to IPFS.

## Site structure

Here are the key highlights of various important files and folders:

- [`content`](https://github.com/ipfs/website/tree/master/content) is where the site's content goes. There contents are:
  - [`index.html`](https://github.com/ipfs/website/tree/master/content/index.html) (the landing page)
  - [`blog`](https://github.com/ipfs/website/tree/master/content/blog) (blog posts)
  - [`docs`](https://github.com/ipfs/website/tree/master/content/docs) (documentation)
  - [`legal`](https://github.com/ipfs/website/tree/master/content/legal) (legal info, a single index page)
  - [`media`](https://github.com/ipfs/website/tree/master/content/media) (media coverage, a single index page)
  - [`contact-ipfs`](https://github.com/ipfs/website/tree/master/content/contact-ipfs) (contact info, a single index page)

Static content related to a specific page should be put inside the `static` folder within that subfolder (e.g. `/content/blog/static`).

- [`layouts`](https://github.com/ipfs/website/tree/master/layouts) is where the layout templates go. There contents are:
  - [`_default`](https://github.com/ipfs/website/tree/master/layouts/_default) (default page template)
  - [`blog`](https://github.com/ipfs/website/tree/master/layouts/blog) (single and list blog templates)
  - [`docs`](https://github.com/ipfs/website/tree/master/layouts/docs) (documentation template)
  - [`partials`](https://github.com/ipfs/website/tree/master/layouts/partials) (reuseable chunks for including in full templates)
  - [`taxonomy`](https://github.com/ipfs/website/tree/master/layouts/media) (layout template for the *author* page).

- [`_styl`](https://github.com/ipfs/website/tree/master/_styl) Stylus theme files which are compiled to CSS in the build process
- [`js`](https://github.com/ipfs/website/tree/master/js) JS files which are browserified in the build process
- [`static`](https://github.com/ipfs/website/tree/master/static) All other static files

## Pages content

New pages which are not blog posts or documentation should be created as `index.html` files in their own dedicated folder underneath `content`.

Pages should set their title at the top of each md file and add content below. Optionally, they can also set `section`, `pagetype`, and `constellation`. For example, see this one for the Contact page:

```
pagetype: major
title: Contact | IPFS
section: Contact
constellation: constellation-01.svg
```

A "pagetype" that includes "major" will get a larger header. The text in "section" will denote what the title embedded in the header will be, and "constellation" will allow selection of one of the pieces of constellation artwork that accompanies the headers.

Page urls can be defined (see the `docs` subfolder) or will default to a slugified version of the folder name (i.e. `about/index.html` will end up at `/about`)

## Blog content

Blog articles go in `./content/blog` and should have a title, date,
and author.

If you have images to associate with a blog post, add them to `content/blog/static`, and refer to them as follows:

```
![](/blog/static/earthrise.png)
```

## Building the site - TODO

The site is built via make. Type `make` to see your options.

You can run `npm run watch` and the site will be automagically rebuilt while you're working on it.

## Contribute

Feel free to join in. All welcome. Open an [issue](https://github.com/ipfs/website/issues)!

This repository falls under the IPFS [Code of Conduct](https://github.com/ipfs/community/blob/master/code-of-conduct.md).

[![](https://cdn.rawgit.com/jbenet/contribute-ipfs-gif/master/img/contribute.gif)](https://github.com/ipfs/community/blob/master/contributing.md)

## License

[MIT](LICENSE)

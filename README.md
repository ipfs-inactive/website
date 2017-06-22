# [ipfs-website](ifps.io)

[![](https://img.shields.io/badge/made%20by-Protocol%20Labs-blue.svg?style=flat-square)](http://ipn.io)
[![](https://img.shields.io/badge/project-ipfs-blue.svg?style=flat-square)](http://github.com/ipfs/ipfs)
[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

> Official website for IPFS http://ipfs.io

This repository contains the source code for the IPFS website available at http://ipfs.io

This project builds out a static site to explain IPFS, ready for deployment on ipfs itself. It uses `hugo` to glue the html together. It provides an informative, public-facing website. The most important things are the words, concepts and links it presents.

Much of the site content is data-driven; take a look at the `data` dir where find the data behind the implementations and bundles information as json.

## Install

```sh
git clone https://github.com/ipfs/website
```

## Usage

The following commands are available:

### `make`

Build the optimised site to the `./public` dir

### `make serve`

Preview the production ready site at http://localhost:1313 _(requires `hugo` on your `PATH`)_

### `make dev`

Start a hot-reloading dev server on http://localhost:1313 _(requires `hugo` on your `PATH`)_

### `make dev-stop`

Stop that server (and take a break!)

### `make minfy`

Optimise all the things!

### `make deploy`

Build the site in the `public` dir and add to `ipfs` _(requires `hugo` & `ipfs` on your `PATH`)_

### `make publish-to-domain`

Update the DNS record for ipfs.io.  _(requires an `auto.token` file to be saved in the project root.)_
:rocket:

---

See the `Makefile` for the full list or run `make help` in the project root.

## Dependencies

* `hugo` to build website
* `ipfs` to deploy changes

All other dependencies are pulled from `npm` and the Makefile will run `npm install` for you because it's nice like that.

## Contribute

Please do! Check out [the issues](https://github.com/ipfs/website/issues), or open a PR!

Check out our [notes on contributing ](https://github.com/ipfs/js-ipfs#contribute) for more information on how we work, and about contributing in general. Please be aware that all interactions related to IPFS are subject to the IPFS [Code of Conduct](https://github.com/ipfs/community/blob/master/code-of-conduct.md).

Small note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.
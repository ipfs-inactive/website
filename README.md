# [IPFS Website](ipfs.io)

[![](https://img.shields.io/badge/made%20by-Protocol%20Labs-blue.svg?style=flat-square)](http://ipn.io)
[![](https://img.shields.io/badge/project-ipfs-blue.svg?style=flat-square)](http://github.com/ipfs/ipfs)
[![](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

> Official website for IPFS http://ipfs.io

This project builds out a static site to explain IPFS, ready for deployment on ipfs itself. It uses `hugo` to glue the html together. It provides an informative, public-facing website. The most important things are the words, concepts and links it presents.

Much of the site content is data-driven; take a look at the `data` dir where find the data behind the implementations and bundles information as json.

## Install

```sh
> git clone https://github.com/ipfs/website
```

## Usage

To deploy the site ipfs.io, run:

```sh
# Build out the optimised site to ./public, where you can check it locally.
> make

# Add the site to your local ipfs, you can check it via /ipfs/<hash>
> make deploy

# Save your dnsimple api token as auth.token
> cat "<api token here>" > auth.token

# Update the dns record for ipfs.io to point to the new ipfs hash.
> make publish-to-domain
```

The following commands are available:

### `make`

Build the optimised site to the `./public` dir

### `make serve`

Preview the production ready site at http://localhost:1313 _(requires `hugo` on your `PATH`)_

### `make dev`

Start a hot-reloading dev server on http://localhost:1313 _(requires `hugo` on your `PATH`)_

### `make minfy`

Optimise all the things!

### `make deploy`

Build the site in the `public` dir and add to `ipfs` _(requires `hugo` & `ipfs` on your `PATH`)_

### `make publish-to-domain` :rocket:

Update the DNS record for `ipfs.io`.  _(requires an `auto.token` file to be saved in the project root.)_

If you'd like to update the dnslink TXT record for another domain, pass `DOMAIN=<your domain here>` like so:

```sh
> make publish-to-domain DOMAIN=tableflip.io
```

---

See the `Makefile` for the full list or run `make help` in the project root. You can pass the env var `DEBUG=true` to increase the verbosity of your chosen command.

## Latest Blog Posts

The *IPFS Starlog* list in the *Latest* section is populated from the [IPFS blog](https://github.com/ipfs/blog), which has a separate build and deploy process.  That process includes building an `index.json` file containing the latest post data in the blog's root directory.  Latest posts can be rendered by this project via two mechanisms:

1. Statically, at build time.  The `/layouts/partials/latest.html` partial contains code (currently commented-out) which GETs `index.json` from its [expected absolute URL](https://ipfs.io/blog/index.json) and uses the returned data to populate the *IPFS Starlog*.  **Note** that if this `index.json` request fails for any reason the entire Hugo build proces will fail, so this code should only be uncommented once that resource is available.
2. Dynamically, via the `/js/lib/blog-feed.js` script. This script requests the resource at `/blog/index.json` once the page has loaded, locally to avoid any CORS concerns.  If successful, the response will be used to overwrite any static content.  For development purposes, a placeholder file is provided in `/static/blog/index.json`, which will be loaded by the script when running a local dev server.  **This file should not be deployed** - to that end, `make deploy` will remove it from the `public` folder prior it being added to IPFS and then put it back once that's been done.

## Dependencies

- `hugo` to build website
- `Node.js` and `npm` for build tools
- `ipfs` to deploy changes
- `jq`, `curl` and an `auth.token` file in the project root containing your dnsimple api token to update the dns

All other dependencies are pulled from `npm` and the Makefile will run `npm install` for you because it's nice like that.

## Contribute

Please do! Check out [the issues](https://github.com/ipfs/website/issues), or open a PR!

Check out our [notes on contributing ](https://github.com/ipfs/js-ipfs#contribute) for more information on how we work, and about contributing in general. Please be aware that all interactions related to IPFS are subject to the IPFS [Code of Conduct](https://github.com/ipfs/community/blob/master/code-of-conduct.md).

Small note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

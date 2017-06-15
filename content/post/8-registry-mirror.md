---
date: 2015-12-08
title: Stellar Module Management - Install your Node.js modules using IPFS
slug: 8-registry-mirror
author: David Dias
tags: []
categories: []
description: TBC
---

![]({attach}/images/node-interactive-logo.png)

Node.js Interactive, the first Node.js conference organized by the Linux Foundation, happened on Dec 8-9 of 2015. There were hundreds of participants, and dozens of really amazing talks divided in 3 specific tracks: backend, frontend and IoT.

I was fortunate to attend and present a project we've been developing at [Protocol Labs](https://ipn.io), that builds on on top of [IPFS, the InterPlanetary FileSystem](https://ipfs.io).

You can learn about that project in this blog post, check out the [talk slides](http://www.slideshare.net/DavidDias11/nodejs-interactive) or wait for the video recording of the talk. I will update this blog post when that happens.

## Enter registry-mirror

![]({attach}/images/enter-registry-mirror.png)
[![](https://img.shields.io/badge/made%20by-Protocol%20Labs-blue.svg?style=flat-square)](http://ipn.io) [![](https://img.shields.io/badge/project-IPFS-blue.svg?style=flat-square)](http://ipfs.io/) [![](https://img.shields.io/badge/freenode-%23ipfs-blue.svg?style=flat-square)](http://webchat.freenode.net/?channels=%23ipfs)

`registry-mirror` enables distributed discovery of npm modules by fetching and caching the latest state of npm through IPNS, the InterPlanetary Naming System. With this state, a node in the network is capable of querying IPFS network for an npm module's cryptographic hash, fetching it from any peer that has it available.

`registry-mirror` is open source, MIT licensed and available at [github.com/diasdavid/registry-mirror](https://github.com/diasdavid/registry-mirror).

## Getting started

In order to get started, you must first be sure that you are running IPFS 0.4.0. IPFS 0.4.0 is not yet released, but you can already use it by compiling from source or downloading the pre-built binary.

#### Compiling from source

You can find a tutorial on how to compile and install IPFS from source at [https://github.com/ipfs/go-ipfs#build-from-source](https://github.com/ipfs/go-ipfs#build-from-source). Just make sure to change to the `dev0.4.0` branch, as 0.4.0 isn't released yet.

Please make sure you have go 1.5.2 or above installed.

#### Downloading pre-built Binary

Download the pre-built binary for your OS and Arch at [gobuilder](https://gobuilder.me/github.com/ipfs/go-ipfs/cmd/ipfs?branch=v0.4.0-dev).

#### Installing and running registry-mirror

Once you have IPFS 0.4.0 available, install registry-mirror by running the following command (you should have Node.js 4 and npm 2 or above available):

```bash
$ npm i registry-mirror -g
# ...
```

Then start your IPFS daemon, run:

```bash
$ ipfs daemon
Initializing daemon...
Swarm listening on /ip4/127.0.0.1/tcp/4001
Swarm listening on /ip4/172.19.248.69/tcp/4001
Swarm listening on /ip6/::1/tcp/4001
API server listening on /ip4/127.0.0.1/tcp/5001
Gateway (readonly) server listening on /ip4/127.0.0.1/tcp/8080
Daemon is ready
```

After, run registry-mirror daemon with the `--ipfs` option:

```bash
$ registry-mirror daemon --ipfs --port=9595
IPFS mode ON
registry-mirror [info] output dir: /npm-registry/
registry-mirror [info] listening:127.0.0.1:9595
registry-mirror [info] Updated /npm-registry to: /ipfs/QmSjG9fadu4mPdtRsQYtXhwwCBouFEPiYHtVf8f4iH6vwj
```

Now, to install a module using IPFS, you only need to set this local registry when running an `npm install`. This can be done through [config](https://docs.npmjs.com/cli/config) or a command line argument:

```bash
$ npm i bignumber --registry=http://localhost:9595
npm http request GET http://localhost:9595/bignumber
npm http 200 http://localhost:9595/bignumber
npm http fetch GET http://localhost:9595/bignumber/-/bignumber-1.1.0.tgz
npm http fetch 200 http://localhost:9595/bignumber/-/bignumber-1.1.0.tgz
/Users/david/Documents/code/ipfs/ip-npm/node-interactive
└── bignumber@1.1.0
```

## Features

`registry-mirror` itself is quite a simple application, as most of the heavy lifting is done by [IPFS](https://ipfs.io). IPFS's distributed nature affords a set of really nice features as a transport layer that `registry-mirror` leverages to create its service.

#### Find where the module lives without having to hit the backbone

With `registry-mirror`, a registry becomes a curated list of hashes. While the modules live in the network, as soon as `registry-mirror` caches this list locally (which it gets from the IPFS network), it has a list of the hashes of the modules that a user might need in the future. With this list, a user doesn't have to know of the whereabouts of a module until it needs to request it from the network.

This list is fetched and kept up to date through IPNS. This ensures secure distribution, as IPNS records and validated with the publisher's priate key.

#### Work offline/disconnected

Just like git, `registry-mirror` is able to work offline and/or in a disconnected scenario. As long as the module you are looking for exists in the network you are currently in, IPFS would be able to find it through its Peer and Content Routing (e.g. with a DHT).

#### Enable several registries to coexist

Once the notion of a registry becomes a curated list of modules available, enabling more than one registry to exist becomes simpler. This scenario can be especially interesting for private networks such as the ones within companies and organizations that don't want their modules to be publicly known and available.

#### Run only what you were looking for

Just like git, IPFS verifies the content received using cryptographic hashing, making sure it is exactly what was requested -- you can always be sure that what you are running is what you asked for.

#### Faster

By leveraging local and network caches efficiently, downloading your dependencies can be much faster as it avoids going to npm's servers or CDN all the time. This can be crucial in high latency networks or more remote areas.

## Demo Video

<iframe src="https://player.vimeo.com/video/147968322" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> <p><a href="https://vimeo.com/147968322">registry-mirror demo</a> from <a href="https://vimeo.com/daviddias">David Dias</a> on <a href="https://vimeo.com">Vimeo</a>.</p>

## A special thanks

A very big thank you goes to [Bryan English](https://github.com/bengl) and everyone that was involved in the [discussion](https://github.com/ipfs/notes/issues/2) and contributed to make this possible.

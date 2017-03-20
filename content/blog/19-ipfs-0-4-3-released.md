---
date: 2016-09-20
slug: 19-ipfs-0-4-3-released
title: go-ipfs 0.4.3 has been released
author: Lars Gierth
---

[go-ipfs 0.4.3](https://dist.ipfs.io/#go-ipfs) has been released today,
and we're incredibly proud as it's the fastest and most stable IPFS ever.
Give it a try as soon as you can, we're sure you'll like it as much as we do.

## What's changed?

- Runtime performance has improved all over the place!
  Bitswap, Content Routing and Peer Routing, Datastore, Blockstore, you name it.
- Memory usage has improved as Provider records are now stored on disk.
- We now use Golang 1.7, which produces smaller and faster binaries.
- Connectivity between nodes is stabler than ever,
  as we fixed transport issues that were previously thought to be NAT-related.
- The go-ipfs daemon now automatically raises the limit of file descriptors if needed.
- The daemon now automatically runs fs-repo migrations.
- The daemon got new flags:
  - `ipfs daemon --offline` can be used to disable all swarm networking.
  - `ipfs daemon --migrate` automatically runs any pending fs-repo migrations.
- The Datastore got a few more config options:
  - `Datastore.HashOnRead` allows you to verify data on read access.
  - `Datastore.BloomFilterSize` tunes the new lookup cache.

And plenty of bug fixes as well as improvements to documentation and test coverage.
[Take a look at the Changelog](https://github.com/ipfs/go-ipfs/blob/master/CHANGELOG.md).

## How to upgrade

Depending on how you initially installed IPFS, there are several ways to
upgrade. If you installed IPFS with a pre-built binary, you can either head over
to [dist.ipfs.io](https://dist.ipfs.io/#go-ipfs) and grab the latest version
from there. Or alternatively, from the same page you can grab the `ipfs-update`
binary, and use it to perform the upgrade for you. If you installed from
source, you can simply run `git checkout v0.4.3`, then run `make install`.

Please upgrade your IPFS nodes as soon as you can,
so you can take advantage of the improvements.

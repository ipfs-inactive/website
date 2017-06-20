---
date: 2016-04-07
title: go-ipfs 0.4.0 has been released
slug: 14-ipfs-0-4-0-released
author: Kyle Drake and @whyrusleeping
tags: []
categories: []
description: TBC
---

[go-ipfs 0.4.0](http://dist.ipfs.io/#go-ipfs) has been
released! Among the many changes are a revamped implementation of the IPFS
communication protocols, increased performance, improvements to IPNS (the
Interplanetary Naming System), many bugfixes, and lots of new features to make
IPFS even more powerful.

![0.4.0](/blog/static/fireworks.jpg)

<!--more-->

## The IPFS **Files API**

In 0.4.0, we've added a new feature, the Files API, available through the
subcommand: `ipfs files`. This subcommand allows a program to interact with IPFS
using familiar filesystem operations, namely: creating directories, reading, writing
and deleting files, listing out different directories, and so on.

This feature enables any application that uses a filesystem-like backend
to use IPFS for storage without changing the application logic at all.

It is used like so:

```sh
> ipfs files mkdir /cats

> ipfs files ls /
cats

> echo bar | ipfs files write --create /cats/foo

> ipfs files ls /cats
foo

> ipfs files read /cats/foo
bar

> ipfs files stat /
QmNU8HmaeRa8VtfqAoQRJhSE5Zx54vyYf2nT1bDGcYXaNv
...

# /ipfs/QmNU8HmaeRa8VtfqAoQRJhSE5Zx54vyYf2nT1bDGcYXaNv is a snapshot
# of this file system!

# You can see it locally or on the public gateway:
#  https://ipfs.io/ipfs/QmNU8HmaeRa8VtfqAoQRJhSE5Zx54vyYf2nT1bDGcYXaNv

# Subsequent edits will produce a new /ipfs address for the root directory.
```

One great example of this is [ipfs-blob-store](https://github.com/ipfs/ipfs-blob-store),
an IPFS-backed storage driver that implements the
[blob-store-interface](https://github.com/maxogden/abstract-blob-store), so that any app
that uses any other blob-store storage driver (S3, IndexedDB, LevelDB, etc) can now use
IPFS. [registry-mirror](https://github.com/diasdavid/registry-mirror) uses this
approach to mirror the npm registry onto IPFS.

We are looking forward to seeing more use cases of this new convenient and powerful API.

## Why we're changing the protocol

The most important change allows IPFS implementations to use pluggable stream
multiplexers, such as [yamux](https://github.com/hashicorp/yamux),
[spdystream](https://github.com/docker/spdystream), or
[muxado](https://github.com/inconshreveable/muxado). Instead of locking IPFS
permanently into a single multiplexer that won't work for every language or
situation, this change allows each IPFS implementation to implement the
multiplexers that they choose to, and then negotiate which to use during the
initial connection handshake.

This modularity with stream muxing makes it easier for certain languages to
improve performance. For example, the Go programming language may have muxado
and yamux implementations that are really good, but many languages lack good (or
any) implementations of them. Or take Node.js, which works well with
spdy-transport, and it would be nice to take advantage of that. And
then there are options like
[multiplex](https://github.com/maxogden/multiplex), which may not have the
same performance, but are much easier to implement.

So, by supporting as many muxers as we can, we get to choose the best
multiplexers for the job. It also makes it much easier to implement the IPFS
protocols in a new language. And of course, if a better multiplexers standard
comes along, it will be easier to upgrade IPFS to support it in the future.

The same code that allows us to easily select a stream muxer is also being
used to select which IPFS sub-protocol to use for any given stream between
peers. Now, if we need to make a breaking protocol change to any of those (like
the DHT or bitswap) we can do so seamlessly, and provide easy backwards
compatibility. We won't need to "break" anything because we will be able to
have nodes run multiple protocols at the same time for compatibility.

In addition to the multiplexers changes, the protocol revamp has also improved
efficiency and performance in a few important ways, including the elimination of
a double wrapping of the length prefixer, and the removal of some unnecessary
round trips between nodes.

### Breaking changes

This release contains a **breaking change** to the network wire protocol  in the
form of a major refactor and upgrade to the libp2p handshake protocol.  Because
of the refactor, **all IPFS daemons earlier than 0.4.0 will not be able to
communicate with the newest version**. It is strongly recommended that everyone
running an IPFS node upgrades to the latest version as soon as possible, as
these nodes will, after a certain time, no longer be able to communicate with
the majority of the network until they are upgraded. There are instructions on
how to update below.

Refactoring the protocol is not something to be done lightly. But at this early
stage, this is necessary to ensure we have the right design for IPFS in place
for the future. It's better to improve the protocol now during this alpha stage
of the project than when there are a lot more people running nodes across a
lot of different implementations.

One of the important changes that's been made to the protocol means that *there
should never be a breaking change like this again*. This is due to a change to
allow nodes to announce the version of the protocol they are using when
connecting to other IPFS nodes. The goal is to roll any future protocol changes
into the implementations gradually, so that we can still support legacy
protocols for a period of time, making it easier to deprecate old versions over
time.

### The public gateway and bootstrappers

We provide two essential public services to the IPFS community: the public
gateway at https://ipfs.io and the default bootstrap nodes. We're making sure
that despite the breaking changes, both will continue to work with 0.4.x and
0.3.x for a while. You can read more about the details of this in an earlier
blog post: [Migrating ipfs.io from go-ipfs 0.3.x to 0.4.0](../9-v04x-migration).
We expect to keep this grace period open until the end of April 2016.

## Changes to the repo

We made a few changes to our on disk storage format (called the 'repo').
The way object pinning (`ipfs pin add`) works has also been upgraded to be much
more efficient, which will improve the overall speed of adding and downloading
IPFS data. Previously, when you pinned a file recursively, it would add a
recursive type pin to the root, and then add an indirect type pin to each child
node. This made enumeration for GC convenient, but was very slow and made a lot
of things needlessly complicated. We have switched to just adding the recursive
pin to the root object, and then doing the enumeration of child nodes when we
actually run a garbage collection.

Because of this change, you will need to run a migration (from repo version 2
to version 3). If you update with the `ipfs-update` tool, this will be done for
you automatically. If you updated manually, and did not run the migration, ipfs
will fail to run, and print a message saying that there is a mismatch in the repo
versions.

## Other improvements and fixes

In addition to a major protocol improvement and upgrade, this release adds a lot
of new functionality, performance speedups, and stability fixes that make this
the best version of IPFS to date.

This release also includes performance and usability improvements to IPNS,
which is IPFS's mutability layer. IPNS creates a link from an IPFS node's
public key to the hash of an arbitrary objects hash, in a way that is
cryptographically verifiable. We call this "publishing" a hash, and you can try
it out using the `ipfs publish` command. By allowing users to change what the
pubkey hash points to, we provide users with a single hash they can give to their
users to get the latest version of their data. This creates a seamless way to
use IPFS to verify content, and to distribute content via trustless nodes in a
smart, safe way.  This brings IPFS closer to the goal of being a global
filesystem of data, that can allow everyone in the world to help serve the
world's data in a way that enriches and empowers everybody.

## How to upgrade

Depending on how you initially installed IPFS, there are several ways to
upgrade. If you installed IPFS with a pre-built binary, you can either head over
to [dist.ipfs.io](http://dist.ipfs.io/#go-ipfs) and grab the latest version
from there. Or alternatively, from the same page you can grab the `ipfs-update`
binary, and use it to perform the upgrade for you. If you installed from
source, you can simply update your git repo to the `v0.4.0` tag, run `make
toolkit_upgrade && make install`.

Please upgrade your IPFS nodes as soon as you can, so you can take advantage
of the improvements!

## Changelog

This is a major release with plenty of new features and bugfixes.
It also includes breaking changes which make it incompatible with v0.3.x
on the networking layer.

* Major Changes
  * Multistream
    * The addition of multistream is a breaking change on the networking layer,
      but gives IPFS implementations the ability to mix and match different
      stream multiplexers, e.g. yamux, spdystream, or muxado.
      This adds a ton of flexibility on one of the lower layers of the protocol,
      and will help us avoid further breaking protocol changes in the future.
  * Files API
    * The new `files` command and API allow a program to interact with IPFS
      using familiar filesystem operations, namely: creating directories,
      reading, writing, and deleting files, listing out different directories,
      and so on. This feature enables any other application that uses a
      filesystem-like backend for storage, to use IPFS as its storage driver
      without having change the application logic at all.
  * Gx
    * go-ipfs now uses [gx](https://github.com/whyrusleeping/gx) to manage its
      dependencies. This means that under the hood, go-ipfs's dependencies are
      backed by IPFS itself! It also means that go-ipfs is no longer installed
      using `go get`. Use `make install` instead.
* New Features
  * Web UI
    * Update to new version which is compatible with 0.4.0. (@dignifiedquire)
  * Networking
    * Implement uTP transport. (@whyrusleeping)
    * Allow multiple addresses per configured bootstrap node. (@whyrusleeping)
  * IPNS
    * Improve IPNS resolution performance. (@whyrusleeping)
    * Have dnslink prefer `TXT _dnslink.example.com`, allows usage of CNAME records. (@Kubuxu)
    * Prevent `ipfs name publish` when `/ipns` is mounted. (@noffle)
  * Repo
    * Improve performance of `ipfs add`. (@whyrusleeping)
    * Add `Datastore.NoSync` config option for flatfs. (@rht)
    * Implement mark-and-sweep GC. (@whyrusleeping)
    * Allow for GC during `ipfs add`. (@whyrusleeping)
    * Add `ipfs repo stat` command. (@tmg, @diasdavid)
  * General
    * Add support for HTTP OPTIONS requests. (@lidel)
    * Add `ipfs diag cmds` to view active API requests (@whyrusleeping)
    * Add an `IPFS_LOW_MEM` environment veriable which relaxes Bitswap's memory usage. (@whyrusleeping)
    * The Docker image now lives at `ipfs/go-ipfs` and has been completely reworked. (@lgierth)
* Security fixes
  * The gateway path prefix added in v0.3.10 was vulnerable to cross-site
    scripting attacks. This release introduces a configurable list of allowed
    path prefixes. It's called `Gateway.PathPrefixes` and takes a list of
    strings, e.g. `["/blog", "/foo/bar"]`. The v0.3.x line will not receive any
    further updates, so please update to v0.4.0 as soon as possible. (@lgierth)
* Incompatible Changes
  * Install using `make install` instead of `go get` (@whyrusleeping)
  * Rewrite pinning to store pins in IPFS objects. (@tv42)
  * Bump fs-repo version to 3. (@whyrusleeping)
  * Use multistream muxer (@whyrusleeping)
  * The default for `--type` in `ipfs pin ls` is now `all`. (@chriscool)
* Bug Fixes
  * Remove msgio double wrap. (@jbenet)
  * Buffer msgio. (@whyrusleeping)
  * Perform various fixes to the FUSE code. (@tv42)
  * Compute `ipfs add` size in background to not stall add operation. (@whyrusleeping)
  * Add option to have `ipfs add` include top-level hidden files. (@noffle)
  * Fix CORS checks on the API. (@rht)
  * Fix `ipfs update` error message. (@tomgg)
  * Resolve paths in `ipfs pin rm` without network lookup. (@noffle)
  * Detect FUSE unmounts and track mount state. (@noffle)
  * Fix go1.6rc2 panic caused by CloseNotify being called from wrong goroutine. (@rwcarlsen)
  * Bump DHT kvalue from 10 to 20. (@whyrusleeping)
  * Put public key and IPNS entry to DHT in parallel. (@whyrusleeping)
  * Fix panic in CLI argument parsing. (@whyrusleeping)
  * Fix range error by using larger-than-zero-length buffer. (@noffle)
  * Fix yamux hanging issue by increasing AcceptBacklog. (@whyrusleeping)
  * Fix double Transport-Encoding header bug. (@whyrusleeping)
  * Fix uTP panic and file descriptor leak. (@whyrusleeping)
* Tool Changes
  * Add `--pin` option to `ipfs add`, which defaults to `true` and allows `--pin=false`. (@eminence)
  * Add arguments to `ipfs pin ls`. (@chriscool)
  * Add `dns` and `resolve` commands to read-only API. (@Kubuxu)
  * Add option to display headers for `ipfs object links`. (@palkeo)
* General Codebase Changes
  * Check Golang version in Makefile. (@chriscool)
  * Improve Makefile. (@tomgg)
  * Remove dead Jenkins CI code. (@lgierth)
  * Add locking interface to blockstore. (@whyrusleeping)
  * Add Merkledag FetchGraph and EnumerateChildren. (@whyrusleeping)
  * Rename Lock/RLock to GCLock/PinLock. (@jbenet)
  * Implement pluggable datastore types. (@tv42)
  * Record datastore metrics for non-default datastores. (@tv42)
  * Allow multistream to have zero-rtt stream opening. (@whyrusleeping)
  * Refactor `ipnsfs` into a more generic and well tested `mfs`. (@whyrusleeping)
  * Grab more peers if bucket doesn't contain enough. (@whyrusleeping)
  * Use CloseNotify in gateway. (@whyrusleeping)
  * Flatten multipart file transfers. (@whyrusleeping)
  * Send updated DHT record fixes to peers who sent outdated records. (@whyrusleeping)
  * Replace go-psutil with go-sysinfo. (@whyrusleeping)
  * Use ServeContent for index.html. (@AtnNn)
  * Refactor `object patch` API to not store data in URL. (@whyrusleeping)
  * Use mfs for `ipfs add`. (@whyrusleeping)
  * Add `Server` header to API responses. (@Kubuxu)
  * Wire context directly into HTTP requests. (@rht)
  * Wire context directly into GetDAG operations within GC. (@rht)
  * Vendor libp2p using gx. (@whyrusleeping)
  * Use gx vendored packages instead of Godeps. (@whyrusleeping)
  * Simplify merkledag package interface to ease IPLD inclusion. (@mildred)
  * Add default option value support to commands lib. (@whyrusleeping)
  * Refactor merkledag fetching methods. (@whyrusleeping)
  * Use net/url to escape paths within Web UI. (@noffle)
  * Deprecated key.Pretty(). (@MichealMure)
* Documentation
  * Fix and update help text for **every** `ipfs` command. (@RichardLitt)
  * Change sample API origin settings from wildcard (`*`) to `example.com`. (@Kubuxu)
  * Improve documentation of installation process in README. (@whyrusleeping)
  * Improve windows.md. (@chriscool)
  * Clarify instructions for installing from source. (@noffle)
  * Make version checking more robust. (@jedahan)
  * Assert the source code is located within GOPATH. (@whyrusleeping)
  * Remove mentions of `/dns` from `ipfs dns` command docs. (@lgierth)
* Testing
  * Refactor iptb tests. (@chriscool)
  * Improve t0240 sharness test. (@chriscool)
  * Make bitswap tests less flaky. (@whyrusleeping)
  * Use TCP port zero for ipfs daemon in sharness tests. (@whyrusleeping)
  * Improve sharness tests on AppVeyor. (@chriscool)
  * Add a pause to fix timing on t0065. (@whyrusleeping)
  * Add support for arbitrary TCP ports to t0060-daemon.sh. (@noffle)
  * Make t0060 sharness test use TCP port zero. (@whyrusleeping)
  * Randomized ipfs stress testing via randor (@dignifiedquire)
  * Stress test pinning and migrations (@whyrusleeping)

---
date: 2016-07-09
slug: 18-v03x-shutdown
title: go-ipfs 0.3.x network shutdown on July 14th
author: Lars Gierth
---

The [0.4.x (v04x) series][v04x] of go-ipfs has brought plenty of useful features, and it has been a great success for the whole IPFS community.

As we're getting closer to the release of go-ipfs 0.4.3, we're also getting closer to ceasing the [remaining support that we've given to the 0.3.x (v03x) series][migration] of go-ipfs. It's been a good while since we last reminded everyone that the v03x network will be discontinued, and we want to use this opportunity to make sure that nobody is taken by surprise.

We'll be **shutting down** the v03x bootstrappers and gateways on **Thursday, July 14th**. After this date, with go-ipfs 0.3.x:

- The bootstrap nodes configured by default will no longer allow you to connect.
- The public HTTP-to-IPFS gateway at [ipfs.io][gw] will no longer be able to access data from v03x networks.

We ask you to update to the latest 0.4.x version, available through [dist.ipfs.io][dist]. If you can't update just yet, you can still connect your v03x nodes to each other by using the `ipfs bootstrap` or `ipfs swarm connect` commands.

[migration]: https://ipfs.io/blog/9-v04x-migration/
[v04x]: https://ipfs.io/blog/14-ipfs-0-4-0-released/
[dist]: https://dist.ipfs.io
[gw]: https://ipfs.io

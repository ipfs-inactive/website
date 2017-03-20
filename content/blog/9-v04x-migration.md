---
date: 2016-02-12
slug: 9-v04x-migration
title: Migrating ipfs.io from go-ipfs 0.3.x to 0.4.0
author: Lars Gierth
---

Good news everyone! We'll soon release go-ipfs 0.4.0,
which contains lots of great changes and enhancements.
An upcoming post will detail the improvements of 0.4.0.
This post is about important things to be aware of when upgrading.
Users who already rely on go-ipfs or the ipfs.io services should pay special attention.

There are breaking changes
which prevent 0.4.x nodes from communicating with 0.3.x nodes.
We know breaking changes are painful. We avoid them.
In this case, the improvement makes IPFS substantially more upgradable.
It's one of those things that "should've been different" from the start.
Having the freedom to improve the core protocol is why IPFS is still in alpha phase.

Nevertheless, we take service disruption very seriously even in these early days.
We know thousands of developers use IPFS,
and hundreds of thousands of people rely on IPFS links to our gateway.
So we planned a smooth upgrade path.

The breaking change is at the wire protocol level,
which means there will be, and already are, two separate networks.
We'll call these networks v03x and v04x.
IPFS nodes built from the master branch are already part of v04x.
The Docker image `ipfs/go-ipfs` is built from master (until 0.4.0 is released)
and thus also part of v04x.

ipfs.io provides two essential services to the community, which are affected by this:
the public HTTP-to-IPFS gateway and the default bootstrappers.
We'll continue to support them for the v03x network until the **end of April 2016**.

Please note that we won't support 0.3.x with patches or new features.
All development effort is directed towards 0.4.0, and you should update as soon as possible.

- [How do I update go-ipfs to 0.4.0?](#how-do-i-update-go-ipfs-to-0-4-0-)
- [The public gateways at ipfs.io](#the-public-gateways-at-ipfs-io)
- [Solarnet: the default bootstrappers](#solarnet-the-default-bootstrappers)
- [How does this affect me?](#how-does-this-affect-me-)


## How do I update go-ipfs to 0.4.0?

Until we release 0.4.0, you can update by [building from source][ipfs-source].

After the release, you can:

- Use the brand new [ipfs-update tool][ipfs-update] to update go-ipfs **(recommended)**
- Download [the new go-ipfs binaries][ipfs-binary] and install them.
- Download [the new source][ipfs-github] and [build it yourself][ipfs-source].

Please note that installation with `go get` does not work at this time.
We are experimenting with [gx, the new IPFS-based package manager][gx].

[ipfs-update]: http://dist.ipfs.io/#ipfs-update
[ipfs-binary]: http://dist.ipfs.io/#go-ipfs
[ipfs-github]: https://github.com/ipfs/go-ipfs
[ipfs-source]: https://github.com/ipfs/go-ipfs#build-from-source
[gx]: https://github.com/whyrusleeping/gx


## The public gateways at ipfs.io

For the time being, https://ipfs.io uses both v03x and v04x to service requests.
Content available in either network will be served just fine.
Whichever responds successfully first (2xx or 3xx status code),
gets to serve its content. The other response is discarded.
If the first response is not successful (4xx/5xx, connection errors),
it is discarded and the second response is served, regardless of its status code.

We're using the [multireq proxy][multireq] to accomplish this multiplexing behaviour.
`multireq` is a new tool, so if you notice any weirdness with gateway requests,
[please let us know][infra-issues].

If you want to target a specific network, use v03x.ipfs.io or v04x.ipfs.io.
These domain names will stay around as long as the respective network is
supported by the public gateway.

All of the above also applies to the `/api` endpoint (the readonly API),
which is part of the gateway.

Expect the **v03x gateway** to be **supported until the end of April 2016.**
After that day, ipfs.io will be served by v04x exclusively,
and v03x.ipfs.io will no longer work.

[multireq]: https://github.com/whyrusleeping/multireq
[infra-issues]: https://github.com/ipfs/infrastructure/issues/


## Solarnet: the default bootstrappers

We call the 8 bootstrap nodes in go-ipfs's default config the default bootstrappers.
Their PeerIDs start with `QmSoL` (for Solarnet),
and all of them use `/tcp/4001` and/or `/udp/4002/utp`.
Use `ipfs bootstrap` to see or modify the bootstrappers currently used by your IPFS node.

In order to balance the default bootstrappers over v03x and v04x,
a few of them bind v04x to these ports, and a few bind v03x.
The respective other network is bound to `/tcp/14001` and `/udp/14002/utp`.
This means that all 8 hosts run bootstrappers for both networks,
but are available as default bootstrappers only to one.

We'll gradually shift the v03x/v04x ratio to v04x.
Expect at least **two v03x bootstrappers** to be **supported until the end of April 2016.**


## How does this affect me?

Check which version of go-ipfs you are running: `ipfs version`

If you rely on the public gateways,
we ask you to please upgrade to 0.4.0 as soon as you can.
You can subscribe [to this issue][ready-yet] to be notified when 0.4.0 is released.

If you're running an 0.3.x node, it won't be able to communicate
with any node which has updated to 0.4.x, let alone exchange data.
You can access data added by 0.4.0 nodes using the public gateway.
Likewise, data added by your 0.3.x node is still available on the public gateway.

If you're running an 0.4.0 node, all is well in the world.
You don't need to do anything.

Thank you for bearing with this important change.
We seek to provide a smooth transition for everyone,
and wish we didn't have to bother you with this at all.

[ready-yet]: https://github.com/ipfs/go-ipfs/issues/2334

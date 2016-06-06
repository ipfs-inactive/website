date: 2016-01-11
title: IPFS Weekly 1
author: Richard Littauer, Andrew Chin

Welcome to the first edition of IPFS Weekly!

[IPFS](//ipfs.io/) is a new hypermedia distribution protocol, addressed by content and identities, aiming to make the web faster, safer, and more open.  In these posts, we will try to highlight some of the development that happened in the past week.  For anyone looking to get involved, follow the embedded hyperlinks, search the wealth of information on [github](//github.com/ipfs) or join us on [IRC](//webchat.freenode.net/?channels=ipfs) (#ipfs on the Freenode network).

Since this is our first time launching the Weekly, we've included several past weeks. This is partially because we've been refining our process, and wanted to make the first weekly a great one. In the future, they will be released weekly. If you have any feedback about this process in general, let us know [here](//github.com/ipfs/weekly/issues/7). Thanks!

## December 21

Here are some of the highlights for the [December 21](//github.com/ipfs/pm/issues/76) Sprint:


### 32c3

Not too much happened during this sprint, because it was the holidays - however, it was also the 32nd CCC. [@whyrusleeping](//github.com/whyrusleeping), [@diasdavid](//github.com/diasdavid), [@lgierth](//github.com/lgierth), [@Dignifiedquire](//github.com/Dignifiedquire) and more of the team were over there in Hamburg.

![](https://ipfs.io/ipfs/QmWYaX56pTskFL2UMV2x8ZZAB8xyntPce5bFmY8ugHw47j/32c3.ipfs.2.jpg)

* [@whyrusleeping](//github.com/whyrusleeping) gave a lightning talk (see above).
* [@whyrusleeping](//github.com/whyrusleeping) [@diasdavid](//github.com/diasdavid) and [@Dignifiedquire](//github.com/Dignifiedquire) led an install party and live demo.
* [@MrChrisJ](//github.com/MrChrisJ) led a discussion about his [Full Node project](//news.bitcoin.com/developer-chris-ellis-builds-full-bitcoin-nodes-12-hours/), which includes IPFS.
* We met lots of our users, and other groups (including [Tahoe-LAFS](https://www.tahoe-lafs.org/trac/tahoe-lafs), [tor](https://www.torproject.org/), etc).

### Updates

* [**(go-ipfs)**](//github.com/ipfs/go-ipfs) [@whyrusleeping](//github.com/whyrusleeping) and [@diasdavid](//github.com/diasdavid) did amazing work closing around 200 issues as part of the "Great go-ipfs Issue Party of 2015".
* [**(registry-mirror)**](//github.com/diasdavid/registry-mirror) npm on IPFS was furthered by [@diasdavid](//github.com/diasdavid) by making it work with 0.4.0. Currently, there are 130,000 modules and it's going strong.
* [**(go-ipfs)**](//github.com/ipfs/go-ipfs) [@lgierth](//github.com/lgierth) set up namaka and hiiaka (NUC nodes at our table at 32c3). This is pretty cool. CF. [ipfs/infrastructure#142](//github.com/ipfs/infrastructure#142).
* [**(readme-standard)**](//github.com/RichardLitt/readme-standard) [@RichardLitt](//github.com/RichardLitt) had his own great issue party. He's most proud of breaking ground on the future [readme standard](//github.com/RichardLitt/readme-standard/issues/1) for IPFS.
* [**(webui)**](//github.com/ipfs/webui) [@Dignifiedquire](//github.com/Dignifiedquire) did some awesome work improving the webui [using webpack](//github.com/ipfs/webui/issues/87).
* He _also_ managed to release [rust-multiaddr](//github.com/Dignifiedquire/rust-multiaddr) and [rust-multihash](//github.com/Dignifiedquire/rust-multihash), which means more languages now implement the orginal [multihash](//github.com/jbenet/multihash) and [multiaddr](//github.com/jbenet/multiaddr) specs.

For more updates, see the [sprint issue](//github.com/ipfs/pm/issues/76).

## December 14

Here are some of the highlights for the [December 14](//github.com/ipfs/pm/issues/74) Sprint:

### Releases
* [@whyrusleeping](//github.com/whyrusleeping) shipped [fs-repo-migrations](//github.com/ipfs/fs-repo-migrations)! These are migrations for the filesystem repository of ipfs clients. This tool is written in Go, and developed alongside go-ipfs, but it should work with any repo conforming to the fs-repo specs.
* [@Dignifiedquire](//github.com/Dignifiedquire) did some great work with [rust-multiaddr](//github.com/Dignifiedquire/rust-multiaddr), which is a Rust implementation of [@jbenet](//github.com/jbenet)'s [multiaddr](//github.com/jbenet/multiaddr).

### Updates
* [**(registry-mirror)**](//github.com/diasdavid/registry-mirror) [@diasdavid](//github.com/diasdavid) worked on the npm on IPFS project. This involved some new features, moving the mirror to a different server, and making it work better with larger dirs and with 0.4.0.
* [**(js-ipfs)**](//github.com/ipfs/js-ipfs [@diasdavid](//github.com/diasdavid) pushed some major updates for [js-ipfs](//github.com/ipfs/js-ipfs-repo), too.

Not much else to report this week; a lot of people are off to enjoy CCC, and the holidays.

## December 7th

Here are some highlights of what happened during the [December 7 Sprint](//github.com/ipfs/pm/issues/67) :

### Releases
* [@whyrusleeping](//github.com/whyrusleeping)  shipped IPFS version 0.3.10!  It contains [74 new commits](//github.com/ipfs/go-ipfs/compare/v0.3.9...v0.3.10) since the previous version and you can [get it here](//ipfs.io/docs/install/).
* npm on IPFS!  `registry-mirror` is a new tool that enables distributed discovery of npm modules by fetching and caching the latest state of npm through IPNS.  For more info, see this [blog post](//blog.daviddias.me/2015/12/08/stellar-module-management) by [@diasdavid](//github.com/diasdavid) .
* [@jbenet](//github.com/jbenet) released a new tool/library called [dnslink](//github.com/jbenet/go-dnslink) that makes it easy to resolve dns links (special TXT records in a domain name that can point to paths, like an IPFS path)

### Updates
* [**(infrastructure)**](//github.com/ipfs/infrastructure) On the infrastructure side of things, [@lgierth](//github.com/lgierth) has [bootstrapped](//github.com/ipfs/infrastructure/pull/135) two new storage, each with 17 TB of disk space!
* [**(api)**](//github.com/ipfs/api) [@RichardLitt](//github.com/RichardLitt) has [reached a draft 1]((//github.com/ipfs/api/pull/13) of the much needed API documentation.
* [@harlantwood](//github.com/harlantwood) wrote a bit of [nodejs code](//github.com/ipfs/project-repos/pull/11) that spins up a fresh IPFS node, sets it to a known ID, and publishes to IPNS using that node.
* [**(specs)**](//github.com/ipfs/specs) The new IPFS Linked Data (IPLD) spec is actively being iterated on in the specs repository.  Join the discussion [here!](//github.com/ipfs/specs/pull/37)

### Active stuff
* [@robcat](//github.com/robcat) and [@fazo](//github.com/fazo)96 have done great work integrating IPFS with pacman (the package manager for Arch Linux).  They can now install arch packages straight from IPFS!  For more details, see [this active discussion](//github.com/ipfs/notes/issues/84).
* [@Dignifiedquire](//github.com/Dignifiedquire) has been working on an attractive new distribution page for IPFS, which will be the new landing page to download all things IPFS.  You can see the [latest screenshots here](//github.com/ipfs/distributions/issues/11).

## Contributors

Across the entire IPFS GitHub organization, the following people have committed code since December 7th. (We're autogenerating this list using [this tool](//github.com/ipfs/weekly/pull/5), so please let us know if your name isn't here.) In the future, we will also include people who comment, as they are also super important; bear with us while we develop that technology.


* [@alexmingoia](//github.com/alexmingoia) (Alex Mingoia)
* [@chriscool](//github.com/chriscool) (Christian Couder)
* [@diasdavid](//github.com/diasdavid) (David Dias)
* [@digital-dreamer](//github.com/digital-dreamer)
* [@Dignifiedquire](//github.com/Dignifiedquire) (Friedel Ziegelmayer)
* [@djdv](//github.com/djdv) (Dominic Della Valle)
* [@fazo96](//github.com/fazo96) (Enrico Fasoli)
* [@greenkeeperio-bot](//github.com/greenkeeperio-bot)
* [@harlantwood](//github.com/harlantwood) (Harlan T Wood)
* [@hcs64](//github.com/hcs64) (Adam Gashlin)
* [@ianopolous](//github.com/ianopolous) (Ian Preston)
* [@ivilata](//github.com/ivilata) (Ivan Vilata-i-Balaguer)
* [@jbenet](//github.com/jbenet) (Juan Benet)
* [@jedahan](//github.com/jedahan) (Jonathan Dahan)
* [@Kubuxu](//github.com/Kubuxu) (Jakub Sztandera)
* [@kyledrake](//github.com/kyledrake) (Kyle Drake)
* [@lgierth](//github.com/lgierth) (Lars Gierth)
* [@NeoTeo](//github.com/NeoTeo) (Teo Sartori)
* [@ralphtheninja](//github.com/ralphtheninja) (Lars-Magnus Skog)
* [@ReadmeCritic](//github.com/ReadmeCritic)
* [@rht](//github.com/rht)
* [@RichardLitt](//github.com/RichardLitt) (Richard Littauer)
* [@travisperson](//github.com/travisperson) (Travis Person)
* [@wasserfuhr](//github.com/wasserfuhr) (RainerWasserfuhr)
* [@whyrusleeping](//github.com/whyrusleeping) (Jeromy Johnson)
* [@zignig](//github.com/zignig) (Simon Kirkby)

Thanks, and see you next week!

- Richard Littauer and Andrew Chin

[_Send us feedback about the Weekly_](//github.com/ipfs/weekly/issues/7)

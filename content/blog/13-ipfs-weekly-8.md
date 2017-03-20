---
date: 2016-03-22
slug: 13-ipfs-weekly-8
title: IPFS Weekly 8
author: Richard Littauer
---

[IPFS](//ipfs.io/) is a new hypermedia distribution protocol, addressed by content and identities, aiming to make the web faster, safer, and more open. In these posts, we highlight some of the development that has happened in the past week. For anyone looking to get involved, follow the embedded hyperlinks, search the wealth of information on [GitHub](//github.com/ipfs) or join us on [IRC](//webchat.freenode.net/?channels=ipfs) (#ipfs on the Freenode network).

If you would like to get this update as an email, sign up for our [weekly newsletter](//tinyletter.com/ipfsweekly)!

Here are some of the highlights for the [March 14](//github.com/ipfs/pm/issues/97) sprint:

## Updates

![webui]({attach}/images/blog/008_webui.gif)

### [webui](//github.com/ipfs/webui)

[@dignifiedquire](//github.com/dignifiedquire) has been working hard on the new webui, which will be coming soon. You'll be able to preview images, watch videos, create folders, drag and drop, and more. Here's a pretty gif. To help out, check out the [help wanted labels](//github.com/ipfs/webui/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22) on the repo.

### PubSub

There are some active discussions on PubSub, following a good video chat last week during the hangouts. PubSub is the name we're using to talk about a simple protocol which will help facilitate easy publishing and subscribing on top of IPFS. Our requirements are that it must be easy to implement, well-layered, and mesh well with the rest of the IPFS abstractions. To join the conversation about the PubSub API, check out this [issue](//github.com/ipfs/notes/issues/118). For more discussions, check out all of the [PubSub issues in the notes repo](//github.com/ipfs/notes/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+pubsub).

### [ipfs-log](//github.com/haadcode/ipfs-log)

[@haadcode](//github.com/haadcode) has been working on and released [ipfs-log](//github.com/haadcode/ipfs-log), a partially ordered linked list of IPFS hashes. Each entry in the log points to all known heads or leaf nodes. It can be used as a building block for applications that need to track "dynamic content", eg. track a version of a file, create a feed of IPFS hashes, messaging or as a transport for CRDTs. THis was originally created for, and is currently used in, [orbit-db](//github.com/haadcode/orbit-db), a KV-store and Event Log on IPFS.

### ipfs init

`ipfs init` for js-ipfs [is almost complete](//github.com/ipfs/js-ipfs/pull/91), thanks to [@noffle](//github.com/noffle). This will have go-ipfs compatibility, but run using only JavaScript. If you like building tests and sharpening your semicolons, there's plenty of [opportunities to contribute](//github.com/ipfs/js-ipfs#contribute) in js-ipfs land.

### [go-ipfs](//github.com/ipfs/go-ipfs)

This week in go-ipfs, we prepped for shipping version 0.4.0. This included lots of testing, writing of information, and verification of different aspects of IPFS. [@whyrusleeping](//github.com/whyrusleeping) wrote a stress test for the fs-repo-migrations that adds a very large number of objects (over 200,000) and pins a couple thousand of them, runs the migration, verifies ​everything​, runs a gc, and then verifies everything again. Once that got working, he kicked off a test run of that with the numbers bumped by a factor of 10 (over two million objects!) and everything completed just fine. This robustness means that 0.4.0 will be ready to ship very, very soon.

### [ipfs-firefox-addon](//github.com/lidel/ipfs-firefox-addon)

There were some changes in [ipfs-firefox-addon](//github.com/lidel/ipfs-firefox-addon) since it was mentioned in Weekly No.3 (v1.4.2).

The Firefox addon that provides transparent access to IPFS resources via local HTTP2IPFS gateway has been fully reviewed by Mozilla and updated to [v1.5.6](https://addons.mozilla.org/en-US/firefox/addon/ipfs-gateway-redirect/versions/1.5.6). On average it has [over 350 daily users](https://addons.mozilla.org/en-US/firefox/addon/ipfs-gateway-redirect/statistics/?last=365).

The 1.5.x series brings various UX improvements such as Realtime Status and Diagnostics, along with experimental features that can be enabled on the Preferences screen. Check the full list [at Github](//github.com/lidel/ipfs-firefox-addon#features). Feature requests and bug reports [are welcome](//github.com/lidel/ipfs-firefox-addon/issues)!

## Community

### [Mediachain](https://medium.com/mine-labs/mediachain-483f49cbe37a#.50am8s6cw)

Our friends at [Mine](http://www.mine.nyc/) [recently released](https://medium.com/mine-labs/mediachain-developer-update-vi-94d28cf6bc30#.kt6uoc9yk)
[L-SPACE](https://github.com/mediachain/L-SPACE), the Mediachain server. they
have also been writing great updates to [their blog](https://medium.com/mine-labs):
[How Mediachain works](https://medium.com/mine-labs/how-mediachain-works-5a5ccc1c3210#.tv0cv5kc8),
[Dev Update V](https://medium.com/mine-labs/mediachain-developer-update-v-a7f6006ad953#.j0esgkawa),
[Dev Update VI](https://medium.com/mine-labs/mediachain-developer-update-vi-94d28cf6bc30#.kt6uoc9yk),
and more. The press took notice and Mediachain has been featured in
[Nasdaq](http://www.nasdaq.com/article/mediachain-protect-digital-content-with-a-bitcoin-based-metadata-protocol-cm595895),
[Bitcoin Magazine](https://bitcoinmagazine.com/articles/mediachain-protect-digital-content-with-a-bitcoin-based-metadata-protocol-1458577763),
[CCN](https://www.cryptocoinsnews.com/protecting-rights-to-digital-works-with-blockchain-technology/),
and more! Congratulations, and thanks for the IPFS shoutouts there!

### Lisbon

[@diasdavid](//github.com/diasdavid) organized a research and development meeting for IPFS in Lisbon. If you're in the area, join [this meetup group](http://www.meetup.com/ipfs-lisbon-meetup/events/229530492/).

## Press

Bitcoin Magazine had a guest post by [Zach Ramsay](https://twitter.com/cerebralbosons), from Eris Industries, about [How Blockchains Can Further Public Science](http://www.nasdaq.com/article/how-blockchains-can-further-public-science-cm592775). Zach also published part two on the Eris blog: [Public Science: A Slightly More Practical Guide](https://db.erisindustries.com/science/2016/03/15/chains-and-science-how-to/). Both are well worth the read, especially if you're in academia.

## Contributors

Across the entire IPFS GitHub organization, the following people have committed code, created issues, or made a comment on GitHub between March 14th (noon, GMT) and March 21st. We're autogenerating this list using [this tool](//github.com/ipfs/weekly/blob/master/tools/get_commits.py) and [this other tool](//github.com/richardlitt/name-your-contributors), so please let us know if your name isn't here.

- [@amstocker](//github.com/amstocker) (Andrew Stocker)
- [@anarcat](//github.com/anarcat) (anarcat)
- [@ansuz](//github.com/ansuz) (ansuz)
- [@basile-henry](//github.com/basile-henry) (Basile Henry)
- [@bdunlay](//github.com/bdunlay) (Brian Dunlay)
- [@brainframe-me](//github.com/brainframe-me) (Cox Davy)
- [@candeira](//github.com/candeira) (Javier Candeira)
- [@chpio](//github.com/chpio)
- [@chriscool](//github.com/chriscool) (Christian Couder)
- [@christianlundkvist](//github.com/christianlundkvist) (Christian Lundkvist)
- [@Cleric-K](//github.com/Cleric-K)
- [@clkao](//github.com/clkao) (Chia-liang Kao)
- [@davidar](//github.com/davidar) (David A Roberts)
- [@diasdavid](//github.com/diasdavid) (David Dias)
- [@dignifiedquire](//github.com/dignifiedquire) (Friedel Ziegelmayer)
- [@doesntgolf](//github.com/doesntgolf) (Nate Dobbins)
- [@ehd](//github.com/ehd) (Stephan Seidt)
- [@eminence](//github.com/eminence) (Andrew Chin)
- [@fazo96](//github.com/fazo96) (Enrico Fasoli)
- [@GoogilyBoogily](//github.com/GoogilyBoogily) (Derek Mayer)
- [@greenkeeperio-bot](//github.com/greenkeeperio-bot) (Greenkeeper)
- [@haadcode](//github.com/haadcode) (Haad)
- [@harlantwood](//github.com/harlantwood) (Harlan T Wood)
- [@ianopolous](//github.com/ianopolous) (Ian Preston)
- [@ingokeck](//github.com/ingokeck) (Ingo Keck)
- [@jbenet](//github.com/jbenet) (Juan Benet)
- [@jwsher](//github.com/jwsher) (Justin Sher)
- [@kalmi](//github.com/kalmi) (Tarnay Kálmán)
- [@kevina](//github.com/kevina) (Kevin Atkinson)
- [@klartext](//github.com/klartext)
- [@kseistrup](//github.com/kseistrup) (Klaus Alexander Seistrup)
- [@Kubuxu](//github.com/Kubuxu) (Jakub Sztandera)
- [@lgierth](//github.com/lgierth) (Lars Gierth)
- [@lhenocque](//github.com/lhenocque)
- [@lidel](//github.com/lidel) (Marcin Rataj)
- [@luigiplr](//github.com/luigiplr) (Luigi Poole)
- [@matshenricson](//github.com/matshenricson) (Mats Henricson)
- [@MaxEntropyy](//github.com/MaxEntropyy)
- [@Mec-iS](//github.com/Mec-iS) (Lorenzo)
- [@mildred](//github.com/mildred) (Mildred Ki'Lya)
- [@Mithgol](//github.com/Mithgol)
- [@mlbk0](//github.com/mlbk0)
- [@mnp](//github.com/mnp) (Mitchell Perilstein)
- [@montagsoup](//github.com/montagsoup)
- [@nginnever](//github.com/nginnever) (Nathan Ginnever)
- [@nicola](//github.com/nicola) (Nicola Greco)
- [@noffle](//github.com/noffle) (Stephen Whitmore)
- [@palkeo](//github.com/palkeo) (palkeo)
- [@RichardLitt](//github.com/RichardLitt) (Richard Littauer)
- [@rinpoo](//github.com/rinpoo)
- [@sahib](//github.com/sahib) (Chris Pahl)
- [@se3000](//github.com/se3000) (Steve Ellis)
- [@sexybiggetje](//github.com/sexybiggetje) (Martijn de Boer)
- [@sivachandran](//github.com/sivachandran) (Sivachandran)
- [@slothbag](//github.com/slothbag)
- [@Stebalien](//github.com/Stebalien) (Steven Allen)
- [@thelinuxkid](//github.com/thelinuxkid) (Andres Buritica)
- [@thomas-gardner](//github.com/thomas-gardner)
- [@wanderer](//github.com/wanderer)
- [@wasserfuhr](//github.com/wasserfuhr) (RainerWasserfuhr)
- [@whyrusleeping](//github.com/whyrusleeping) (Jeromy Johnson)
- [@willglynn](//github.com/willglynn) (Will Glynn)
- [@wking](//github.com/wking) (W. Trevor King)
- [@xicombd](//github.com/xicombd) (Francisco Baio Dias)

This newsletter is also a community effort. If you have cool things to share for the next weekly, drop a comment about it in the [next weekly sprint issue](//github.com/ipfs/weekly/issues/31)! The more people mention items they want to see in the weekly there, the easier it is to make this and send it out.

Thanks, and see you next week!

- Richard Littauer

_Submit feedback about this issue [here](//github.com/ipfs/weekly/issues/29), or send us [feedback about the IPFS Weekly in general](//github.com/ipfs/weekly/issues/7)._

date: 2016-04-20
title: IPFS Weekly 9
author: Richard Littauer

[IPFS](//ipfs.io/) is a new hypermedia distribution protocol, addressed by content and identities, aiming to make the web faster, safer, and more open. In these posts, we highlight some of the development that has happened in the past week. For anyone looking to get involved, follow the embedded hyperlinks, search the wealth of information on [GitHub](//github.com/ipfs) or join us on [IRC](//webchat.freenode.net/?channels=ipfs) (#ipfs on the Freenode network).

If you would like to get this update as an email, sign up for our [weekly newsletter](//tinyletter.com/ipfsweekly)!

Here are some of the highlights for the [March 21st through March 28th](//github.com/ipfs/pm/issues/98) sprint:

## Updates

### Package Managers

Package managers have been a large topic of discussion recently. Mostly, this is because of an issue with an author of some heavily used [npm](https://npmjs.com) packages unpublishing all of his modules simultaneously. One of these was `left-pad`, which was used by thousands of builds globally, all of which broke when the package was removed. A great writeup of what happened is on the [npm.js blog here](http://blog.npmjs.org/post/141577284765/kik-left-pad-and-npm); they took this very seriously, and shortly after [changed their unpublish policy](http://blog.npmjs.org/post/141905368000/changes-to-npms-unpublish-policy) as a direct result.

Many people jumped to IPFS as a possible solution to this problem. With a permanent filesystem, unpublishing wouldn't be possible. Here's one post titled [How to use IPFS to fix npm](http://amreldib.com/blog/HowToUseIpfsToFixNpm); here's [an issue](https://github.com/ipmjs/ipmjs/issues/9) on a new GitHub organization, ipmjs, trying to find consensus on how to fix npm using a permanent storage system; here's an npm module, [cowpen](https://www.npmjs.com/package/cowpen) that publishes modules directly to IPFS; here's [another decentralized package manager](https://github.com/mhhf/spore) that sprung up using IPFS and Ethereum.

The IPFS community has been thinking about immutable package managers for a long time. IPFS itself began as an immutable package manager, and it is built to make writing them much easier. [@diasdavid](//github.com/diasdavid) has a project called `registry-mirror`, which allows you to run an npm registry locally that is backed by packages retrieved from IPFS instead of NPM directly. He's written about a presentation he gave for it, [here](http://blog.daviddias.me/2015/12/08/stellar-module-management); the source code is [here](https://github.com/diasdavid/registry-mirror).

On a similar note, [gx](//github.com/whyrusleeping/gx), a package manager for Go made by [@whyrusleeping](//github.com/whyrusleeping), was also mentioned in a lot of the discussions about npm and package managers, especially on [Hacker News](https://news.ycombinator.com/item?id=11347163). In the past two weeks, the project went from 50 to 1000 stars, so people are clearly interested in this now.

The discussion about how to best use IPFS as a package manager is ongoing. Jump on GitHub if you have something to say; we're listening in the [FAQ](https://github.com/ipfs/faq/issues) and in [the notes repo](https://github.com/ipfs/notes/issues).

### DNS outage

We're using DigitalOcean to provide ipfs.io DNS. On Tuesday, March 24th, DigitalOcean DNS was hit by a [severe outage](https://www.digitalocean.com/company/blog/update-on-the-march-24-2016-dns-outage/) lasting hours, which took the public gateway at ipfs.io down. We switched to [DNSimple](https://dnsimple.com) in an ad-hoc fashion and brought ipfs.io back while DigitalOcean was still down, but this incident obviously hit us on the wrong foot a bit. We'll be working to never get taken down this way again. It's HARD not to depend on any single points of failure. Here's a few things we'll do:

- codify DNS zones, and tools to upload them to DNS providers
- keep one or two backup DNS providers
- update our monitoring and failover procedures

We'll post a more detailed post-mortem on our blog in the next few days.

### Captain.log

#### Aye, you might want to check the new js-ipfs Captain.log entry, matey!

Following [js-ipfs roadmap](https://github.com/ipfs/js-ipfs/blob/master/ROADMAP.md#milestone-1---js-ipfs-on-the-browser), we’re close™ to having a workable js-ipfs version that can be used in the browser and in Node.js. This will mark a very important milestone on the IPFS project and enable a whole set of new distributed web applications to be possible. If you want to be part of this effort, check out our [Captain.log](https://github.com/ipfs/js-ipfs/issues/30#issuecomment-205884015) entry to get a full update and a list of tasks you can contribute to.

### [Orbit](//github.com/haadcode/orbit)

![Orbit](009_orbit.png)

[@haadcode](//github.com/haadcode) has been working on improvements to [orbit-db](https://github.com/haadcode/orbit-db), [ipfs-log](https://github.com/haadcode/ipfs-log/) and [Orbit](https://github.com/haadcode/orbit). The message history fetching is now more stable and the UI feedback for loading messages is fixed. All this work will improve the user experience of Orbit.

### js-ipfs-init

`js-ipfs init` works! [@noffle](//github.com/noffle) finished the remaining pieces this week, including CLI usage. This included a handful of [auxiliary](https://github.com/ipfs/js-ipfs/issue/91) [PRs](https://github.com/ipfs/js-ipfs/issue/96) that cascaded out of that work. This makes the `js-ipfs` init process produce IPFS repos that are compatible with go-ipfs'.

#### Dictionary support for the zlib JavaScript Implementation, [`pako`](https://github.com/nodeca/pako)

One of the significant contributions made this week was the addition of 'dictionary' support for `zlib` JavaScript implementation, `pako`. With this contribution, we are able to have a complete implementation of SPDY 3.1's framing layer running in the browser, the default stream muxing library used in IPFS. You can find more about this contribution in the following issue and PR discussions:

- https://github.com/nodeca/pako/issues/69
- https://github.com/diasdavid/js-libp2p-spdy/pull/6
- https://github.com/nodeca/pako/pull/77

### [go-ipfs](//github.com/ipfs/go-ipfs)

[@whyrusleeping](//github.com/whyrusleeping) wrote a tool to move content from 0.4.0 to 0.3.11 (see [levart-emit](https://github.com/whyrusleeping/levart-emit)). He also discovered a file descriptor leak bug in utp causing connectivity issues, and began work on datastore performance improvements.

#### `jsipfs object` cli and http-api endpoints are complete

Now you can use `jsipfs object` in the same way you would use `ipfs object`. Big thanks to [Francisco Dias](https://github.com/xicombd) for leading the last miles of this goal. The complete track of the development can be found at [github.com/ipfs/js-ipfs/issues/58](https://github.com/ipfs/js-ipfs/issues/58).

### Nginx metrics

The [infrastructure](https://github.com/ipfs/infrastructure) metrics dashboard didn't previously have HTTP request/response metrics from nginx's point of view, but only from IPFS's and [multireq](https://github.com/whyrusleeping/multireq)'s point of view. (Multireq is our v04x/v03x multiplexing proxy). Nginx itself provides finegrained metrics only through their commercial subscriptions. We're now using [mtail](https://github.com/google/mtail) to parse metrics from nginx access logs and expose them to [Prometheus](https://prometheus.io). [@lgierth](//github.com/lgierth) will also contribute the `nginx.mtail` program upstream with mtail.

## Community

### Upcoming talks

On April 20th, IPFS will host a joint meetup with ConsenSys at MIT in Cambridge, Massachusetts. [Sign up here!](https://www.eventbrite.com/e/ipfs-ethereum-mit-meetup-tickets-24578852008)

### First IPFS Meeting in NYC

We had our first IPFS meetup in New York! It went fantastically; expect an upcoming post on the [Blog](http://blog.ipfs.io/) soon.

### Meeting with NYC Mesh

[@jbenet](//github.com/jbenet) and [@lgierth](//github.com/lgierth) met with the fine folks of [nycmesh.net](https://nycmesh.net). For the past two years they've been building a community Wifi network in New York City. We had lots of great conversation about wireless mesh networking and IPFS. If you live in NYC, you should come attend their [meetups](http://www.meetup.com/nycmesh/)!

### [NYC Blockchain](http://nyc.blockchainworkshops.org/)

Last Monday members of the IPFS comminuty attended a [blockchain workshop](http://nyc.blockchainworkshops.org/) event held by COALA, "a collaboration between academics, lawyers, technologists and entrepreneurs who have been driving research, policy and infrastructure-building in the blockchain ecosystem for the past three years" at the New York University School of Business. [@diasdavid](//github.com/diasdavid) [@haad](//github.com/haad) [@noffle](//github.com/noffle) and [@nginnever](//github.com/nginnever) were in attendance as [@jbenet](//github.com/jbenet) was a part of a protocols panel, speaking on scalability and the future of blockchain technology. A recording of the event should be available on youtube in the future [here](https://www.youtube.com/channel/UC9Lmf5FfNkSmYMoxhQh5ktA).

### Lisbon Research and Development Meetup

![Lisbon](009_lisbon.png)

[The IPFS Lisbon community had their second "Research & Development Meetup"](http://www.meetup.com/ipfs-lisbon-meetup/events/229807984/), hosted by Uniplaces (https://www.uniplaces.com). The focus was "The Distributed Web" ([Slides](http://www.slideshare.net/DavidDias11/rdm2-the-distributed-web)) and "Machine Learning + Artificial Intelligence for Recommender Algorithms", with talks by [David Dias](https://github.com/diasdavid) and [João Ascensão](https://github.com/jtascensao), respectively. If you are around Lisbon, make sure to join http://www.meetup.com/ipfs-lisbon-meetup to get notified about the next one. Resources for this talk can be found [here](https://github.com/research-development-meetup/discussion/tree/master/rdm-2).

### Seattle

[@whyrusleeping](//github.com/whyrusleeping) gave a talk introducing IPFS at ta3m seattle - [Techno-Activism 3rd Mondays](https://wiki.openitp.org/events:techno-activism_3rd_mondays:seattle). Video links to come when they are posted.

### BitCoin News

BitCoin news had a discussion on using IPFS and Bitcoin for Decentralised Citizen Journalism. [Check it out](http://thebitcoinnews.com/decentralised-citizen-journalism-we-discuss-the-impact-of-bitcoin-and-ipfs/)!

### BitDevsNYC

[Christian Lundkvist](//github.com/christianlundkvist) gave a talk on IPFS at [BitDevsNYC](http://www.meetup.com/BitDevsNYC/events/229130058/). Christian works closely with IPFS at [ConsenSys](https://consensys.net/).

## IPFS Meme of the Week

![Hee hee](009_neo.jpg)

From https://twitter.com/jplur_/status/712670265919086594. Thanks, jplur_!

## Content-Type of the Week

Now that we're using mtail to make better sense of nginx serving the
IPFS-to-HTTP gateway, we can graph the frequency of content types served.
We'll showcase interesting content types served from the gateway in the coming
weeklies.

The first Content-Type of the week is: application/x-chdr, which signifies a C source header file.

## Contributors

Across the entire IPFS GitHub organization, the following people have committed code, created issues, or made a comment on GitHub between March 21st (noon, GMT) and March 28th. We're autogenerating this list using [this tool](//github.com/ipfs/weekly/blob/master/tools/get_commits.py) and [this other tool](//github.com/richardlitt/name-your-contributors), so please let us know if your name isn't here.

 - [@achin](//githublcom/achin) (Andrew Chin)
 - [@AdamStone](//github.com/AdamStone) (Adam Stone)
 - [@admiral-Guck](//github.com/admiral-Guck) (Gucky)
 - [@alexAubin](//github.com/alexAubin) (Alexandre Aubin)
 - [@amstocker](//github.com/amstocker) (Andrew Stocker)
 - [@anarcat](//github.com/anarcat) (anarcat)
 - [@Anthonyzou](//github.com/Anthonyzou) (Anthony Ou)
 - [@area](//github.com/area)
 - [@ARezaK](//github.com/ARezaK)
 - [@atommixz](//github.com/atommixz)
 - [@Azulan](//github.com/Azulan) (Frank Flores)
 - [@balupton](//github.com/balupton) (Benjamin Lupton)
 - [@bgrieder](//github.com/bgrieder) (Bruno Grieder)
 - [@cb0](//github.com/cb0) (Marcus Puchalla)
 - [@chinshiketsu](//github.com/chinshiketsu) (Sijie Chen)
 - [@chpio](//github.com/chpio)
 - [@chriscool](//github.com/chriscool) (Christian Couder)
 - [@CMCDragonkai](//github.com/CMCDragonkai) (Roger Qiu)
 - [@ComSecNinja](//github.com/ComSecNinja) (Timo Virkkunen)
 - [@darkstar](//github.com/darkstar) (Michael D.)
 - [@davidar](//github.com/davidar) (David A Roberts)
 - [@diasdavid](//github.com/diasdavid) (David Dias)
 - [@dignifiedquire](//github.com/dignifiedquire) (Friedel Ziegelmayer)
 - [@djdv](//github.com/djdv) (Dominic Della Valle)
 - [@ehmry](//github.com/ehmry) (Emery Hemingway)
 - [@fomkin](//github.com/fomkin) (Aleksey Fomkin)
 - [@gerrickw](//github.com/gerrickw) (Gerrick W)
 - [@greenkeeperio-bot](//github.com/greenkeeperio-bot) (Greenkeeper)
 - [@haadcode](//github.com/haadcode) (Haad)
 - [@harlantwood](//github.com/harlantwood) (Harlan T Wood)
 - [@hshimo](//github.com/hshimo) (Hiroshi Shimo)
 - [@hutenosa](//github.com/hutenosa)
 - [@ianopolous](//github.com/ianopolous) (Ian Preston)
 - [@iav](//github.com/iav) (iav)
 - [@ibnesayeed](//github.com/ibnesayeed) (Sawood Alam)
 - [@insanity54](//github.com/insanity54) (Chris Grimmett)
 - [@jbenet](//github.com/jbenet) (Juan Benet)
 - [@JGAntunes](//github.com/JGAntunes) (João Antunes)
 - [@jmsmcfrlnd](//github.com/jmsmcfrlnd)
 - [@josephholsten](//github.com/josephholsten) (Joseph Anthony Pasquale Holsten)
 - [@julian-smith-code](//github.com/julian-smith-code) (Julian Smith)
 - [@jwsher](//github.com/jwsher) (Justin Sher)
 - [@kalmi](//github.com/kalmi) (Tarnay Kálmán)
 - [@kevina](//github.com/kevina) (Kevin Atkinson)
 - [@knocte](//github.com/knocte) (Andres G. Aragoneses)
 - [@KrishnaPG](//github.com/KrishnaPG) (Gopalakrishna Palem)
 - [@Kubuxu](//github.com/Kubuxu) (Jakub Sztandera)
 - [@kumavis](//github.com/kumavis) (kumavis)
 - [@kyledrake](//github.com/kyledrake) (Kyle Drake)
 - [@kyrias](//github.com/kyrias) (Johannes Löthberg)
 - [@lgierth](//github.com/lgierth) (Lars Gierth)
 - [@lidel](//github.com/lidel) (Marcin Rataj)
 - [@machawk1](//github.com/machawk1) (Mat Kelly)
 - [@matshenricson](//github.com/matshenricson) (Mats Henricson)
 - [@Mec-iS](//github.com/Mec-iS) (Lorenzo)
 - [@micahredding](//github.com/micahredding) (Micah Redding)
 - [@MichaelMure](//github.com/MichaelMure) (Michael Muré)
 - [@micxjo](//github.com/micxjo) (Micxjo Funkcio)
 - [@mildred](//github.com/mildred) (Mildred Ki'Lya)
 - [@mitar](//github.com/mitar) (Mitar)
 - [@Mithgol](//github.com/Mithgol)
 - [@monoflash](//github.com/monoflash) (Alex Geer)
 - [@montagsoup](//github.com/montagsoup)
 - [@mpgn](//github.com/mpgn) (Martial Puygrenier)
 - [@mrshu](//github.com/mrshu) (Marek Šuppa)
 - [@nginnever](//github.com/nginnever) (Nathan Ginnever)
 - [@nicola](//github.com/nicola) (Nicola Greco)
 - [@NightRa](//github.com/NightRa) (Ilan Godik)
 - [@noffle](//github.com/noffle) (Stephen Whitmore)
 - [@nonchip](//github.com/nonchip) (Kyra Zimmer)
 - [@novocodev](//github.com/novocodev)
 - [@palkeo](//github.com/palkeo) (palkeo)
 - [@pguth](//github.com/pguth) (Per)
 - [@Piruzzolo](//github.com/Piruzzolo)
 - [@pocketmax](//github.com/pocketmax)
 - [@pokeball99](//github.com/pokeball99)
 - [@polkovnikov-ph](//github.com/polkovnikov-ph) (Philip Polkovnikov)
 - [@puffnfresh](//github.com/puffnfresh) (Brian McKenna)
 - [@rht](//github.com/rht)
 - [@RichardLitt](//github.com/RichardLitt) (Richard Littauer)
 - [@rsynnest](//github.com/rsynnest)
 - [@sdockray](//github.com/sdockray)
 - [@se3000](//github.com/se3000) (Steve Ellis)
 - [@Shikibashi](//github.com/Shikibashi)
 - [@SilverWingedSeraph](//github.com/SilverWingedSeraph) (Leo Tindall)
 - [@slothbag](//github.com/slothbag)
 - [@Stebalien](//github.com/Stebalien) (Steven Allen)
 - [@syang](//github.com/syang)
 - [@tadfisher](//github.com/tadfisher) (Tad Fisher)
 - [@thomas-gardner](//github.com/thomas-gardner)
 - [@tinybike](//github.com/tinybike) (Jack Peterson)
 - [@upfs](//github.com/upfs)
 - [@voltrevo](//github.com/voltrevo) (Andrew Morris)
 - [@whyrusleeping](//github.com/whyrusleeping) (Jeromy Johnson)
 - [@willglynn](//github.com/willglynn) (Will Glynn)
 - [@wking](//github.com/wking) (W. Trevor King)
 - [@wmhilton](//github.com/wmhilton) (Will Hilton)
 - [@xicombd](//github.com/xicombd) (Francisco Baio Dias)
 - [@xsnk](//github.com/xsnk) (Sankrant Chaubey)
 - [@yuvipanda](//github.com/yuvipanda) (Yuvi Panda)
 - [@Zogg](//github.com/Zogg)

This newsletter is also a community effort. If you have cool things to share for the next weekly, drop a comment about it in the [next weekly sprint issue](https://github.com/ipfs/weekly/issues/33)! The more people mention items they want to see in the weekly there, the easier it is to make this and send it out.

Thanks, and see you next week!

- Richard Littauer

_Submit feedback about this issue [here](https://github.com/ipfs/weekly/issues/31), or send us [feedback about the IPFS Weekly in general](//github.com/ipfs/weekly/issues/7)._

---
date: 2016-05-08
title: IPFS Weekly 10
slug: 16-ipfs-weekly-10
author: Richard Littauer
tags: []
categories: []
description: TBC
---

[IPFS](https://ipfs.io/) is a new hypermedia distribution protocol, addressed by content and identities, aiming to make the web faster, safer, and more open. In these posts, we highlight some of the development that has happened in the past week. For anyone looking to get involved, follow the embedded hyperlinks, search the wealth of information on [GitHub](https://github.com/ipfs) or join us on [IRC](https://webchat.freenode.net/?channels=ipfs) (#ipfs on the Freenode network).

If you would like to get this update as an email, sign up for our [weekly newsletter](https://tinyletter.com/ipfsweekly)!

Here are some of the highlights for the time period from [April 6th through April 25th](https://github.com/ipfs/pm/issues/101).

## Updates

### 0.4.0!

[go-ipfs 0.4.0](http://dist.ipfs.io/#go-ipfs) has been released! Among the many changes are a revamped implementation of the IPFS communication protocols, increased performance, improvements to IPNS (the Interplanetary Naming System), many bugfixes, and lots of new features to make IPFS even more powerful.

See the [blog](http://blog.ipfs.io/14-ipfs-0-4-0-released/) for more details.

### Orbit

[@haadcode](https://github.com/haadcode) upgraded all of his projects to use 0.4.0, got [orbit-db](https://github.com/haadcode/orbit-db) and [ipfs-log](https://github.com/haadcode/ipfs-log) working in the browser, and improved Orbit's UX. As a result, Orbit is much faster and more stable than it was under 0.3! We now have working distributables for [orbit-db](https://github.com/haadcode/orbit-db) and [ipfs-log](https://github.com/haadcode/ipfs-log) in the browser. They still require a local daemon to run to work but this will change when js-ipfs ships. [@haadcode](https://github.com/haadcode) added some new features to Orbit: preview files directly in the chat with code highlighting, players for audio and video, and improved the files browsing functionality in general. You can now also copy the hash of a file to clipboard. It looks like this:

![Orbit]({attach}/images/010_orbit.png)

Finally, [@haadcode](https://github.com/haadcode) also created a simple JavaScript logging module called [logplease](https://github.com/haadcode/logplease), which works in Node.js and browsers. logplease does two simple things: output log messages to the console and/or to a file (Node.js only) and display the log messages with nice colors. It was inspired by [log4js](https://github.com/stritti/log4js) and [debug](https://github.com/visionmedia/debug).

### [aegir](https://github.com/dignifiedquire/aegir)

AEgir has been officially released. Formerly called dignified.js, this is our toolset for JavaScript modules, which cuts down on development time immensely by standardizing the process of testing, building, linting, releasing, and generally scaffolding out JS modules. It is now deployed over nearly all active JavaScript projects on IPFS. Check out the [npm package](https://npmjs.org/aegir) or the [github repo](https://github.com/dignifiedquire/aegir).

We've also overhauled the community [JavaScript guidelines](https://github.com/ipfs/community/blob/master/js-project-guidelines.md) to reflect this change, and to make them more accessible to new developers.

### go-libp2p and go-ipfs refactoring

We're modularizing go-libp2p, aiming at module parity with js-ipfs. This makes the codebase less daunting to newcomers, and makes maintenance and testing of everything much easier.

As part of this, [@whyrusleeping](https://github.com/whyrusleeping) removed over 9000 (yes, over 9000) lines of unused godeps dependencies from the go-ipfs repo. Its a good deal more manageable now, and we are getting ever closer to having a purely [gx](https://github.com/whyrusleeping/gx) managed package.

### js-ipld

![libp2p-cli]({attach}/images/010_js-libp2p.png)

[@dignifiedquire](https://github.com/dignifiedquire) shipped an updated version of [js-ipld](https://npmjs.org/ipld) which now conforms to the [latest spec of IPLD](https://github.com/ipfs/specs/tree/master/ipld). In addition [js-ipfs-ipld](https://npmjs.org/ipfs-ipld) was created, which implements the building blocks to use IPLD in js-ipfs. The third package that was published is [js-ipfs-cli](https://npmjs.org/ipld-cli) which gives you a cli tool to interact and experiment with IPLD.

### `ipfs-blob-store` v1.0.0 released

One of the benefits that comes from the new [Files API](https://github.com/ipfs/js-ipfs/issues/60) in 0.4.0, is that we can emulate any kind of file system expectations on top of IPFS, and by doing so, enable applications that use a file system, to use IPFS without any modification. One perfect example of that are all the applications that use a module that implements the [abstract-blob-store](https://github.com/maxogden/abstract-blob-store) interface, now with [ipfs-blob-store](https://github.com/ipfs/ipfs-blob-store), with a simple `npm install`, you can swap out your current blob-store implementation by the IPFS one.

### `js-ipfs-api` now supports the Files API

On the same lines, `js-ipfs-api` now offers all the Files API calls through a convenient and easy to use library. You can find all of the function declarations on the [`js-ipfs-api` docs](https://github.com/ipfs/js-ipfs-api/blob/master/API.md#files)

### Making js-ipfs and js-libp2p modules awesome

[@JGAntunes](https://github.com/JGAntunes), [@dignifiedquire](https://github.com/dignifiedquire), [@nginnever](https://github.com/nginnever), [@diasdavid](https://github.com/diasdavid), and [@noffle](https://github.com/noffle) have been working hard to bring [the pantheon of js-ipfs modules](https://github.com/ipfs/js-ipfs/issues?utf8=%E2%9C%93&q=is%3Aissue+coverage+dignified) up to snuff: detailed READMEs with examples and full API docs, as well as 100% test coverage. We made significant inroads last sprint on [js-peer-id](https://github.com/diasdavid/js-peer-id), [js-multiaddr](https://github.com/jbenet/js-multiaddr), [js-peer-info](https://github.com/diasdavid/js-peer-info), [js-ipfs-blocks](https://github.com/ipfs/js-ipfs-blocks/) and more! There are a lot more modules that still need good READMEs and docs, so [dive in](https://github.com/ipfs/js-ipfs/issues?utf8=%E2%9C%93&q=is%3Aissue+coverage+dignified+is%3Aopen) and give us a hand!

### go-ipfs and the Prometheus monitoring system

We've had [Prometheus](https://prometheus.io) integrated with go-ipfs for some time already. In case you're unfamiliar, Prometheus is an open-source systems monitoring and alerting toolkit. It allows you to monitor diverse services, visualize the collected metrics in dashboards, and define rules for alerting. Together with the Grafana dashboard UI, it's the perfect monitoring system.

The scraping endpoint of go-ipfs is exposed at [:5001/debug/metrics/prometheus](http://localhost:5001/debug/metrics/prometheus) by your go-ipfs daemon. Check Prometheus' [Getting Started guide](https://prometheus.io/docs/introduction/getting_started/) to try it out.

### go-ipfs and restricting dialing

go-ipfs has support for restricting peer connections to certain IP address ranges, by using the `Swarm.AddrFilters` config setting. The following config example illustrates how to exclude all IPv4 peers, and all IPv6 link-local peers.

```json
// .ipfs/config
"Swarm": {
  "AddrFilters": [
    "/ip4/0.0.0.0/ipcidr/0",
    "/ip6/fe80::/ipcidr/64"
  ]
}
```

## Community

### Berkman Center

[@jbenet](https://github.com/jbenet) and [@nicola](https://github.com/nicola) spoke about IPFS with fellows at the Berkman Center. They discussed the core motivations of the IPFS Project, how it works, the state of the implementations, and a wide array of issues IPFS tackles. The discussion was excellent, starting with important ethical problems present in the web today, going through critical features our web should exhibit to solve them, and ending with how to get there. We look forward to tighter collaboration between our communities. Thank you very much for having us!

### MIT Meetup

![IPFS Meeting in Cambridge]({attach}/images/010_ipfs-boston.jpg)

We had the first ever IPFS meetup in Cambridge, at MIT. It was sponsored by [Consensys](https://consensys.net), and hosted by the [MIT Bitcoin Club](http://bitcoin.mit.edu/). [@jbenet](https://github.com/jbenet), [@nicola](https://github.com/nicola), and [@CReckhow](https://twitter.com/CReckhow) each gave talks. A full writeup will appear on the blog as soon as we have edited the videos and posted them on the IPFS YouTube channel. We'll let you know when that happens, here.

*Photo by [@nicocesar_](https://twitter.com/nicocesar_).*

### Peergos

Work on [Peergos](https://github.com/ianopolous/Peergos), a decentralised, secure file storage, sharing and social network using IPFS, is progressing well; [@ianopolous](https://github.com/ianopolous) is close to getting a FUSE binding working. Throughput hasn't been as bad as he was expecting with all the encryption and erasure coding, and it's looking likely that it will end up being network IO bound, instead of CPU bound for non trivial writes.

### SpaceX Landing

Things are awesome and getting awesomer. Specifically, SpaceX [landed a reusable Falcon 9 booster](http://www.space.com/32517-spacex-sticks-rocket-landing-sea-dragon-launch.html), which puts us that much closer to having a human colony on Mars. When that happens, we're betting they'll be using IPFS.

### Content-Type of The Week

This week's Content-Type is the non-standard `chemical/x-chemdraw`. ChemDraw is a molecule editor first released in 1985, and still maintained as of today. We don't know which molecules were added to IPFS, but will do our best for IPFS to be around in 30 years just like ChemDraw is still around.

Every week we highlight a Content-Type that we've seen on the public HTTP-to-IPFS gateway at https://ipfs.io. If you're waiting to see one particularly interesting Content-Type in one of the next Weeklies, propose it by `ipfs add -w`'ing a file of that type, and requesting it from the public gateway: `https://ipfs.io/ipfs/<hash>`.

## Contributors

Across the entire IPFS GitHub organization, the following people have committed code, created issues, or made a comment on GitHub between April 6th (noon, GMT) and April 25th. We're autogenerating this list using [this tool](https://github.com/ipfs/weekly/blob/master/tools/get_commits.py) and [this other tool](https://github.com/richardlitt/name-your-contributors), so please let us know if your name isn't here.

- [@AdamStone](https://github.com/AdamStone) (Adam Stone)
- [@amstocker](https://github.com/amstocker) (Andrew Stocker)
- [@ARezaK](https://github.com/ARezaK)
- [@atommixz](https://github.com/atommixz)
- [@atondwal](https://github.com/atondwal) (Anish Tondwalkar)
- [@bpcamac](https://github.com/bpcamac) (Brenton Camac)
- [@c-johnson](https://github.com/c-johnson) (Christopher Johnson)
- [@chriscool](https://github.com/chriscool) (Christian Couder)
- [@chrisvoncsefalvay](https://github.com/chrisvoncsefalvay) (Chris)
- [@chungy](https://github.com/chungy) (Mike Swanson)
- [@ComSecNinja](https://github.com/ComSecNinja) (Timo Virkkunen)
- [@cpacia](https://github.com/cpacia) (Chris Pacia)
- [@creckhow](https://github.com/creckhow) (Carolyn Reckhow)
- [@cusspvz](https://github.com/cusspvz) (José Moreira)
- [@diasdavid](https://github.com/diasdavid) (David Dias)
- [@dignifiedquire](https://github.com/dignifiedquire) (Friedel Ziegelmayer)
- [@eboto](https://github.com/eboto) (Erem Boto)
- [@edrex](https://github.com/edrex) (Eric Drechsel)
- [@EliasGabrielsson](https://github.com/EliasGabrielsson) (Elias Gabrielsson)
- [@eminence](https://github.com/eminence) (Andrew Chin)
- [@fazo96](https://github.com/fazo96) (Enrico Fasoli)
- [@felixonmars](https://github.com/felixonmars) (Felix Yan)
- [@FrauBienenstich](https://github.com/FrauBienenstich) (Susanne Dewein)
- [@fzzr-](https://github.com/fzzr-) (Alexander "FIZZΞR" Koz.)
- [@GitCop](https://github.com/GitCop)
- [@greenkeeperio-bot](https://github.com/greenkeeperio-bot) (Greenkeeper)
- [@groksie](https://github.com/groksie) (James McFarland)
- [@haadcode](https://github.com/haadcode) (Haad)
- [@hermanjunge](https://github.com/hermanjunge) (Herman Junge)
- [@hutenosa](https://github.com/hutenosa)
- [@ianopolous](https://github.com/ianopolous) (Ian Preston)
- [@ikreymer](https://github.com/ikreymer) (Ilya Kreymer)
- [@ingokeck](https://github.com/ingokeck) (Ingo Keck)
- [@interfect](https://github.com/interfect)
- [@jbenet](https://github.com/jbenet) (Juan Benet)
- [@jedahan](https://github.com/jedahan) (Jonathan Dahan)
- [@jefft0](https://github.com/jefft0) (Jeff Thompson)
- [@jerodsanto](https://github.com/jerodsanto) (Jerod Santo)
- [@JGAntunes](https://github.com/JGAntunes) (João Antunes)
- [@kbtombul](https://github.com/kbtombul)
- [@kevina](https://github.com/kevina) (Kevin Atkinson)
- [@kevinmartinmauro](https://github.com/kevinmartinmauro)
- [@krl](https://github.com/krl) (kristoffer)
- [@Kubuxu](https://github.com/Kubuxu) (Jakub Sztandera)
- [@kyledrake](https://github.com/kyledrake) (Kyle Drake)
- [@lgierth](https://github.com/lgierth) (Lars Gierth)
- [@lidel](https://github.com/lidel) (Marcin Rataj)
- [@machawk1](https://github.com/machawk1) (Mat Kelly)
- [@mariusdarila](https://github.com/mariusdarila) (Marius Darila)
- [@matshenricson](https://github.com/matshenricson) (Mats Henricson)
- [@mheiber](https://github.com/mheiber) (mheiber)
- [@MichaelMure](https://github.com/MichaelMure) (Michael Muré)
- [@micxjo](https://github.com/micxjo) (Micxjo Funkcio)
- [@mildred](https://github.com/mildred) (Mildred Ki'Lya)
- [@mitar](https://github.com/mitar) (Mitar)
- [@mitzip](https://github.com/mitzip) (mitzip)
- [@mrshu](https://github.com/mrshu) (Marek Šuppa)
- [@NDuma](https://github.com/NDuma) (NDuma)
- [@neko259](https://github.com/neko259)
- [@nginnever](https://github.com/nginnever) (Nathan Ginnever)
- [@nicola](https://github.com/nicola) (Nicola Greco)
- [@noffle](https://github.com/noffle) (Stephen Whitmore)
- [@pfista](https://github.com/pfista) (michael)
- [@Piruzzolo](https://github.com/Piruzzolo)
- [@plungu](https://github.com/plungu) (Paul Lungu)
- [@pokeball99](https://github.com/pokeball99)
- [@rht](https://github.com/rht)
- [@RichardLitt](https://github.com/RichardLitt) (Richard Littauer)
- [@SCBuergel](https://github.com/SCBuergel) (Sebastian C. Bürgel)
- [@SilverWingedSeraph](https://github.com/SilverWingedSeraph) (Leo Tindall)
- [@sivachandran](https://github.com/sivachandran) (Sivachandran)
- [@slang800](https://github.com/slang800) (Sean Lang)
- [@Stebalien](https://github.com/Stebalien) (Steven Allen)
- [@sterpe](https://github.com/sterpe) (Steve Terpe)
- [@stevenh512](https://github.com/stevenh512) (Steven Hancock)
- [@TheNain38](https://github.com/TheNain38)
- [@thomas-gardner](https://github.com/thomas-gardner)
- [@traverseda](https://github.com/traverseda) (Alex Davies)
- [@upfs](https://github.com/upfs)
- [@vijayee](https://github.com/vijayee) (Vijayee Kulkaa)
- [@vitzli](https://github.com/vitzli)
- [@whyrusleeping](https://github.com/whyrusleeping) (Jeromy Johnson)
- [@wzhd](https://github.com/wzhd)
- [@xicombd](https://github.com/xicombd) (Francisco Baio Dias)

This newsletter is also a community effort. If you have cool things to share for the next weekly, drop a comment about it in the [next weekly sprint issue](https://github.com/ipfs/weekly/issues/39)! The more people mention items they want to see in the weekly there, the easier it is to make this and send it out.

Thanks, and see you next week!

- Richard Littauer

_Submit feedback about this issue [here](https://github.com/ipfs/weekly/issues/35), or send us [feedback about the IPFS Weekly in general](https://github.com/ipfs/weekly/issues/7)._

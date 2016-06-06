date: 2016-03-17
title: IPFS Weekly 7
slug: 12-ipfs-weekly-7
author: Richard Littauer, Andrew Chin

[IPFS](//ipfs.io/) is a new hypermedia distribution protocol, addressed by content and identities, aiming to make the web faster, safer, and more open. In these posts, we highlight some of the development that has happened in the past week. For anyone looking to get involved, follow the embedded hyperlinks, search the wealth of information on [GitHub](//github.com/ipfs) or join us on [IRC](//webchat.freenode.net/?channels=ipfs) (#ipfs on the Freenode network).

If you would like to get this update as an email, sign up for our [weekly newsletter](//tinyletter.com/ipfsweekly)!

Here are some of the highlights for the [second week of March](//github.com/ipfs/pm/issues/97):

## Updates

### [Orbit](//github.com/haadcode/orbit)

[Orbit](//github.com/haadcode/orbit), a distributed, peer-to-peer chat application built on IPFS, is back in active development and going through a major code base overhaul. It now uses [orbit-db](//github.com/haadcode/orbit-db) as it's database layer. [orbit-db](//github.com/haadcode/orbit-db) is a KV-store and Event Log on top of IPFS which allows developers to use IPFS as a database. Last week orbit-db got big performance and stability improvements and is now using CRDTs for eventual consistency.

### [Go-IPFS](//github.com/ipfs/go-ipfs)

A nasty bug in our networking code was fixed this week. An issue in yamux (our primary stream multiplexer) would cause code to hang when opening a new stream if there were too many in flight stream opens. As a result of this, large file transfers (`ipfs refs -r`, `ipfs get`, and so on) would hang.

IPFS 0.4.0 is now very close to shipping, we ran [@dignifiedquire](//github.com/@dignifiedquire)'s [randor](//github.com/dignifiedquire/randor) tool quite extensively and are more confident in the repo operations that have changed since 0.3.11. The release now has a [somewhat short checklist of things](//github.com/ipfs/go-ipfs/issues/2334#issuecomment-195046511) that are blocking the official release.

As a small side project, [@whyrusleeping](//github.com/@whyrusleeping) started benchmarking each of our possible datastore implementations with [ds-bench](//github.com/whyrusleeping/ds-bench). The results will help us improve the performance of our storage moving forward. On that same topic, he started an experiment in new and exciting datastores and wrote a [datastore implementation](//github.com/whyrusleeping/sql-datastore) that can be backed by a sql database. [@whyrusleeping](//github.com/@whyrusleeping) then spun up a postgresql database (from docker) and ran the benchmarks against it, without any sort of tuning the [initial performance metrics](https://gist.github.com/whyrusleeping/55e2759dfa4b5b60a2cf) showed that it was around three time as fast as our current on-disk datastore. (Note: the metrics are simply testing the performance of writing random 256k binary blobs to each datastore).

### [js-multiaddr](//github.com/jbenet/js-multiaddr)

The [js-multiaddr](//github.com/jbenet/js-multiaddr) implementation was upgraded, now that it now matches go-ipfs features. What this means is that js-multiaddr now supports protocols that need to be encoded with varints. A varint is a integer that uses only the number of bytes it needs to be described by using a continuation bit ([more details](http://web.stanford.edu/class/cs276/Jeff-Dean-compression-slides.pdf)). Before this addition, we were not able to declare http, websockets or even IPFS multiaddrs because these protocol have a code that doesn't fit in a byte - now we can. You can check the encoding table [here](//github.com/jbenet/js-multiaddr/blob/master/src/protocols.csv).

### [mafmt](//github.com/whyrusleeping/mafmt)

[mafmt](//github.com/whyrusleeping/mafmt), a module that [@whyrusleeping](//github.com/@whyrusleeping) wrote and which stands for _multiaddr format_, filters out different formats to use with certain transports. Thanks to [@daviddias](//github.com/@daviddias), this now does uTP and WebSockets validation, as well.

### [libp2p-swarm](//github.com/diasdavid/js-libp2p-swarm)

The new [libp2p-swarm](//github.com/diasdavid/js-libp2p-swarm) has been released; to reiterate last week, the module has been overauled to have a new API, to be agnostic about which transport an application has to use, and also to have more tests. This also exposes more internal processes, which makes error checking and logging more useful. Libp2p will eventually help users traverse IPFS for any node which allows their desired transport, meaning that we can have a more connected and less brittle web.

## Community

[@jbenet](//github.com/@jbenet) was in Boston this week for consensus research discussions. While in Boston, [@jbenet](//github.com/@jbenet) visited the [Digital Currency Initiative](https://www.media.mit.edu/research/highlights/media-lab-digital-currency-initiative) at the MIT Media Lab, where he spoke about IPFS and its implications for blockchains, for digital publishing, and for access to information.

[c-base/ipfs-ringpin](//github.com/c-base/ipfs-ringpin) is a new set of tools for setting up an IPFS "file pinning ring" between multiple parties. This can be used, for example, for hackerspaces to provide redundancy by pinning each other's files. [pipermerriam/ipfs-persistence-consortium](//github.com/pipermerriam/ipfs-persistence-consortium) and [VictorBjelkholm/pincoop](//github.com/VictorBjelkholm/pincoop) do similar things.

[the-gred/jsjob-ethereum](//github.com/the-grid/jsjob-ethereum) is an experiment at creating a computational market on top of Ethereum. Computational jobs are run in a JavaScript sandbox, and both input data, the algorithm to run, and the produced results are shared over IPFS.

[@jbenet](//github.com/@jbenet) gave a talk [titled Datastructures In and On IPFS](http://www.infoq.com/presentations/data-ipfs-ipld) at last year's [QCon SF](https://qconsf.com/sf2015/schedule/tabular). [The video](http://www.infoq.com/presentations/data-ipfs-ipld) was released this week, so now you can all see it! The talk includes a typical introduction (skip if you know IPFS well), and then dives into datastructures, including Merkle Links, Mazieres links, how IPNS works, IPRS records, versioning, Keychain (PKI on IPFS), Persona (identity), and more.

![datastructures-talk-img](https://ipfs.io/ipfs/QmXXvH1dZnM5powG7BTJw71zrzGS5Rq2RFUr56apqKeDxx/007_talk.png)

The [IPFS powered USB deaddrop at c-base](//github.com/c-base/ipfs-deaddrop) was demonstrated at the [LoganCIJ 2016 Symposium](https://logancij.com/schedule/), in the Investigative Journalism conference. [More pictures here](https://www.flickr.com/photos/bergie/sets/72157665764801046). If you want to build your own IPFS USB deaddrops, check out the c-base project here: [c-base/ipfs-deaddrop](//github.com/c-base/ipfs-deaddrop).

![c-base-deaddrop](https://ipfs.io/ipfs/QmXXvH1dZnM5powG7BTJw71zrzGS5Rq2RFUr56apqKeDxx/007_cbase_deaddrop.jpg)

The [IPFS Copenhagen Meetup](http://www.meetup.com/Copenhagen-IPFS-Meetup/) organized by [@NeoTeo](//github.com/@NeoTeo) had another meeting a few days ago. If you're in the area, sign up at [the Meetup.com page](http://www.meetup.com/Copenhagen-IPFS-Meetup) so you don't miss the next one!

Several core IPFS developers will be in NYC from March 28th to April 8. We will be organizing an IPFS Meetup within that time frame. If you would like to come, please follow [this github issue](//github.com/ipfs/community/issues/102) for the final details. If you would like to present, post in that issue.

## Contributors

Across the entire IPFS GitHub organization, the following people have committed code, created issues, or made a comment on GitHub between March 7th (noon, GMT) and March 14th. We're autogenerating this list using [this tool](//github.com/ipfs/weekly/blob/master/tools/get_commits.py) and [this other tool](//github.com/richardlitt/name-your-contributors), so please let us know if your name isn't here.

- [@42](//github.com/42) (42 Coffee Cups)
- [@aaannndddyyy](//github.com/aaannndddyyy)
- [@adamc199](//github.com/adamc199)
- [@anarcat](//github.com/anarcat) (anarcat)
- [@atondwal](//github.com/atondwal) (Anish Tondwalkar)
- [@basilmon92](//github.com/basilmon92) (Basil M Kuriakose)
- [@bergie](//github.com/bergie) (Henri Bergius)
- [@brailateo](//github.com/brailateo) (Constantin Teodorescu)
- [@candeira](//github.com/candeira) (Javier Candeira)
- [@chpio](//github.com/chpio)
- [@chriscool](//github.com/chriscool) (Christian Couder)
- [@christianlundkvist](//github.com/christianlundkvist) (Christian Lundkvist)
- [@clkao](//github.com/clkao) (Chia-liang Kao)
- [@Crest](//github.com/Crest) (Crest)
- [@cryptix](//github.com/cryptix) (Henry)
- [@davidar](//github.com/davidar) (David A Roberts)
- [@DavidBooher](//github.com/DavidBooher) (David Booher)
- [@deawar](//github.com/deawar) (Dean Warren)
- [@deb0ch](//github.com/deb0ch) (Thomas de Beauchêne)
- [@diasdavid](//github.com/diasdavid) (David Dias)
- [@dignifiedquire](//github.com/dignifiedquire) (Friedel Ziegelmayer)
- [@djdv](//github.com/djdv) (Dominic Della Valle)
- [@doesntgolf](//github.com/doesntgolf) (Nate Dobbins)
- [@dontspamm](//github.com/dontspamm)
- [@dylanPowers](//github.com/dylanPowers) (Dylan Powers)
- [@eminence](//github.com/eminence) (Andrew Chin)
- [@greenkeeperio-bot](//github.com/greenkeeperio-bot) (Greenkeeper)
- [@gritzko](//github.com/gritzko) (Victor Grishchenko)
- [@haadcode](//github.com/haadcode) (Haad)
- [@hutenosa](//github.com/hutenosa)
- [@ianopolous](//github.com/ianopolous) (Ian Preston)
- [@icf20](//github.com/icf20)
- [@Iyer-VivekAnand](//github.com/Iyer-VivekAnand)
- [@jbenet](//github.com/jbenet) (Juan Benet)
- [@klauswuestefeld](//github.com/klauswuestefeld) (Klaus Wuestefeld)
- [@knocte](//github.com/knocte) (Andres G. Aragoneses)
- [@krl](//github.com/krl) (kristoffer)
- [@Kubuxu](//github.com/Kubuxu) (Jakub Sztandera)
- [@kyledrake](//github.com/kyledrake) (Kyle Drake)
- [@lamarpavel](//github.com/lamarpavel)
- [@lgarron](//github.com/lgarron) (Lucas Garron)
- [@lgierth](//github.com/lgierth) (Lars Gierth)
- [@lhenocque](//github.com/lhenocque)
- [@loadletter](//github.com/loadletter)
- [@matshenricson](//github.com/matshenricson) (Mats Henricson)
- [@mattseh](//github.com/mattseh)
- [@micahredding](//github.com/micahredding) (Micah Redding)
- [@MichaelMure](//github.com/MichaelMure) (Michael Muré)
- [@micxjo](//github.com/micxjo) (Micxjo Funkcio)
- [@mildred](//github.com/mildred) (Mildred Ki'Lya)
- [@Mithgol](//github.com/Mithgol)
- [@mklarmann](//github.com/mklarmann) (mklarmann)
- [@mnp](//github.com/mnp) (Mitchell Perilstein)
- [@moritz121](//github.com/moritz121)
- [@myleshorton](//github.com/myleshorton)
- [@Nadziv](//github.com/Nadziv) (Shahinaz)
- [@nginnever](//github.com/nginnever) (Nathan Ginnever)
- [@nicola](//github.com/nicola) (Nicola Greco)
- [@noffle](//github.com/noffle) (Stephen Whitmore)
- [@obvio171](//github.com/obvio171) (Helder Ribeiro)
- [@pietsch](//github.com/pietsch) (Christian Pietsch)
- [@plungu](//github.com/plungu) (Paul Lungu)
- [@pokeball99](//github.com/pokeball99)
- [@polycopter](//github.com/polycopter)
- [@rht](//github.com/rht)
- [@RichardLitt](//github.com/RichardLitt) (Richard Littauer)
- [@rsynnest](//github.com/rsynnest)
- [@SCBuergel](//github.com/SCBuergel) (Sebastian C. Bürgel)
- [@sdockray](//github.com/sdockray)
- [@sexybiggetje](//github.com/sexybiggetje) (Martijn de Boer)
- [@shalnoff](//github.com/shalnoff)
- [@sivachandran](//github.com/sivachandran) (Sivachandran)
- [@skippa](//github.com/skippa)
- [@slothbag](//github.com/slothbag)
- [@sptankard](//github.com/sptankard)
- [@Stebalien](//github.com/Stebalien) (Steven Allen)
- [@suisha](//github.com/suisha) (David Mai)
- [@thomas-gardner](//github.com/thomas-gardner)
- [@Unode](//github.com/Unode) (Renato Alves)
- [@wasserfuhr](//github.com/wasserfuhr) (RainerWasserfuhr)
- [@whyrusleeping](//github.com/whyrusleeping) (Jeromy Johnson)
- [@xicombd](//github.com/xicombd) (Francisco Baio Dias)
- [@yncyrydybyl](//github.com/yncyrydybyl) (Yan Minagawa)
- [@yuvallanger](//github.com/yuvallanger) (Yuval Langer)
- [@yuy168](//github.com/yuy168)

This newsletter is also a community effort. If you have cool things to share for the next weekly, drop a comment about it in the [weekly sprint issue](//github.com/ipfs/pm/issues/97)! The more people mention items they want to see in the weekly there, the easier it is to make this and send it out.

Thanks, and see you next week!

- Richard Littauer and Andrew Chin

_Submit feedback about this issue [here](//github.com/ipfs/weekly/issues/27), or send us [feedback about the IPFS Weekly in general](//github.com/ipfs/weekly/issues/7)._

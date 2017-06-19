---
date: 2016-03-04
title: IPFS Weekly 5
slug: 10-ipfs-weekly-5
author: Richard Littauer, Andrew Chin
tags: []
categories: []
description: TBC
---

[IPFS](//ipfs.io/) is a new hypermedia distribution protocol, addressed by content and identities, aiming to make the web faster, safer, and more open. In these posts, we highlight some of the development that has happened in the past week. For anyone looking to get involved, follow the embedded hyperlinks, search the wealth of information on [GitHub](//github.com/ipfs) or join us on [IRC](//webchat.freenode.net/?channels=ipfs) (#ipfs on the Freenode network).

If you would like to get this update as an email, sign up for our [weekly newsletter](//tinyletter.com/ipfsweekly)!

This weekly covers the last month. Here are some of the highlights for the February sprints!

## Highlight

![](https://cdn-images-1.medium.com/max/2000/1*czZJ7mvEAqL4wNAg-jt9Ow.jpeg)

Our friends and users at ConsenSys wrote an excellent "[Introduction to IPFS](https://medium.com/@ConsenSys/an-introduction-to-ipfs-9bba4860abd0#.48ki3fymw)", which starts with a less-technical preface, and then dives deep into a full explanation of how the IPFS object model works. It walks through multiple examples, including directory structures, version control systems, and blockchains. This is a great post to familiarize yourself with how the low level IPFS objects work, with graph visualizations and in-depth explanations. It also features a fantastic cover image! Thanks [@ChrisLundkvist](https://twitter.com/ChrisLundkvist) and [@ConsenSysAndrew](https://twitter.com/ConsenSysAndrew)!

## Updates

#### [**go-ipfs**](//github.com/ipfs/go-ipfs)
  - [@lgierth](//github.com/lgierth) improved the automated [docker image](https://github.com/ipfs/go-ipfs/pull/2308) for go-ipfs, which is now named `ipfs/go-ipfs`. Give it a try: `docker run -i --net=host ipfs/go-ipfs`. The new image is built automatically for every commit, and has automatic tags for the coming releases. It's also a few MB smaller, and doesn't require mounting a volume for the IPFS repository anymore. Instead, if there's no volume mounted, it'll generate an ephemeral identity and configuration which will be lost when the container exits. This is ideal for testing or just trying something out real quick. Images for go-ipfs 0.3.x are not provided, because the Dockerfile shipped with these version isn't suitable for Docker Hub automatic builds.
  - [@noffle](//github.com/noffle), [@whyrusleeping](//github.com/whyrusleeping) and [@chriscool](//github.com/chriscool) have been improving the test suite, fixing flaky tests which used to fail inaccurately. This will let us merge PRs faster, as CI should correctly categorize success and failure.
  - [@noffle](//github.com/noffle) also made progress toward getting `go-ipfs` compatible with vanilla `go get` installation. Hope to have more tangible results to show by end of the month.
  - [@RichardLitt](//github.com/RichardLitt) made a lot of documentation fixes to the CLI while working on the IPFS HTTP API.
  - [@chriscool](//github.com/chriscool) rewrote [the build documentation for Windows](//github.com/ipfs/go-ipfs/blob/master/docs/windows.md), which enabled [@slothbag](//github.com/slothbag) to get Windows builds working again with minimal fuss.
  - [@lgierth](//github.com/lgierth) posted a writeup on the [migration from 0.3.x to 0.4.0](https://ipfs.io/blog/9-v04x-migration/).
  - [@noffle](//github.com/noffle) improved FUSE connection termination.


#### [**GX**](//github.com/whyrusleeping)

[@whyrusleeping](//github.com/whyrusleeping) shipped a PR that introduces the use of a tool called `gx`, for vendoring our project dependencies. Previously we used godeps, and saved all of the code required indirectly to build ipfs in the go-ipfs repository itself. This was very difficult to work with for a few different reasons, first off, it made the size of the repository bloat way more than the original size of our codebase, causing clones to take longer, and making CI slower all around. Second, updating these dependencies was a hassle: this was partially the fault of go's poor package management choices and partially that we found godeps UX to be unfriendly. To solve the problem, [@whyrusleeping](//github.com/whyrusleeping) create gx. Gx is a package management tool based on ipfs. Package references are all hashes linked in a merkletree, and resolving all the dependencies of a given project is as easy as an ipfs fetch. Now that we are using gx, the main go-ipfs repo is much smaller, dependencies can be easily fetched and installed (and shared across projects), and we also get to essentially bootstrap ipfs with ipfs.

From the average users perspective, there are a few small changes; `go get` is no longer a viable way to install ipfs, and users will now need to run `make install` as is common on other large golang projects (docker and kubernetes among them). You can read more about gx over here at its repo: [github.com/whyrusleeping/gx](//github.com/whyrusleeping/gx) and about gx-go (the subtool of gx specifically for go) here: [github.com/whyrusleeping/gx-go](//github.com/whyrusleeping/gx-go).

[@RichardLitt](//github.com/RichardLitt) improved the `gx` README document to better explain its goals, and help people get started. Take a look and give us feedback through an issue if you think anything could be improved.

#### [**ipns-pub**](//github.com/whyrusleeping/ipns-pub)

[@whyrusleeping](//github.com/whyrusleeping) wrote  a tool called `ipns-pub` to allow people to publish IPNS entries to the network without actually running a node. You can generate keypairs with [ipfs-key](//github.com/whyrusleeping/ipfs-key) and then use those keys to publish any ipfs path you like. Be aware though that entries published with this tool expire every 24 hours, so to keep them alive on the network, the tool has a `--daemon` option that will republish your entry every twelve hours automatically.

#### [**specs**](//github.com/ipfs/specs/pull/37)

The IPLD spec was merged, after months of thoughtful design. The bulk of the work was achieved by [@mildred](//github.com/mildred) and [@jbenet](//github.com/jbenet), with lots of comments and design opinions from many other contributors. The [IPLD spec](https://github.com/ipfs/specs/blob/master/merkledag/ipld.md). The "thin-waist" Merkle DAG format, defines merkle-links, -dags, and -paths, as well as the IPLD Data model and formats. In short: JSON documents with named merkle-links that can be traversed. Stay tuned for more information in the future.

#### [**http-api-spec**](//github.com/ipfs/http-api-spec)

[@RichardLitt](//github.com/RichardLitt) finished logging all existing `ipfs` commands for the HTTP API Spec. This means that if you have any questions about how the HTTP API should work, you can see them either in master or as open PRs to that issue. If you are interested in how the HTTP API should work, or have any specific questions, please see the [current version](//github.com/ipfs/http-api-spec/blob/master/apiary.apib), and explore the [open PRs](https://github.com/ipfs/http-api-spec/pulls) on that repo.

#### [**distributions**](//github.com/ipfs/distributions)

[dist.ipfs.io](http://dist.ipfs.io/) _almost_ has [signed releases](https://github.com/ipfs/distributions/pull/51) thanks to [@dignifiedquire](//github.com/dignifiedquire). This will be coming soon.

#### [**js-ipfs**](//github.com/ipfs/js-ipfs)

Thanks to [@diasdavid](//github.com/diasdavid), the DAG object manipulation commands now work, with tests and all. As well, thanks to [@dignifiedquire](//github.com/dignifiedquire)'s efforts, the js-ipfs API now returns promises if there isn't a specified callback, allowing both major methods used by the Javascript community to work equally well.

#### [**registry-mirror**](//github.com/diasdavid/registry-mirror)

[@diasdavid](//github.com/diasdavid) improved [registry-mirror](//github.com/diasdavid/registry-mirror) performance and robustness by removing the dependency on registry-static. The few necessary parts were copied in. This is a huge step in reliability and performance cloning the registry with registry-mirror.

#### [**station**](//github.com/ipfs/station)

[@dignifiedquire](//github.com/dignifiedquire) fixed drag and drop
  file uploading, and some dependency issues. So go ahead and try it
  out.

#### [**ipfs-geoip**](//github.com/ipfs/ipfs-geoip)

[@dignifiedquire](//github.com/dignifiedquire) rewrote the generation
  script and cleaned up the code so that now the data is consistently
  reproducible and fully stored on IPFS. This ensures that geoip lookups
  over IPFS will work in all future releases.

#### [**fs-repo-migrations**](//github.com/ipfs/fs-repo-migrations)

[@chriscool](//github.com/chriscool) improved important tests for fs-repo-migrations -- tests verify more edge cases when migrating forward and backward, through various sample workloads.

#### [**ipfs-hyperlog**](//github.com/noffle/ipfs-hyperlog)

[@noffle](//github.com/noffle) built `ipfs-hyperlog`, and ipfs-compatible fork of hyperlog, a DAG that replicates based on scuttlebutt logs and causal linking. `ipfs-hyperlog` is a drop-in replacement for [@mafintosh](https://github.com/mafintosh)'s [`hyperlog`](https://github.com/mafintosh/hyperlog). Its key difference is that it creates a Merkle DAG that is *binary compatible* with IPFS objects. This means any node of any DAG built using ipfs-hyperlog can be replicated to and from the IPFS network as well!

#### [**Logo**](//github.com/ipfs/logo)

[@Kubuxu](//github.com/Kubuxu) worked on a new [IPFS logo](https://ipfs.io/ipfs/QmTgtbb4LckHaXh1YhpNcBu48cFY8zgT1Lh49q7q7ksf3M/). Check it out.

## Community

- If you have any suggestions for conferences, there is a [new issue](https://github.com/ipfs/community/issues/105) where you can submit your proposals. The IPFS community will see if we can get to that conference and have a presence there.
- We now have [a list of community events](https://github.com/ipfs/community#events-calendar) for IPFS on the ipfs/community README. Do you have any that you'd like to add? Check out past events, too.
- [@RichardLitt](//github.com/RichardLitt) proposed using the new [GitHub Templates](//github.com/ipfs/community/issues/108) for IPFS. What do you think about this idea? Chime in [here](https://github.com/ipfs/community/issues/108).

## IPFS In The Wild

- [**Marmot Image Checker**](https://github.com/eris-ltd/marmot): This takes an image, asks the Google Cloud Vision API for three descriptions of the image, and compares those descriptions to a chosen list of words. If there is match, the image is added to the [toadserver](https://github.com/eris-ltd/toadserver), a smart contract and IPFS-Backed download server. [From Twitter](https://twitter.com/asciinema/status/701730719589126146)
- [**asciienema**](https://github.com/asciinema/asciinema/releases/tag/v1.2.0) now allows playback on IPFS. [From Twitter](https://twitter.com/asciinema/status/701730719589126146)

## Contributors

Across the entire IPFS GitHub organization, the following people have committed code, created issues, or made a comment on GitHub between February 1st (noon, GMT) and February 29th. We're autogenerating this list using [this tool](//github.com/ipfs/weekly/blob/master/tools/get_commits.py) and [this other tool](//github.com/richardlitt/name-your-contributors), so please let us know if your name isn't here.

- [@abacon](//github.com/abacon) (Bacon)
- [@almereyda](//github.com/almereyda) (jon r)
- [@amstocker](//github.com/amstocker) (Andrew Stocker)
- [@anacrolix](//github.com/anacrolix) (Matt Joiner)
- [@anarcat](//github.com/anarcat) (anarcat)
- [@Ape](//github.com/Ape) (Lauri Niskanen)
- [@area](//github.com/area)
- [@ARezaK](//github.com/ARezaK)
- [@Asgraf](//github.com/Asgraf) (Michal Turek)
- [@Balancer](//github.com/Balancer) (Balancer)
- [@balupton](//github.com/balupton) (Benjamin Lupton)
- [@bierlingm](//github.com/bierlingm)
- [@BigBlueHat](//github.com/BigBlueHat) (BigBlueHat)
- [@boergsen](//github.com/boergsen)
- [@boxxa](//github.com/boxxa) (Boxxa)
- [@briantigerchow](//github.com/briantigerchow) (Brian Tiger Chow)
- [@brimstone](//github.com/brimstone) (Matt)
- [@bussiere](//github.com/bussiere) (bussiere)
- [@bzz](//github.com/bzz) (Alexander)
- [@chpio](//github.com/chpio)
- [@chris-martin](//github.com/chris-martin) (Christopher Martin)
- [@chriscool](//github.com/chriscool) (Christian Couder)
- [@christianlundkvist](//github.com/christianlundkvist) (Christian Lundkvist)
- [@ChristopherA](//github.com/ChristopherA) (Christopher Allen)
- [@cjcase](//github.com/cjcase) (Cj Case)
- [@cleichner](//github.com/cleichner) (Chas)
- [@codeburd](//github.com/codeburd)
- [@Crest](//github.com/Crest) (Crest)
- [@cryptix](//github.com/cryptix) (Henry)
- [@daveajones](//github.com/daveajones) (Dave Jones)
- [@David-Leudolph](//github.com/David-Leudolph) (David Leudolph)
- [@david415](//github.com/david415) (David Stainton)
- [@davidar](//github.com/davidar) (David A Roberts)
- [@denisnazarov](//github.com/denisnazarov) (Denis Nazarov)
- [@dginev](//github.com/dginev) (Deyan Ginev)
- [@diasdavid](//github.com/diasdavid) (David Dias)
- [@dignifiedquire](//github.com/dignifiedquire) (Friedel Ziegelmayer)
- [@djdv](//github.com/djdv) (Dominic Della Valle)
- [@dominictarr](//github.com/dominictarr) (Dominic Tarr)
- [@Dumptel](//github.com/Dumptel)
- [@dylanPowers](//github.com/dylanPowers) (Dylan Powers)
- [@edent](//github.com/edent) (Terence Eden)
- [@ehd](//github.com/ehd) (Stephan Seidt)
- [@EliasGabrielsson](//github.com/EliasGabrielsson) (Elias Gabrielsson)
- [@emardee](//github.com/emardee)
- [@eminence](//github.com/eminence) (Andrew Chin)
- [@faebser](//github.com/faebser) (Fabian Frei)
- [@fazo96](//github.com/fazo96) (Enrico Fasoli)
- [@Fil](//github.com/Fil) (Fil)
- [@frabrunelle](//github.com/frabrunelle) (Francis Brunelle)
- [@GitCop](//github.com/GitCop)
- [@GravisZro](//github.com/GravisZro) (Gravis)
- [@greenkeeperio-bot](//github.com/greenkeeperio-bot) (Greenkeeper)
- [@halseth](//github.com/halseth)
- [@harlantwood](//github.com/harlantwood) (Harlan T Wood)
- [@hitchcott](//github.com/hitchcott) (Chris Hitchcott)
- [@hosh](//github.com/hosh) (Ho-Sheng Hsiao)
- [@hutenosa](//github.com/hutenosa)
- [@IanCal](//github.com/IanCal) (Ian Calvert)
- [@ianopolous](//github.com/ianopolous) (Ian Preston)
- [@ingokeck](//github.com/ingokeck) (Ingo Keck)
- [@insanity54](//github.com/insanity54) (Chris Grimmett)
- [@ion1](//github.com/ion1) (Johan Kiviniemi)
- [@j-h-scheufen](//github.com/j-h-scheufen)
- [@j4nu5](//github.com/j4nu5) (Kushagra Sinha)
- [@jamescarlyle](//github.com/jamescarlyle) (James Carlyle)
- [@jbenet](//github.com/jbenet) (Juan Benet)
- [@jbshirk](//github.com/jbshirk) (Joe)
- [@jedahan](//github.com/jedahan) (Jonathan Dahan)
- [@jeffscottward](//github.com/jeffscottward) (Jeff Ward)
- [@jefft0](//github.com/jefft0) (Jeff Thompson)
- [@johncant](//github.com/johncant) (John Cant)
- [@kalmi](//github.com/kalmi) (Tarnay Kálmán)
- [@Kolomona](//github.com/Kolomona) (Kolomona Myer)
- [@krl](//github.com/krl) (kristoffer)
- [@Kubuxu](//github.com/Kubuxu) (Jakub Sztandera)
- [@kyledrake](//github.com/kyledrake) (Kyle Drake)
- [@kyrias](//github.com/kyrias) (Johannes Löthberg)
- [@lamarpavel](//github.com/lamarpavel)
- [@lernisto](//github.com/lernisto) (Terrel Shumway)
- [@lgierth](//github.com/lgierth) (Lars Gierth)
- [@lidel](//github.com/lidel) (Marcin Rataj)
- [@lockedshadow](//github.com/lockedshadow)
- [@lovelaced](//github.com/lovelaced)
- [@mappum](//github.com/mappum) (ᴍᴀᴛᴛ ʙᴇʟʟ)
- [@matshenricson](//github.com/matshenricson) (Mats Henricson)
- [@MichaelMure](//github.com/MichaelMure) (Michael Muré)
- [@micxjo](//github.com/micxjo) (Micxjo Funkcio)
- [@mildred](//github.com/mildred) (Mildred Ki'Lya)
- [@mindhog](//github.com/mindhog)
- [@Mithgol](//github.com/Mithgol)
- [@mnp](//github.com/mnp) (Mitchell Perilstein)
- [@montagsoup](//github.com/montagsoup)
- [@MrChrisJ](//github.com/MrChrisJ) (Chris Ellis)
- [@mseri](//github.com/mseri)
- [@NDuma](//github.com/NDuma) (NDuma)
- [@nginnever](//github.com/nginnever) (Nathan Ginnever)
- [@NightRa](//github.com/NightRa) (Ilan Godik)
- [@NodeGuy](//github.com/NodeGuy) (David Braun)
- [@noffle](//github.com/noffle) (Stephen Whitmore)
- [@odipar](//github.com/odipar) (rapido)
- [@olizilla](//github.com/olizilla) (Oli Evans)
- [@palesz](//github.com/palesz) (Palesz)
- [@palkeo](//github.com/palkeo) (palkeo)
- [@parkan](//github.com/parkan) (Arkadiy Kukarkin)
- [@peerchemist](//github.com/peerchemist)
- [@pietsch](//github.com/pietsch) (Christian Pietsch)
- [@prusnak](//github.com/prusnak) (Pavol Rusnak)
- [@randomshinichi](//github.com/randomshinichi)
- [@reit-c](//github.com/reit-c)
- [@rethore](//github.com/rethore) (Pierre-Elouan Réthoré)
- [@rht](//github.com/rht)
- [@RichardLitt](//github.com/RichardLitt) (Richard Littauer)
- [@richardschneider](//github.com/richardschneider) (Richard Schneider)
- [@rsynnest](//github.com/rsynnest)
- [@rubiojr](//github.com/rubiojr) (Sergio Rubio)
- [@rwcarlsen](https://github.com/rwcarlsen) (Robert Carlsen)
- [@se3000](//github.com/se3000) (Steve Ellis)
- [@Shaaah](//github.com/Shaaah) (Shaaah)
- [@shtukas](//github.com/shtukas) (Pascal Honoré)
- [@sivachandran](//github.com/sivachandran) (Sivachandran)
- [@sleep-walker](//github.com/sleep-walker) (Tomáš Čech)
- [@slothbag](//github.com/slothbag)
- [@Stebalien](//github.com/Stebalien) (Steven Allen)
- [@suisha](//github.com/suisha) (David Mai)
- [@tcyrus](//github.com/tcyrus) (Timothy Cyrus)
- [@thelinuxkid](//github.com/thelinuxkid) (Andres Buritica)
- [@tidux](//github.com/tidux) (Todixu)
- [@tinybike](//github.com/tinybike) (Jack Peterson)
- [@tomgg](//github.com/tomgg) (tmg)
- [@tv42](//github.com/tv42) (Tv)
- [@void4](//github.com/void4)
- [@wanderer](//github.com/wanderer)
- [@wasserfuhr](//github.com/wasserfuhr) (RainerWasserfuhr)
- [@whyrusleeping](//github.com/whyrusleeping) (Jeromy Johnson)
- [@xicombd](//github.com/xicombd) (Francisco Baio Dias)
- [@yangwao](//github.com/yangwao) (Matej Nemček)
- [@zignig](//github.com/zignig) (Simon Kirkby)
- [@Zogg](//github.com/Zogg)

This newsletter is also a community effort. If you have cool things to share for the next weekly, drop a comment about it in [the weekly repo](//github.com/ipfs/weekly! The more people mention items they want to see in the weekly there, the easier it is to make this and send it out.

- Richard Littauer and Andrew Chin

_Submit feedback about this issue [here](//github.com/ipfs/weekly/issues/10), or send us [feedback about the IPFS Weekly in general](//github.com/ipfs/weekly/issues/8)._

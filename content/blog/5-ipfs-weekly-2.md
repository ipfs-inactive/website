---
date: 2016-01-13
title: IPFS Weekly 2
slug: 5-ipfs-weekly-2
author: Richard Littauer, Andrew Chin
tags: []
categories: []
description: TBC
---

[IPFS](//ipfs.io/) is a new hypermedia distribution protocol, addressed by content and identities, aiming to make the web faster, safer, and more open. In these posts, we highlight some of the development that has happened in the past week. For anyone looking to get involved, follow the embedded hyperlinks, search the wealth of information on [GitHub](//github.com/ipfs) or join us on [IRC](//webchat.freenode.net/?channels=ipfs) (#ipfs on the Freenode network).

Here are some of the highlights for the [January 5th](//github.com/ipfs/pm/issues/77) Sprint:

## Updates

* [**(specs)**](//github.com/ipfs/specs) There was much debate in the [IPLD spec](https://github.com/ipfs/specs/pull/37) about pathing notation. [@mildred](//github.com/mildred) in particular did a lot of good work.
* [**(go-ipfs)**](//github.com/ipfs/go-ipfs) The IPFS Docker image is now tested automatically on Travis, thanks to [@ChristianKniep](//github.com/ChristianKniep), [@whyrusleeping](//github.com/whyrusleeping), and [@chriscool](//github.com/chriscool). For more, see the [go-ipfs#2064](//github.com/ipfs/go-ipfs/pull/2064) pull request.
* [**(js-ipfs)**](//github.com/ipfs/js-ipfs) Now you can do `npm i -g js-ipfs` and use jsipfs (the javascript impl of IPFS) with bootstrap + id + version commands, fully compatible with the go-ipfs repo, thanks to [@diasdavid](//github.com/diasdavid)!
* [**(project-repos)**](//github.com/ipfs/project-repos) A very cool [organization-wide dashboard](http://project-repos.ipfs.io/) that provides a status overview of all the IPFS repos was launched.  By [@harlantwood](//github.com/harlantwood).
* [**(community)**](//github.com/ipfs/community) [@RichardLitt](//github.com/RichardLitt) merged the pull request for [JavaScript guidelines](//github.com/ipfs/community/blob/master/js-contribution-guidelines.md) for IPFS repos. This is a major step towards standard JavaScript repositories within IPFS.
* [**(community)**](//github.com/ipfs/community#meetups) [@NeoTeo](//github.com/NeoTeo), [@whyrusleeping](//github.com/whyrusleeping), and [@diasdavid](//github.com/diasdavid) hosted a small meetup in Copenhagen!  Eight people in total showed up for an intro to IPFS, a Q&A session, and some good conversation!

## Work in Progress

* [**(distributions)**](//github.com/distributions) [@Dignifiedquire](//github.com/Dignifiedquire) further developed the distributions page.  [Click here](http://v04x.ipfs.io/ipfs/QmZyvWokPYGg6DrjE6o2V7qhThzZQZ8QCWqdd2U3S75HXC/index.html) for a preview!
* [**(go-ipfs)**](//github.com/ipfs/go-ipfs) [@lgierth](//github.com/lgierth) continued the work towards the dev040 migration.  Notably we have two new gateways to aid in the transition:   [http://v04x.ipfs.io](http://v04x.ipfs.io) and [http://v03x.ipfs.io](http://v03x.ipfs.io)
* [**(archives)**](//github.com/ipfs/archives/) [@Dignifiedquire](//github.com/Dignifiedquire) has added to IPFS a dump of the Stackexchange archives!  Details are [in the archives repo](//github.com/ipfs/archives/issues/50). We are always looking for more help with archiving important datasets, so feel free to join us in the [archives repo](//github.com/ipfs/archives/)!

## Contributors

Across the entire IPFS GitHub organization, the following people have committed code since January 4th. (We're autogenerating this list using [this tool](//github.com/ipfs/weekly/blob/master/tools/get_commits.py), so please let us know if your name isn't here.) In the future, we will also include people who comment, as they are also super important; bear with us while we develop that technology.

* [@chriscool](//github.com/chriscool) (Christian Couder)
* [@ChristianKniep](//github.com/ChristianKniep) (Christian Kniep)
* [@diasdavid](//github.com/diasdavid) (David Dias)
* [@Dignifiedquire](//github.com/Dignifiedquire) (Friedel Ziegelmayer)
* [@eminence](//github.com/eminence) (Andrew Chin)
* [@greenkeeperio-bot](//github.com/greenkeeperio-bot)
* [@ianopolous](//github.com/ianopolous) (Ian Preston)
* [@jbenet](//github.com/jbenet) (Juan Benet)
* [@Kubuxu](//github.com/Kubuxu) (Jakub Sztandera)
* [@lgierth](//github.com/lgierth) (Lars Gierth)
* [@noffle](//github.com/noffle) (Stephen Whitmore)
* [@ralphtheninja](//github.com/ralphtheninja) (Lars-Magnus Skog)
* [@ReadmeCritic](//github.com/ReadmeCritic)
* [@RichardLitt](//github.com/RichardLitt) (Richard Littauer)
* [@whyrusleeping](//github.com/whyrusleeping) (Jeromy Johnson)
* [@yuvallanger](//github.com/yuvallanger) (Yuval Langer)

Thanks, and see you next week!  If you have cool things to share for the next weekly, drop us a line in the [next weekly sprint issue](//github.com/ipfs/pm/issues/79)!

- Richard Littauer and Andrew Chin

_Submit feedback about this issue [here](//github.com/ipfs/weekly/issues/10), or send us [feedback about the IPFS Weekly in general](//github.com/ipfs/weekly/issues/7)._

date: 2016-02-05
title: IPFS Weekly 4
slug: 7-ipfs-weekly-4
author: Richard Littauer, Andrew Chin

[IPFS](//ipfs.io/) is a new hypermedia distribution protocol, addressed by content and identities, aiming to make the web faster, safer, and more open. In these posts, we highlight some of the development that has happened in the past week. For anyone looking to get involved, follow the embedded hyperlinks, search the wealth of information on [GitHub](//github.com/ipfs) or join us on [IRC](//webchat.freenode.net/?channels=ipfs) (#ipfs on the Freenode network).

If you would like to get this update as an email, sign up for our [weekly newsletter](//tinyletter.com/ipfsweekly)!

Here are some of the highlights for the [January 25th](//github.com/ipfs/pm/issues/84) sprint:

## Updates

* [**js-ipfs**](//github.com/ipfs/js-ipfs): [@diasdavid](//github.com/diasdavid) and [@vijayee](//github.com/vijayee) created [js-ipfs-merkle-dag](//github.com/vijayee/js-ipfs-merkle-dag) and [js-ipfs-blocks](//github.com/ipfs/js-ipfs-blocks), which will help IPFS deal with [MerkleDAGs](https://github.com/ipfs/specs) and are extensible enough to allow others to build their own MerkleDAG structures. Also, js-ipfs is now able to import a file into the MerkleDAG, an important milestone. An architecture graph has been spec'ed out [here](https://github.com/ipfs/js-ipfs#ipfs-core-implementation-architecture) to help newcomers understand how js-ipfs works. Finally, lots of new issues and low-hanging fruit have been tagged for [contributors to tackle](//github.com/ipfs/js-ipfs/issues).
[**idb-plus-blob-store**](https://github.com/dignifiedquire/idb-plus-blob-store): The [substack/idb-blob-store](https://github.com/substack/idb-blob-store) had issues regarding emitting the `finish` event on the `createWritableStream` result due to internal issues in streams and the way `.end` is handled. So [@dignifiedquire](//github.com/dignifiedquire) wrote this module that fixes this and now allows us to test all parts of js-ipfs in the browser using IndexedDB as the storage.
* [**go-ipfs**](//github.com/ipfs/go-ipfs): Thanks to [@Kubuxu](//github.com/Kubuxu), dnslink was extended by dedicated subdomain (`_dnslink.`). This allows users to alias (using CNAME) their domain to gateway.ipfs.io while still being able to to set the dnslink to content they wish. Also, [@whyrusleeping](//github.com/whyrusleeping) has [an open PR](https://github.com/ipfs/go-ipfs/pull/2256) to pull libp2p out of go-ipfs and put it into a module on [gx](https://github.com/whyrusleeping/gx), the IPFS native package manager. This is part of a larger effort to whittle go-ipfs down into smaller, extensible modules. Finally, [@whyrusleeping](//github.com/whyrusleeping) did a clean up of the go-ipfs pull requests, closing all pull requests or pinging their authors for updates as needed.
* [**notes**](//github.com/ipfs/notes): [@noffle](//github.com/noffle) began a discussion about revamping the `ipfs mount` interface. Join in to voice your thoughts [here](//github.com/ipfs/notes/issues/105).
* [**community**](//github.com/ipfs/community): [@diasdavid](//github.com/diasdavid) has written a [guide to writing captain.logs](https://github.com/ipfs/community/blob/master/captain.log.md), which are short gists written by maintainers about IPFS projects, their status, and how to help. We plan to have more of these in different projects.

## Community

* [**Lisbon**](//github.com/ipfs/community/issues/103): [@diasdavid](//github.com/diasdavid) hosted a Lisbon IPFS Sunday Hack Day this week. A few people came, and [@xicombd](//github.com/xicombd) made [this Chrome Extension](https://chrome.google.com/webstore/detail/ipfs-station/kckhgoigikkadogfdiojcblegfhdnjei/related), which lets you access IPFS urls from your local IPFS daemon ([source code](https://github.com/xicombd/ipfs-chrome-station)).
* [**Coffee Talks**](https://www.youtube.com/watch?v=dL9siwm03H4): [@whyrusleeping](//github.com/whyrusleeping) has hosted another "Coffee Talk", this time on [gx](https://github.com/whyrusleeping/gx), the IPFS package manager.
* [**NYC Meet-up**](//github.com/ipfs/community/issues/102): A NYC meet-up is planned for the end of February. Help us plan it and show your interest [here](https://github.com/ipfs/community/issues/102).
* [**Desert Blockchain**](https://twitter.com/DesertBlockHack/status/693520940504784896): IPFS was presented at the last [Desert Blockchain](https://twitter.com/DesertBlockHack) miniconference.

## Tools

- There was an unfortunate GitHub outage and many people started using IPFS to move around their repos, with [@whyrusleeping](//github.com/whyrusleeping)'s simple [git-ipfs-rehost](https://github.com/whyrusleeping/git-ipfs-rehost) [(view on IPFS)](http://gateway.ipfs.io/ipfs/QmNxF69vkC53ZBgXKHXBRbDWk2ELJeP5ohbPXtdYRRUgmN/git-ipfs-rehost) and [@cryptix](//github.com/cryptix)'s excellent [git-remote-ipfs](https://github.com/cryptix/git-remote-ipfs) [(view on IPFS)](http://gateway.ipfs.io/ipfs/QmbUruSDckF2HqjEBhq3tbtmHjCRAseCFDSDqbWSWE7CoV/git-remote-ipfs).
- [@pipermerriam](//github.com/pipermerriam) created [ipfs-persistence-consortium](https://github.com/pipermerriam/ipfs-persistence-consortium) to create networks of IPFS nodes which persist each other's content. This is similar to [@victorbjelkholm](//github.com/victorbjelkholm)'s [pincoop](https://github.com/victorbjelkholm/pincoop). Perhaps there can be some cooperation in these efforts? 😎
- The [FullNode](https://github.com/MrChrisJ/fullnode) Project -- which includes IPFS, Tor, Bitcoin, OpenVPN and more -- [is having a crowdfund](https://www.startjoin.com/protip2) -- go get one! Thanks for making it [@MrChrisJ](//github.com/MrChrisJ)!

## Other

- It was [Ralph Merkle's](https://en.wikipedia.org/wiki/Ralph_Merkle) birthday on February 2nd! He is the creator of the [Merkle tree](https://en.wikipedia.org/wiki/Merkle_tree), which are a crucial part of how IPFS works. Happy Birthday, Ralph! 🎂
- Our friends at [Mine](http://mine.nyc) are using IPFS for the excellent [Mediachain metadata protocol](https://medium.com/mine-labs/introducing-mediachain-a696f8fd2035) ([protocol proposal here](https://medium.com/mine-labs/mediachain-483f49cbe37a#.h6wrzm3ze)), a protocol to track media creation, attribution, and more. They have published [several great articles](https://medium.com/mine-labs?source=logo-lo_8f8cb62ab817-6838e0c89092) about it. This week [@denisnazarov](//github.com/denisnazarov) wrote about [The GIF That Fell To Earth](https://medium.com/mine-labs/the-gif-that-fell-to-earth-eae706c72f1f#.s0c7x59he), and [@parkan](//github.com/parkan) gave a [Developer Update](https://medium.com/mine-labs/mediachain-developer-update-i-911c9e7a4524#.zc984cqen) that discusses [pHash](http://www.phash.org/), [IPLD](https://github.com/ipfs/specs/blob/ipld-spec/merkledag/ipld.md), and more.
- [@lexansoft](//github.com/lexansoft) created a new Ethereum name registrar called [EtherID](http://etherid.org) ([repo here](https://github.com/lexansoft/etherid.org)), which uses IPFS for storing users' content. Then [@btsfav](https://twitter.com/btsfav) wrote an article about [Personal Websites on EtherID with IPFS](http://favs.pw/time-for-some-interplanetary-etheral-magic/).

## Contributors

Across the entire IPFS GitHub organization, the following people have committed code, created issues, or made a comment on GitHub between January 25th (noon, GMT) and February 1st. We're autogenerating this list using [this tool](//github.com/ipfs/weekly/blob/master/tools/get_commits.py), so please let us know if your name isn't here.

- [@alexAubin](//github.com/alexAubin) (Alexandre Aubin)
- [@andreiamatuni](//github.com/andreiamatuni) (Andrei Amatuni)
- [@area](//github.com/area)
- [@AtnNn](//github.com/AtnNn) (Etienne Laurin)
- [@bdunlay](//github.com/bdunlay) (Brian Dunlay)
- [@BigBlueHat](//github.com/BigBlueHat) (BigBlueHat)
- [@chriscool](//github.com/chriscool) (Christian Couder)
- [@ConsciousCode](//github.com/ConsciousCode) (Conscious Code)
- [@cryptix](//github.com/cryptix) (Henry)
- [@davidar](//github.com/davidar) (David A Roberts)
- [@diasdavid](//github.com/diasdavid) (David Dias)
- [@dignifiedquire](//github.com/dignifiedquire) (Friedel Ziegelmayer)
- [@dysbulic](//github.com/dysbulic) (Will Holcomb)
- [@eminence](//github.com/eminence) (Andrew Chin)
- [@fazo96](//github.com/fazo96) (Enrico Fasoli)
- [@GitCop](//github.com/GitCop)
- [@greenkeeperio-bot](//github.com/greenkeeperio-bot) (Greenkeeper)
- [@harlantwood](//github.com/harlantwood) (Harlan T Wood)
- [@Hexagon6](//github.com/Hexagon6)
- [@IanCal](//github.com/IanCal) (Ian Calvert)
- [@ion1](//github.com/ion1) (Johan Kiviniemi)
- [@JAremko](//github.com/JAremko)
- [@jbenet](//github.com/jbenet) (Juan Benet)
- [@jedahan](//github.com/jedahan) (Jonathan Dahan)
- [@kazarena](//github.com/kazarena)
- [@kpcyrd](//github.com/kpcyrd)
- [@Kubuxu](//github.com/Kubuxu) (Jakub Sztandera)
- [@lgierth](//github.com/lgierth) (Lars Gierth)
- [@lidel](//github.com/lidel) (Marcin Rataj)
- [@lockedshadow](//github.com/lockedshadow)
- [@Luzifer](//github.com/Luzifer) (Knut Ahlers)
- [@MartinThoma](//github.com/MartinThoma) (Martin Thoma)
- [@MichaelMure](//github.com/MichaelMure) (Michael Muré)
- [@mildred](//github.com/mildred) (Mildred Ki'Lya)
- [@mindhog](//github.com/mindhog)
- [@Mithgol](//github.com/Mithgol)
- [@mortonfox](//github.com/mortonfox) (Morton Fox)
- [@MrChrisJ](//github.com/MrChrisJ) (Chris Ellis)
- [@NDuma](//github.com/NDuma) (NDuma)
- [@NeoTeo](//github.com/NeoTeo) (Teo Sartori)
- [@nikhilshekhawat](//github.com/nikhilshekhawat)
- [@noffle](//github.com/noffle) (Stephen Whitmore)
- [@palesz](//github.com/palesz) (Palesz)
- [@Patagonicus](//github.com/Patagonicus) (Philipp Adolf)
- [@ralphbean](//github.com/ralphbean) (Ralph Bean)
- [@randomshinichi](//github.com/randomshinichi)
- [@rht](//github.com/rht)
- [@RichardLitt](//github.com/RichardLitt) (Richard Littauer)
- [@Shaaah](//github.com/Shaaah) (Shaaah)
- [@sivachandran](//github.com/sivachandran) (Sivachandran)
- [@slothbag](//github.com/slothbag)
- [@thelinuxkid](//github.com/thelinuxkid) (Andres Buritica)
- [@tilgovi](//github.com/tilgovi) (Randall Leeds)
- [@tommg](//github.com/tomgg) (Thomas Gardner)
- [@VertigoRay](//github.com/VertigoRay) (Raymond Piller)
- [@w33tmaricich](//github.com/w33tmaricich) (Alexander Maricich)
- [@whyrusleeping](//github.com/whyrusleeping) (Jeromy Johnson)
- [@whyun7892](//github.com/whyun7892)
- [@willeponken](//github.com/willeponken) (William Wennerström)
- [@willglynn](//github.com/willglynn) (Will Glynn)
- [@xicombd](//github.com/xicombd) (Francisco Baio Dias)

Thanks, and see you next week!  If you have cool things to share for the next weekly, drop us a line in the [next weekly sprint issue](//github.com/ipfs/pm/issues/88)!

- Richard Littauer and Andrew Chin

_Submit feedback about this issue [here](https://github.com/ipfs/weekly/pull/16), or send us [feedback about the IPFS Weekly in general](//github.com/ipfs/weekly/issues/7)._

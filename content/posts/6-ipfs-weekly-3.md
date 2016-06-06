date: 2016-02-01
title: IPFS Weekly 3
author: Richard Littauer, Andrew Chin

[IPFS](//ipfs.io/) is a new hypermedia distribution protocol, addressed by content and identities, aiming to make the web faster, safer, and more open. In these posts, we highlight some of the development that has happened in the past week. For anyone looking to get involved, follow the embedded hyperlinks, search the wealth of information on [GitHub](//github.com/ipfs) or join us on [IRC](//webchat.freenode.net/?channels=ipfs) (#ipfs on the Freenode network).

If you would like to get this update as an email, sign up for our [weekly newsletter](//tinyletter.com/ipfsweekly)!

This is a double weekly: here are some of the highlights for the [January 12th](//github.com/ipfs/pm/issues/79) and the [January 19th](https://github.com/ipfs/pm/issues/83) sprints:

## Updates

* [**dist.ipfs.io**](http://dist.ipfs.io) A distributions page has been shipped! This was largely spearheaded by [@dignifiedquire](//github.com/dignifiedquire). This is the new one-stop-shop for finding and downloading all official binaries that IPFS produces. Each project has:
  - The distribution name and a short description;
  - The current version number and release date;
  - A download button that detects your platform and automatically suggests the appropriate distribution for you;
  - A grid with download links for all supported platforms (operating system and architectures);
  - A `Changelog`, a link to a summary of all version changes;
  - An `All Versions`, a link to view and download previous versions.

  The site is also hosted on IPFS, and is used by [`ipfs-update`](https://github.com/ipfs/ipfs-update) to update IPFS. Check it out at http://dist.ipfs.io.
* [**go-ipfs**](//github.com/ipfs/go-ipfs) 0.3.11 is shipped! Also, we merged 0.4.0 into master. [@jbenet](//github.com/jbenet), [@Dignifiedquire](//github.com/Dignifiedquire) and others [fixed appveyor](//github.com/ipfs/go-ipfs/pull/2137). And finally the latest webui by [@Dignifiedquire](//github.com/Dignifiedquire) was pushed in 0.3.11. Check out the [changelog](https://github.com/ipfs/go-ipfs/blob/master/CHANGELOG.md).
* [**js-ipfs-merkle-dag**](//github.com/vijayee/js-ipfs-merkle-dag/) [@diasdavid](//github.com/diasdavid) worked on merkle-dag implementation interoperabolity, by enabling you to successfully read (and write) MerkleDAG nodes that were stored into an IPFS Repo through go-ipfs, [in JavaScript](https://github.com/vijayee/js-ipfs-merkle-dag/pull/6).
* [**py-ipfs**](//github.com/ipfs/py-ipfs) Thanks to [@candeira](//github.com/candeira) and [@ivilata](//github.com/ivilata), we now have a much more filled out plan for the Python implementation of IPFS. Join in if you are a pythonista.
* [**js-mafmt**](//github.com/whyrusleeping/js-mafmt) [@whyrusleeping](//github.com/whyrusleeping) is working on a multiaddr validator in js, after his go work in [mafmt](//github.com/whyrusleeping/mafmt)
* [**infrastructure**](//github.com/ipfs/infrastructure) The public gateway at [ipfs.io](https://ipfs.io) is now backed by both v0.4.0-dev and v0.3.11 at the same time. Requests are proxied to both, and the first successful response wins. ipfs.io will be backed by v0.4.x alone eventually. What this means is that if you want to target your requests at one specific version, use v04x.ipfs.io or v03x.ipfs.io, respectively. The latter will stop returning DNS records when v03x isn't supported on the public gateway. Also, while we're releasing v0.4.0 and for a while after, the default bootstrap nodes are divided among v03x and v04x. Most can be used by v04x nodes, and a few by v03x nodes. The latter will be phased out over time.
* [**ipfs-firefox-addon**](//github.com/lidel/ipfs-firefox-addon#ipfs-firefox-addon) The Firefox addon that provides transparent access to IPFS resources via local HTTP2IPFS gateway has been updated to [release 1.4.2](https://github.com/lidel/ipfs-firefox-addon/releases/tag/v1.4.2). This is the first time we've mentioned this in this newsletter; go check it out. The addon enables you to load content via IPFS instead of HTTP. For example, if you open a resource from a public gateway (eg. https://ipfs.io/ipfs/QmW2WQi7j6c7UgJTarActp7tDNikE4B2qXtFCfLPdsgaTQ/cat.jpg) and have addon enabled, the request will not hit public gateway, but data will be loaded from IPFS swarm, in a decentralized and distributed way. It also now supports the IPFS protocol scheme, meaning that can look up a hash by going to `fs:/ipfs/<hash>` directly.
* [**go-multiaddr**](//github.com/jbenet/go-multiaddr) go-multiaddr now supports the adding of new protocols on the fly. This allows us to build in new protocols without having to force everyone to update the multiaddr library itself.
* [**community**](//github.com/ipfs/community) The labels 'help wanted' and 'difficulty:easy', ':hard', and ':moderate' have been added to every IPFS repository, to help out contributors know what are some low-hanging fruit they can help with. As well, [@RichardLitt](//github.com/RichardLitt) has created a [Docs Styleguide](https://github.com/ipfs/community/blob/master/docs-styleguide.md) to help standardize how we use English in all of our tools. It'll grow as time goes on.
* [**ipfs-dht**](//github.com/whyrusleeping/ipfs-dht) [@whyrusleeping](//github.com/whyrusleeping) wrote a 'just a dht' binary. This means you can help out the network without running a full ipfs node. It also takes less memory and bandwidth, and having more dht nodes will speed up lookups.
* [**js-ipfsd-ctl**](//github.com/ipfs/js-ipfsd-ctl) The Node module able to control an IPFS daemon was [updated to 0.3.11](//github.com/ipfs/js-ipfsd-ctl/pull/47).
* [**webui**](//github.com/ipfs/webui) The webui no long depends on [jQuery](//github.com/ipfs/webui/pull/215), thanks to a lot of work from [@luigiplr](//github.com/luigiplr), [@travisperson](//github.com/travisperson), and [@dignifiedquire](//github.com/dignifiedquire).


## Work in Progress
* [**js-ipfs**](//github.com/ipfs/pm) [@diasdavid](//github.com/diasdavid) has merged in the roadmaps for js-ipfs and libp2p, which he'll update as more details become apparent. Take a look.
* [**weekly**](//github.com/ipfs/weekly) [@RichardLitt](//github.com/RichardLitt) put a lot of work in getting various sorts of attribution for contributors to IPFS, currently available as [name-your-contributors](//github.com/RichardLitt/name-your-contributors). This is almost done, but there are a few tweaks left to do.

## Meetups and Conferences

* [**ArcticJS**](http://arcticjs.club) [@diasdavid](//github.com/diasdavid), [@whyrusleeping](//github.com/whyrusleeping), [@RichardLitt](//github.com/RichardLitt), and [@noffle](//github.com/noffle) were all able to meet up for the first time as a group and hack together at [ArcticJS](http://arcticjs.club), the first JavaScript conference above the Arctic circle, in Svalbard. Around 15 attended, and there was a lot of hacking, snow, talking about buffers, and swimming in the ocean at midnight underneath the Aurora Borealis (no, really). Most of the work done at the conference was conversations, but included [@diasdavid](//github.com/diasdavid) and [@RichardLitt](//github.com/RichardLitt) working on the API together, [@whyrusleeping](//github.com/whyrusleeping) learning how to javascript, and [@diasdavid](//github.com/diasdavid) and [@xicombd](//github.com/xicombd) working on IPFS together. All in all, it was an incredible trip. The videos for the actual talks (given in the most Northernmost church in the world) are [here](https://www.youtube.com/playlist?list=PL3bvPCw5QCLLJUL2Q_bBI1bi9bYQ-4hci).

## Shoutouts

* Joe Armstrong, inventor of Erlang, [mentioned](https://twitter.com/joeerl/status/692065172609994752) the importance of permanence and IPFS in a recent, and fantastic [series of posts about organizing software](http://joearms.github.io/2016/01/26/The-Unintentional-Side-Effects-of-a-Bad-Concurrency-Model.html). Thanks for the kind mention, Joe!

## Contributors

Across the entire IPFS GitHub organization, the following people have committed code, created issues, or made a comment on GitHub between January 11th and January 25. (We're autogenerating this list using [this tool](//github.com/ipfs/weekly/blob/master/tools/get_commits.py), so please let us know if your name isn't here.)

- [@adrian-bl](//github.com/adrian-bl) (Adrian Ulrich)
- [@alexeicolin](//github.com/alexeicolin)
- [@ali](//github.com/ali) (Ali Ukani)
- [@amstocker](//github.com/amstocker) (Andrew Stocker)
- [@anarcat](//github.com/anarcat) (anarcat)
- [@ansuz](//github.com/ansuz) (ansuz)
- [@Ape](//github.com/Ape) (Lauri Niskanen)
- [@area](//github.com/area)
- [@AtnNn](//github.com/AtnNn) (Etienne Laurin)
- [@Azulan](//github.com/Azulan) (Frank Flores)
- [@Balancer](//github.com/Balancer) (Balancer)
- [@bcg-didi](//github.com/bcg-didi)
- [@benjaminbollen](//github.com/benjaminbollen) (Benjamin Bollen)
- [@brailateo](//github.com/brailateo) (Constantin Teodorescu)
- [@btrask](//github.com/btrask) (Ben Trask)
- [@CaioAlonso](//github.com/CaioAlonso) (Caio Alonso)
- [@chpio](//github.com/chpio)
- [@chriscool](//github.com/chriscool) (Christian Couder)
- [@ConsciousCode](//github.com/ConsciousCode) (Conscious Code)
- [@CrowdHailer](//github.com/CrowdHailer) (Peter Saxton)
- [@dandart](//github.com/dandart) (Dan Dart)
- [@david415](//github.com/david415) (David Stainton)
- [@davidar](//github.com/davidar) (David A Roberts)
- [@diasdavid](//github.com/diasdavid) (David Dias)
- [@digital-dreamer](//github.com/digital-dreamer)
- [@dignifiedquire](//github.com/dignifiedquire) (Friedel Ziegelmayer)
- [@djdv](//github.com/djdv) (Dominic Della Valle)
- [@dylanPowers](//github.com/dylanPowers) (Dylan Powers)
- [@eminence](//github.com/eminence) (Andrew Chin)
- [@Faleidel](//github.com/Faleidel)
- [@fazo96](//github.com/fazo96) (Enrico Fasoli)
- [@findkiko](//github.com/findkiko)
- [@Foxcool](//github.com/Foxcool) (Alexander Babenko)
- [@GitCop](//github.com/GitCop)
- [@goog](//github.com/goog) (Jay Cheng)
- [@greenkeeperio-bot](//github.com/greenkeeperio-bot) (Greenkeeper)
- [@harlantwood](//github.com/harlantwood) (Harlan T Wood)
- [@ikreymer](//github.com/ikreymer) (Ilya Kreymer)
- [@jbenet](//github.com/jbenet) (Juan Benet)
- [@jbshirk](//github.com/jbshirk) (Joe)
- [@jedahan](//github.com/jedahan) (Jonathan Dahan)
- [@Kubuxu](//github.com/Kubuxu) (Jakub Sztandera)
- [@kyledrake](//github.com/kyledrake) (Kyle Drake)
- [@lgierth](//github.com/lgierth) (Lars Gierth)
- [@lidel](//github.com/lidel) (Marcin Rataj)
- [@lovelaced](//github.com/lovelaced)
- [@luigiplr](//github.com/luigiplr) (Luigi Poole)
- [@Luzifer](//github.com/Luzifer) (Knut Ahlers)
- [@matshenricson](//github.com/matshenricson) (Mats Henricson)
- [@MChabez](//github.com/MChabez)
- [@Mec-iS](//github.com/Mec-iS) (Lorenzo)
- [@MichaelMure](//github.com/MichaelMure) (Michael Muré)
- [@mildred](//github.com/mildred) (Mildred Ki'Lya)
- [@Mithgol](//github.com/Mithgol)
- [@NDuma](//github.com/NDuma) (NDuma)
- [@NeoTeo](//github.com/NeoTeo) (Teo Sartori)
- [@nginnever](//github.com/nginnever) (Nathan Ginnever)
- [@nicola](//github.com/nicola) (Nicola Greco)
- [@NightRa](//github.com/NightRa) (Ilan Godik)
- [@noffle](//github.com/noffle) (Stephen Whitmore)
- [@Patagonicus](//github.com/Patagonicus) (Philipp Adolf)
- [@peerchemist](//github.com/peerchemist)
- [@peteygao](//github.com/peteygao) (Peter Gao)
- [@PlanetPlan](//github.com/PlanetPlan)
- [@pra85](//github.com/pra85) (Prayag Verma)
- [@prusnak](//github.com/prusnak) (Pavol Rusnak)
- [@ralphtheninja](//github.com/ralphtheninja) (Lars-Magnus Skog)
- [@ReadmeCritic](//github.com/ReadmeCritic)
- [@Red5d](//github.com/Red5d)
- [@reit-c](//github.com/reit-c)
- [@rht](//github.com/rht)
- [@RichardLitt](//github.com/RichardLitt) (Richard Littauer)
- [@richardschneider](//github.com/richardschneider) (Richard Schneider)
- [@rugk](//github.com/rugk) (rugk)
- [@SCBuergel](//github.com/SCBuergel) (Sebastian C. Bürgel)
- [@seclorum](//github.com/seclorum) (seclorum)
- [@thelinuxkid](//github.com/thelinuxkid) (Andres Buritica)
- Thomas Gardner
- [@travisperson](//github.com/travisperson) (Travis Person)
- [@tv42](//github.com/tv42) (Tommi Virtanen)
- [@void4](//github.com/void4)
- [@WeMeetAgain](//github.com/WeMeetAgain) (Cayman)
- [@whyrusleeping](//github.com/whyrusleeping) (Jeromy Johnson)
- [@windemut](//github.com/windemut)
- [@wking](//github.com/wking) (W. Trevor King)
- [@xicombd](//github.com/xicombd) (Francisco Baio Dias)
- [@zignig](//github.com/zignig) (Simon Kirkby)

Thanks, and see you next week!  If you have cool things to share for the next weekly, drop us a line in the [next weekly sprint issue](//github.com/ipfs/pm/issues/83)!

- Richard Littauer and Andrew Chin

_Submit feedback about this issue [here](//github.com/ipfs/weekly/pull/14), or send us [feedback about the IPFS Weekly in general](//github.com/ipfs/weekly/issues/7)._

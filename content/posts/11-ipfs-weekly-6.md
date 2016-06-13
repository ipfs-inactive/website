date: 2016-03-09
title: IPFS Weekly 6
slug: 11-ipfs-weekly-6
author: Richard Littauer, Andrew Chin

[IPFS](https://ipfs.io/) is a new hypermedia distribution protocol, addressed by content and identities, aiming to make the web faster, safer, and more open. In these posts, we highlight some of the development that has happened in the past week. For anyone looking to get involved, follow the embedded hyperlinks, search the wealth of information on [GitHub](https://github.com/ipfs) or join us on [IRC](https://webchat.freenode.net/?channels=ipfs) (#ipfs on the Freenode network).

If you would like to get this update as an email, sign up for our [weekly newsletter](https://tinyletter.com/ipfsweekly)!

Here are some of the highlights for the [first week of March](https://github.com/ipfs/pm/issues/93):

## Updates

#### [**station**](https://github.com/ipfs/station)

![Station](https://ipfs.io/ipfs/QmZV7iGTu91w1YePo1EG98siCPxPFrw9Uzf7wAmARusET5)

The new version of [station](https://github.com/ipfs/station) is ready for developer preview! `station` is one of the easiest ways to get an IPFS daemon running on your machine. It acts as a service and you get many convenient features, such as the ability to turn an IPFS node on through a GUI and drag and drop to share through IPFS. To try it out, you need Node.js 4 ([installation instructions here](https://nodejs.org/en/)) and npm 3 (which comes with Node) installed. Then, do the following:

```
> git clone https://github.com/ipfs/station.git && cd station
> npm install
> npm start
```

#### [**website**](https://github.com/ipfs/website)

The list of [API Commands](https://ipfs.io/docs/commands/) on the website has been updated. This provides a single place to look through all of the CLI commands for go-ipfs, at once; it is a good reference point if you're not sure exactly which command to use next, and `ipfs commands` seems sparse.

#### **AUR**

[@Kubuxu](https://github.com/Kubuxu) has made sure that `gx`, `gx-go`, and `ipget` are available on [AUR](https://aur.archlinux.org), the arch-linux user repository. This means that it will be easier to get and install these on some linux platforms.

#### [**karma-peer**](https://github.com/dignifiedquire/karma-peer)

[@dignifiedquire](https://github.com/dignifiedquire)'s work on [karma-peer](https://github.com/dignifiedquire/karma-peer) means that it now has the ability to dynamically launch browsers, which will help [@diasdavid](https://github.com/diasdavid) (and hopefully more people!) write better tests for P2P browser applications. See an example of some tests, [here](https://github.com/dignifiedquire/karma-peer/blob/master/test/index.spec.js). You can also read [the discussion](https://github.com/diasdavid/piri-piri#why-does-it-exist) that lead to this module and the original tool to test P2P browser applications.

#### [**randor**](http:https://github.com/dignifiedquire/randor)

[@dignifiedquire](https://github.com/dignifiedquire) has been working on [randor](http:https://github.com/dignifiedquire/randor), a testing framework that will be able to send huge files and lots of requests into IPFS in order to test how it works for edge cases and how it scales. Randor is now able to rerun tests predictably based on stored data, so it's easy to find and fix bugs. [@whyrusleeping](https://github.com/whyrusleeping) is already working on the first bug that randor detected. To contribute, check out the repository.

#### [**WebRTC Explorer**](https://github.com/diasdavid/webrtc-explorer)

WebRTC Explorer 2.0.0 has been alpha released! WebRTC Explorer is a P2P Routing Overlay Network, using WebRTC Data Channels as the transportation layer between nodes. WebRTC Explorer enables communication between browsers without needing mediators (servers), enabling users to route packets between machines, using only Web technologies. WebRTC Explorer is inspired by the Chord DHT, to create a routing scheme with finger tables that are evenly balanced across nodes. [@diasdavid](https://github.com/diasdavid) wrote up a more extensive [blog post here](http://blog.daviddias.me/2016/02/28/webrtc-explorer-2-0-0-alpha-release), and has an introductory video [here](https://youtu.be/fNQGGGE__zI).

#### [**libp2p**](https://github.com/diasdavid/js-libp2p)

[@diasdavid](https://github.com/diasdavid) released versions of two modules for stream multiplexing: [libp2p-spdy](https://github.com/diasdavid/js-libp2p-spdy) and [libp2p-multiplex](https://github.com/diasdavid/js-libp2p-multiplex). As well, [libp2p-swarm](https://github.com/diasdavid/js-libp2p-swarm) has a new API, more tests, less magic, and more flexibility. There is an open PR to track these changes; if you'd like to get involved, [follow it](https://github.com/diasdavid/js-libp2p-swarm/pull/20).

#### [**js-ipfs**](https://github.com/ipfs/js-ipfs)

Some of you have been asking about ways to contribute to the JavaScript implementation of IPFS: well, wait no more! Now you can read the latest [captain.log](https://github.com/ipfs/js-ipfs/issues/30#issuecomment-187950929) entry and learn about the state of the project and have a list of issues of things that you can contribute. We appreciate all your help.

#### **ipfs-pad**

We want to build an Etherpad-like product on top of IPFS. There's a lot of
technical ground to cover to do this: how do we know how to sort edits? How do
we deal with high latencies (days/weeks), or with simultaneous edits? How is the
data transported? [@noffle](https://github.com/noffle) has been spearheading the process behind building
this, and this week made a host of modules to resolve some of its dependencies:

- [bisecting-numbers](https://github.com/noffle/bisecting-numbers) -
  Integer-like number system where any number can be bisected to form infinite
  integer subsystems.
- [bisecting-between](https://github.com/noffle/bisecting-between) - Produces a
  unique value that sorts between two other given values.
- [hyperswarm](https://github.com/noffle/hyperswarm) - Create a p2p webrtc swarm
  around a [hyperlog](https://github.com/mafintosh/hyperlog).

(He also wrote a little [README
generator](https://github.com/noffle/generate-readme) to help him out with his
JS module READMEs.)

#### **pubsub**

[@noffle](https://github.com/noffle) also published a couple of early mad science modules that enable a
peer-to-peer overlay network for gossip-based message exchange. These aren't
strictly built for IPFS, but are an experimental shim to enable projects like
[@haad](https://github.com/haad)'s [orbit-db](https://github.com/haadcode/orbit-db) to operate without a
central server for message exchange between peers.

- [secure-gossip](https://github.com/noffle/secure-gossip) - Secure, transport
  agnostic, message gossip protocol. Any peer in the network can publish
  messages, which will eventually propagate to the entire network via rounds of
  gossip between each node's peers.
- [pubsub-swarm](https://github.com/noffle/pubsub-swarm) - Form a p2p swarm of
  nodes around a topic and exchange messages, with a traditional pubsub API.

#### [**go-ipfs**](https://github.com/ipfs/go-ipfs)

[@whyrusleeping](https://github.com/whyrusleeping) set up [Teamcity](https://www.jetbrains.com/teamcity/). This cuts down on the long waits for Travis to run, and hopefully will mean faster CI tests. Teamcity also gives us awesome metrics on our tests and nice statistics on failures and failure rates. Teamcity has nice integration with a large array of test runners, from go tests to karma and sharness. It will give us more detailed feedback about our test runs, even when successful.

#### [**fc00**](https://github.com/fc00/spec)

![lgierth in Paris](https://ipfs.io/ipfs/QmYBv9R3nHMm8XnTHuNhFDJeQxSE9g3G4edpL13eAje3Cc)

[@lgierth](https://github.com/lgierth) spent a productive week in Paris, and chatted with [@cjdelisle](https://github.com/cjdelisle) and [@ansuz](https://github.com/ansuz) at [@xwiki](https://twitter.com/xwiki) about the state and future of cjdns/fc00, layed out ideas for routing improvements, and drafted spec documents for the switch and cryptoauth layers. You can find those specs [here](https://github.com/fc00/spec/pulls) (they'll be updated soon). Work will continue on these for the rest of March. The switch and routing layers of fc00 might be the foundation of a smarter swarm for IPFS/libp2p, so this is all very exciting.

## Community

#### [**name-your-contributors**](https://github.com/RichardLitt/name-your-contributors)

[@RichardLitt](https://github.com/RichardLitt) gave a talk at [BostonJS](http://bostonjs.com/) on Thursday to around fifty people, about how the `name-your-contributors` module is used in this newsletter. The theme of the meetup was community building; if you have any ideas for improving the Contributor list below, check out [this repository](github.com/RichardLitt/name-your-contributors) and let us know. Since the talk, [@RichardLitt](https://github.com/RichardLitt) also added [get-pr-creators](https://github.com/RichardLitt/get-pr-creators) to the module, so that everyone who opens a PR (even if it isn't merged) gets added to the contributors list. Has your name been included?

#### **dignifed hacks**

[@dignifiedquire](https://github.com/dignifiedquire) launched a live-stream of him coding, which he is calling "dignified hacks". Last Monday he recorded himself doing a new feature for the [WebUI](https://github.com/ipfs/webui) in the first episode. He'll do another one this week. One of the viewers, [@nginnever](https://github.com/nginnever), said it "was helpful for a quick view of our components and data flow in the webui." He will announce regular showtimes on [Twitter](https://twitter.com/dignifiedquire) and you can subscribe to [IPFS on YouTube](https://www.youtube.com/channel/UCdjsUXJ3QawK4O5L1kqqsew) where future episodes will be hosted.

#### [**Lisbon Blockchain Workshop**](http://www.meetup.com/Lisbon-blockchain)

[@diasdavid](https://github.com/diasdavid) participated on the last Lisbon Blockchain Workshop on March 5, hosted by Kwamecorp. The workshop gathered many Blockchain, IPFS, ethereum and zerocash enthusiasts that were organized in working groups to build solutions with these distributed technologies.

#### [IPFS Dead drop](https://github.com/c-base/ipfs-deaddrop)

![cbase deadrop](https://ipfs.io/ipfs/QmTK8Djb6hFfHD3hGLv4w3RRYsZXLsTkQ4hYzXuM7ba3Sk "Photo taken and cropped from https://www.flickr.com/photos/bergie/24769765569/in/datetaken-public/")

Some members of [c-base](http://www.c-base.org/) have written a dead drop-like system that automatically uploads files from a USB memory stick to IPFS. When you plug a USB memory into the device, it will automatically access the memory stick and publish all the files on the web. Thanks to IPFS the files are instantly available to the whole world. Check out [deaddrops.com](https://deaddrops.com/) for more information about dead drops.

They also have an installation available: the node is run in the above device. When you plug it in, you get to [see this](https://www.flickr.com/photos/bergie/24857415123/in/datetaken-public/), too. If you're in Berlin or visiting soon, make sure to drop by.

#### Interplanetary Wayback (IPWB)

At [Archives Unleashed](https://artsweb.uwaterloo.ca/archivesunleashed/), a Web Archive Hackathon in Toronto, [Mat Kelly](https://twitter.com/machawk1) (@machawk1) and [Sawood Alam](https://twitter.com/ibnesayeed) (@ibnesayeed) from [ODU WSDL Research Group](https://github.com/oduwsdl) developed an IPFS based distributed and persistent archive replay system called [Interplanetary Wayback](https://github.com/oduwsdl/ipwb).

#### **Science Data**

@jbenet visited the [Janelia Research Campus](https://www.janelia.org) to learn about scientific data tools and use cases. He gave a talk about IPFS, data versioning, package management, and more (video forthcoming). He learned about [DVID](https://github.com/janelia-flyem/dvid), and the requirements of the amazing [FlyEM brain imaging effort](https://www.janelia.org/project-team/flyem). He got to see many fantastic open source research tools made by the [FlyEM Team](https://www.janelia.org/project-team/flyem) ([github](https://github.com/janelia-flyem)), the [Freeman Lab](http://thefreemanlab.com/) ([github](https://github.com/freeman-lab)), and other groups. Go check out their GitHub repos, and help them improve brain research!

#### **Press**

[Jeff Smith](http://www.sitepoint.com/author/jeffsmith/) of Sitepoint released a great article on IPFS: ["HTTP vs IPFS: is Peer-to-Peer Sharing the Future of the Web?"](http://www.sitepoint.com/http-vs-ipfs-is-peer-to-peer-sharing-the-future-of-the-web/).

## Contributors

Across the entire IPFS GitHub organization, the following people have committed code, created issues, or made a comment on GitHub between February 29th (noon, GMT) and March 7th. We're autogenerating this list using [this tool](https://github.com/ipfs/weekly/blob/master/tools/get_commits.py) and [this other tool](https://github.com/richardlitt/name-your-contributors), so please let us know if your name isn't here.

- [@adrian-bl](https://github.com/adrian-bl) (Adrian Ulrich)
- [@amstocker](https://github.com/amstocker) (Andrew Stocker)
- [@anarcat](https://github.com/anarcat) (anarcat)
- [@Beligertint](https://github.com/Beligertint)
- [@bergie](https://github.com/bergie) (Henri Bergius)
- [@cevin](https://github.com/cevin) (cevin)
- [@chriscool](https://github.com/chriscool) (Christian Couder)
- [@cinderblock](https://github.com/cinderblock) (Cameron Tacklind)
- [@clkao](https://github.com/clkao) (Chia-liang Kao)
- [@daveajones](https://github.com/daveajones) (Dave Jones)
- [@davidar](https://github.com/davidar) (David A Roberts)
- [@diasdavid](https://github.com/diasdavid) (David Dias)
- [@dignifiedquire](https://github.com/dignifiedquire) (Friedel Ziegelmayer)
- [@greenkeeperio-bot](https://github.com/greenkeeperio-bot) (Greenkeeper)
- [@hjoest](https://github.com/hjoest) (Holger Joest)
- [@jbenet](https://github.com/jbenet) (Juan Benet)
- [@jedahan](https://github.com/jedahan) (Jonathan Dahan)
- [@knocte](https://github.com/knocte) (Andres G. Aragoneses)
- [@Kolomona](https://github.com/Kolomona) (Kolomona Myer)
- [@Kubuxu](https://github.com/Kubuxu) (Jakub Sztandera)
- [@lgierth](https://github.com/lgierth) (Lars Gierth)
- [@mappum](https://github.com/mappum) (ᴍᴀᴛᴛ ʙᴇʟʟ)
- [@mattseh](https://github.com/mattseh)
- [@MichaelMure](https://github.com/MichaelMure) (Michael Muré)
- [@micxjo](https://github.com/micxjo) (Micxjo Funkcio)
- [@mildred](https://github.com/mildred) (Mildred Ki'Lya)
- [@moritz121](https://github.com/moritz121)
- [@NeoTeo](https://github.com/NeoTeo) (Teo Sartori)
- [@Neurone](https://github.com/Neurone) (Giuseppe Bertone)
- [@nginnever](https://github.com/nginnever) (Nathan Ginnever)
- [@noffle](https://github.com/noffle) (Stephen Whitmore)
- [@peteygao](https://github.com/peteygao) (Peter Gao)
- [@randomshinichi](https://github.com/randomshinichi)
- [@RichardLitt](https://github.com/RichardLitt) (Richard Littauer)
- [@richardschneider](https://github.com/richardschneider) (Richard Schneider)
- [@sivachandran](https://github.com/sivachandran) (Sivachandran)
- [@suisha](https://github.com/suisha) (David Mai)
- [@thelinuxkid](https://github.com/thelinuxkid) (Andres Buritica)
- [@tinybike](https://github.com/tinybike) (Jack Peterson)
- [@whyrusleeping](https://github.com/whyrusleeping) (Jeromy Johnson)
- [@xicombd](https://github.com/xicombd) (Francisco Baio Dias)
- [@yangwao](https://github.com/yangwao) (Matej Nemček)
- [@yncyrydybyl](https://github.com/yncyrydybyl) (Yan Minagawa)
- [@zignig](https://github.com/zignig) (Simon Kirkby)
- [@Zogg](https://github.com/Zogg)

This newsletter is also a community effort. If you have cool things to share for the next weekly, drop a comment about it in [the weekly repo](https://github.com/ipfs/weekly)! The more people mention items they want to see in the weekly there, the easier it is to make this and send it out.

Thanks, and see you next week!

- Richard Littauer and Andrew Chin

_Submit feedback about this issue [here](https://github.com/ipfs/weekly/issues/24), or send us [feedback about the IPFS Weekly in general](https://github.com/ipfs/weekly/issues/8)._

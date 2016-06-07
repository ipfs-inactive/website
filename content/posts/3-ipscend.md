date: 2015-11-27
title: ipscend - Publish static web content to IPFS
slug: 3-ipscend
author: David Dias

[![]({attach}/images/ipscend.png)](https://github.com/diasdavid/ipscend)

[`ipscend`](https://github.com/diasdavid/ipscend) is a new tool to help developers publish their static web content to IPFS and share it easily, while keeping history and more. It is heavily inspired by previous static web content publishing tools, like GitHub Pages and surge.

## Features

Currently, `ipscend` offers a set of features, accessible through a CLI, and installable through npm (`npm i -g ipscend`), which enable a simple workflow for working in your Web page/app and publishing it to the IPFS network.

- `ipscend browse` - Opens the last published version of your application in the browser.
- `ipscend init` - Initializes your project. Asks for the folder where the web application will be available and stores an `ipscend.json` object in your current path to store all the metadata it generates, such as published versions and taken screenshots.
- `ipscend preview` - Serves your application on a local static file server, so that you can try it out before you feel ready to publish it.
- `ipscend publish` - Publishes the current state of your application to IPFS and stores a reference to it.
- `ipscend versions` - Prints out the published versions for the app and its respective timestamp.
- `ipscend screenshot` - Opens a screenshot preview of all the published versions of your app. In order to generate the screenshots, you must first run `ipscend screenshot --gen`.

![]({attach}/images/ipscend-screenshot.gif)

An `ipscend.json` object for a project with some published versions will look like:

```bash
$ cat ipscend.json
{
  "versions": [
    {
      "hash": "QmQhNMwk7fThpwRNUR3bStb1eA7aeFJaApZjDaQCnykowL",
      "timestamp": "2015-11-14T14:50:10.998Z",
      "snapshot": "QmNMqiKZG7gCsnaQFTqG3AUeVhA1n8byy974Yqn3qRGZcJ"
    },
    {
      "hash": "QmSAmgQPCWjbrpbYHZQ2rVkH7a9vavubG1Jzv5CjDWrUmt",
      "timestamp": "2015-11-14T14:51:00.860Z",
      "snapshot": "QmcCNrn72FuHWkXtpJuUYfbH87d61qa6PSagUbLiK6VfLJ"
    },
    {
      "hash": "QmVNgdUoBQHiBhSeDe2z8LttJaDZq7JZi17sR1SPnJmjMh",
      "timestamp": "2015-11-14T14:51:24.379Z",
      "snapshot": "QmP5NuGdozeWaZqEdY1zBpcupB6qQ66AWReqm4L2vJzt73"
    }
  ],
  "path": "src/public"
}
```

## Workflow

In order to get started, all you need to do is initiate your ipscend in your web page/app project:

```bash
$ ipscend init
This utility will walk you through creating a ipscend.json file.
Path of your Web Application (project)? (public) src/public
$ cat ipscend.json
{
  "versions": [],
  "path": "src/public"
}
```

Once you are ready to publish, run the `ipscend publish` command:

```bash
$ ipscend publish
{ hash: 'QmVNgdUoBQHiBhSeDe2z8LttJaDZq7JZi17sR1SPnJmjMh',
  timestamp: Fri Nov 27 2015 10:23:37 GMT+0000 (WET) }
published src/public QmVNgdUoBQHiBhSeDe2z8LttJaDZq7JZi17sR1SPnJmjMh
$ cat ipscend.json
{
  "versions": [
    {
      "hash": "QmVNgdUoBQHiBhSeDe2z8LttJaDZq7JZi17sR1SPnJmjMh",
      "timestamp": "2015-11-27T16:23:37.971Z"
    }
  ],
  "path": "src/public"
```

Grab that hash and share it with your friends, by sending them a link to ipfs.io, appending "/ipfs/Hash" (e.g.  https:/ipfs.io/ipfs/ QmVNgdUoBQHiBhSeDe2z8LttJaDZq7JZi17sR1SPnJmjMh).

If you want to use your awesome.domain.com to load your page from IPFS, you can check how to do it now at https://github.com/diasdavid/ipscend#use-ipfs-to-host-your-webpage-using-a-standard-domain-includes-cool-dns-trick.

## Awesome (FUTURE)!

`ipscend` is still in its humble beginnings. Some of the ideas and plans to build in the future include being able to:

- Extract the version from the VCS itself (https://github.com/ipfs/notes/issues/23), so that every commit can be a different working version, allowing you to test every commit in your CI.
- Roll back history, following the 'time machine' analogy.
- Update your DNS provider automatically, avoiding having to use an external tool like [`dnslink-deploy`](https://github.com/ipfs/dnslink-deploy).
- Enable reviewers to write notes.
- Take screenshots in every browser version, so that we can use the timeline to see if there was any regression at a point in time, which might happen in a specific browser.
- moaaaar :D If you have ideas or want to contribute, ipscend is fully MIT Licensed, so feel free to open a issue or PR on https://github.com/diasdavid/ipscend.

A big thank you to [Andrés Gutgon](https://github.com/andresgutgon) who made the screenshot preview look [really good](https://github.com/diasdavid/ipscend-screenshot-visualizer/pull/1)

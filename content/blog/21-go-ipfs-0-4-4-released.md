---
slug: 21-go-ipfs-0-4-4-released
date: 2016-10-11
title: go-ipfs 0.4.4 has been released
author: whyrusleeping & Lars Gierth
---

[go-ipfs 0.4.4](https://dist.ipfs.io/#go-ipfs) has been released today,
including an important hotfix for a bug we discovered in how *pinning* works.
If you had a large number of pins, new pins would overwrite existing pins.
Apart from the hotfix, this release is equal to the previous release 0.4.3.

- [How pinning works](#how-pinning-works)
- [The bug](#the-bug)
- [Find out if you're affected](#find-out-if-you-re-affected)
- [How to upgrade](#how-to-upgrade)

## How pinning works

Pinning is a means of persisting data in your IPFS repo after adding or fetching it.
It'll prevent objects from getting removed by garbage collection or other methods
of cleaning up the IPFS repo. There are three ways an object can be pinned:

- **Direct:** Only this object is pinned. Its children aren't pinned.
- **Recursive:** This object and all its children are pinned.
  If the recursive pin is removed, the children aren't pinned any longer either.
- **Indirect:** This object is pinned because one of its parents is pinned.
  If the pins of all parents are removed, this object isn't pinned any longer.

The `ipfs add` command adds a *recursive pin* for the added file by default.
With `--pin=false`, it skips pinning. Similarly, the default pin type for
`ipfs pin add` is *recursive*. With `--recursive=false` this changes to *direct*.

For more information on how pinning works, check out `ipfs pin --help` and `ipfs add --help`.

## The bug

Direct and recursive pins are stored in separate so-called *pinsets*.
Indirect pins aren't stored, since they're derived from recursive pins.

Once you had more than 8192 pins, recursive or direct, an
issue with the recursive hash trie implementation caused hash table buckets to
be overwritten, resulting in only 256 pins remaining in the pinset. After that,
the bug wouldn't be triggered again until the number of pins exceeded 8192 again.
The 256 pins that remained would be random.

We fixed this by instead making sure that each item in a pinset be put into its
own bucket, and by modulo'ing hash output from this process into the final key
space. The details for this can be seen
[in this pull request](https://github.com/ipfs/go-ipfs/pull/3273). We added a
stress test to make sure that this doesn't happen in the future, and will
redouble our efforts to make sure that our test suites are more robust to ensure
that these kinds of problems do not happen in the future.

For now, don't run `ipfs repo gc` on sensitive data that is not otherwise backed up,
as IPFS is still not 1.0 and our development may still find problems.

[@kyledrake](https://github.com/kyledrake) of [neocities.org](https://neocities.org)
pointed out this bug to us; thank you, Kyle!

## Find out if you're affected

If you think you have experienced this issue and have *not* run a garbage
collection, you can still find the 'lost' pins. We have written a new tool
called 'ipfs-see-all' that allows you to try and recover any old pins that are
still in your local repo. The tool is available on [our distributions
page](https://dist.ipfs.io), or, if you prefer building from source, head over
to [the GitHub repo](https://github.com/whyrusleeping/ipfs-see-all). Once you
have the tool, invoke it as `ipfs-see-all lost-pins` and it will scan for and
print out every pin object that is not actually pinned in your pinset. Note
that this may contain anything you have manually unpinned.

## How to upgrade

Depending on how you initially installed IPFS, there are several ways to
upgrade. If you installed IPFS with a pre-built binary, you can head over
to [dist.ipfs.io](https://dist.ipfs.io/#go-ipfs) and grab the latest version
from there. Or alternatively, from the same page you can grab the `ipfs-update`
binary, and use it to perform the upgrade for you. If you installed from
source, you can simply run `git checkout v0.4.4`, then run `make install`.

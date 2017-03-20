---
slug: 1-run-ipfs-on-docker
date: 2015-07-11
title: Run IPFS in a Docker container
author: Kyle Drake
---

In recent years, Docker and a few other projects have redefined how we run server applications. In the future, we might be running containerized apps in our personal devices. At its core, this fast-paced improvement is a combination of good interfaces to standardize how to do things, and great tooling to make using containers easy.

The IPFS Project has many things planned for the world of containers. The most interesting is using IPFS to distribute containers hyper efficiently across data-centers and the internet. We will be discussing many of these things in upcoming posts, but first things first. This post is a quick guide for running an IPFS node directly within Docker.

The IPFS team has provided an [IPFS Docker image](https://registry.hub.docker.com/u/jbenet/go-ipfs/), which is syncronized with the latest commits to [go-ipfs](https://github.com/ipfs/go-ipfs). It only takes a few commands to try it out!

```sh
> mkdir /tmp/ipfs-docker-staging
> mkdir /tmp/ipfs-docker-data
> docker run -d --name ipfs-node \
  -v /tmp/ipfs-docker-staging:/export -v /tmp/ipfs-docker-data:/data/ipfs \
  -p 8080:8080 -p 4001:4001 -p 127.0.0.1:5001:5001 \
  jbenet/go-ipfs:latest
faa8f714398c7a1a5a29adc2aed01857b41444ed53ec11863a3136ad37c8064c
```

Port `8080` is the HTTP Gateway, which allows you to query ipfs data with your browser ([see this example](http://gateway.ipfs.io/ipfs/QmVyS3iAy7mvDA2HqQWm2aqZDcGDH3bCRLFkEutfBWNBqN/)), port `4001` is what swarm port IPFS uses to communicate with other nodes, and port `5001` is used for the local API. We bind `5001` only on `127.0.0.1` because it should not be exposed to the outside world. The `faa8f7143...` is the docker container id.

We've mounted a data and staging volume. The `data` volume is used to store the IPFS local repo (config and database), and `staging` is a directory you can use for staging files for command line usage (such as `ipfs add`). If you're only using the API, you can omit the staging directory volume. And of course, feel free to put those directories somewhere other than `/tmp`.

Now what? Your node is running. You can issue commands directly to the containerized ipfs with `docker exec <container-id> <ipfs-cmd>`. For example, you can try `ipfs swarm peers` to see who you are connected to:

```sh
# let's set $cid = <container-id> for easy access
> cid=faa8f714398c7a1a5a29adc2aed01857b41444ed53ec11863a3136ad37c8064c
> docker exec $cid ipfs swarm peers
/ip4/104.236.179.241/tcp/4001/ipfs/QmSoLpPVmHKQ4XTPdz8tjDFgdeRFkpV8JgYq8JVJ69RrZm
/ip4/128.199.219.111/tcp/4001/ipfs/QmSoLSafTMBsPKadTEgaXctDQVcqN88CNLHXMkTNwMKPnu
/ip4/162.243.248.213/tcp/4001/ipfs/QmSoLueR4xBeUbY9WZ9xGUUxunbKWcrNFTDAadQJmocnWm
/ip4/178.62.61.185/tcp/4001/ipfs/QmSoLMeWqB7YGVLJN3pNLQpmmEk35v6wYtsMGLzSr5QBU3
```

And of course, you can `add` or `cat` content as usual:

```sh
> echo "hello from dockerized ipfs" >/tmp/ipfs-docker-staging/hello
> docker exec $cid ipfs add /export/hello
added QmcDge1SrsTBU8b9PBGTGYguNRnm84Kvg8axfGURxqZpR1 /export/hello
> docker exec $cid ipfs cat /ipfs/QmSvCqazpuuib8qyRyddyFemLc2qmRukLLy8YfkdRPEXoQ
hello there!
```

Your dockerized IPFS is now also running a Gateway at `http://<ip-address-of-the-computer>:8080`. You can try it out with `curl`, or with your browser:

```sh
> curl http://localhost:8080/ipfs/QmcDge1SrsTBU8b9PBGTGYguNRnm84Kvg8axfGURxqZpR1
hello from dockerized ipfs
```

[Kubernetes 1.0](http://kuberneteslaunch.com) comes out next week, so after that, we'll try using it to build a cluster of IPFS nodes that can store any kind of data and be able to retreive it from any other IPFS node. Not just with IPFS nodes in your cluster, but with everyone!

<iframe src="../../images/blog/ascii" style="width: 737px; height: 509px; overflow: hidden;" scrolling="no"></iframe>
<p class="powered">asciicast powered by <a href="https://asciinema.org/" target="_top">asciinema</a></p>

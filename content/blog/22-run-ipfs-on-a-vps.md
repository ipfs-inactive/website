---
slug: 22-run-ipfs-on-a-vps
date: 2016-11-14
title: Run IPFS latest on a VPS
author: Richard Littauer
---

The best way to provide content using [IPFS](https://ipfs.io) is to run your own IPFS node. You can do this by running an IPFS node on your personal computer, but that will only work as long as your computer is running. For users running mostly from laptops or with bandwidth constraints, it is useful to run IPFS nodes in a datacenter, and pinning the content there too. This ensures your content is replicated, online, and available to other nodes on the network.

VPS instances provided by [Digital Ocean](https://www.digitalocean.com/), [Ramnode](http://ramnode.com/), [Linode](https://www.linode.com/), [Vultr](https://www.vultr.com/) and many other providers allow you to quickly setup your own Linux server with the reliability of a managed dedicated server without the full cost. This is a quick guide to setting up your own dedicated IPFS node on a VPS. We'll be using [Ubuntu](http://www.ubuntu.com/) 14.04LTS 64-bit for the example.

## Installing IPFS

First, let's get the packages we'll need to install IPFS:

    ```sh
    > apt-get update
    > apt-get install tar wget
    ````

Now you can download the latest build of IPFS from the [install page](https://ipfs.io/docs/install/). We'll be using Linux x86_64:

    ```sh
    > wget https://dist.ipfs.io/go-ipfs/v0.4.4/go-ipfs_v0.4.4_linux-amd64.tar.gz
    > tar xfv go-ipfs_v0.4.4_linux-amd64.tar.gz
    # Move it into your bin. This requires root permissions.
    > sudo cp ipfs/ipfs /usr/local/bin/
    ```

It's usually not a good idea to run a public-facing service as root. So we'll create a user account to run IPFS in and switch to it:

    ```sh
    > adduser ipfs
    > su ipfs
    ```

## Adding content to IPFS

<div id="player-container"></div>
<script>
  asciinema.player.js.CreatePlayer('player-container', 'asciicast-85339.json', { width: 88, height: 50 });
</script>

First let's initialize the IPFS config:

    ```sh
    > ipfs init
    initializing ipfs node at ~/.ipfs
    generating 2048-bit RSA keypair...done
    peer identity: QmSyPpT59gXxtnLRZePQBthJd934iy17bmQesgHUAw25pB
    to get started, enter:

      ipfs cat /ipfs/QmYwAPJzv5CZsnA625s3Xf2nemtYgPpHdWEz79ojWnPbdG/readme
    ```

Note that your peer ID will be different, and that your node init file will be in your default user directory.

IPFS works by actively seeking nearby nodes to connect to, which is a good thing for performance and availability, particularly in home and office networks. This causes addresses in the networks to be dialed that may not be there. Unfortunately, some VPS providers incorrectly classify this as suspicious activity, and some even have blocked nodes for doing so. To avoid this, let's add two things to the config file:

    ```sh
    # 1. disable mDNS discovery
    ipfs config --json Discovery.MDNS.Enabled false

    # 2. filter out local network addresses
    ipfs config --json Swarm.AddrFilters '[
      "/ip4/10.0.0.0/ipcidr/8",
      "/ip4/100.64.0.0/ipcidr/10",
      "/ip4/169.254.0.0/ipcidr/16",
      "/ip4/172.16.0.0/ipcidr/12",
      "/ip4/192.0.0.0/ipcidr/24",
      "/ip4/192.0.0.0/ipcidr/29",
      "/ip4/192.0.0.8/ipcidr/32",
      "/ip4/192.0.0.170/ipcidr/32",
      "/ip4/192.0.0.171/ipcidr/32",
      "/ip4/192.0.2.0/ipcidr/24",
      "/ip4/192.168.0.0/ipcidr/16",
      "/ip4/198.18.0.0/ipcidr/15",
      "/ip4/198.51.100.0/ipcidr/24",
      "/ip4/203.0.113.0/ipcidr/24",
      "/ip4/240.0.0.0/ipcidr/4"
    ]'
    ```

Now you're ready to start IPFS!

```sh
> ipfs daemon &
[1] 16252
Initializing daemon...
Adjusting current ulimit to 1024.
> Swarm listening on /ip4/127.0.0.1/tcp/4001
Swarm listening on /ip4/172.20.20.20/tcp/4001
Swarm listening on /ip4/73.114.34.208/tcp/37131
Swarm listening on /ip6/::1/tcp/4001
API server listening on /ip4/127.0.0.1/tcp/5001
Gateway (readonly) server listening on /ip4/127.0.0.1/tcp/8080
Daemon is ready
```

This will run your daemon in the background, so you won't need to switch to a new window. You can make sure it is running using the `jobs` command.

Give it a minute to connect to some other IPFS nodes, and then test that it's working by running a quick test:

```sh
> echo "hello world" | ipfs add
added QmT78zSuBmuS4z925WZfrqQ1qHaJ56DQaTfyMUF7F8ff5o QmT78zSuBmuS4z925WZfrqQ1qHaJ56DQaTfyMUF7F8ff5o
```

Now run this command to make sure that your IPFS node had this content locally:

```sh
> ipfs refs local | grep QmT78zSuBmuS4z925WZfrqQ1qHaJ56DQaTfyMUF7F8ff5o
QmT78zSuBmuS4z925WZfrqQ1qHaJ56DQaTfyMUF7F8ff5o
```

To check if your IPFS node has this content pinned, you can run `ipfs pin ls`:

```
> ipfs pin ls | grep QmT78zSuBmuS4z925WZfrqQ1qHaJ56DQaTfyMUF7F8ff5o
QmT78zSuBmuS4z925WZfrqQ1qHaJ56DQaTfyMUF7F8ff5o recursive
```

In this example, the hash is returned because `ipfs add` pins a file passed to it by default. If the hash is not returned, then the content will be removed at the next garbage collection. To stop this from happening, let's pin it:

```sh
> ipfs pin ls | grep QmT78zSuBmuS4z925WZfrqQ1qHaJ56DQaTfyMUF7F8ff5o
pinned QmT78zSuBmuS4z925WZfrqQ1qHaJ56DQaTfyMUF7F8ff5o recursively
```

If you want to have IPFS boot at startup, add an entry to `/etc/rc.local`. You can run this command as root to quickly add it:

```sh
sed -i -e '$i /bin/su ipfs -c "/usr/local/bin/ipfs daemon &"\n' /etc/rc.local
```

We also have [init scripts](https://github.com/ipfs/examples/tree/master/examples/init) to help you launch IPFS on start.

This process will simplify in the future when IPFS starts being packaged with distributions (`apt-get install ipfs`). But until then, this will get you started with IPFS experimentation on your own server. Run `ipfs help` to get a list of things you can do, and let us know if you run into any issues.

---
section: Docs
title: Commands | IPFS Docs
pagetype: subdoc
url: docs/commands
save_as: docs/commands/index.html
---

# ipfs command reference

generated on 2017-04-01 10:53:32.701039

- [ipfs](#ipfs)
- [ipfs add](#ipfs-add)
- [ipfs bitswap](#ipfs-bitswap)
- [ipfs bitswap ledger](#ipfs-bitswap-ledger)
- [ipfs bitswap stat](#ipfs-bitswap-stat)
- [ipfs bitswap unwant](#ipfs-bitswap-unwant)
- [ipfs bitswap wantlist](#ipfs-bitswap-wantlist)
- [ipfs block](#ipfs-block)
- [ipfs block get](#ipfs-block-get)
- [ipfs block put](#ipfs-block-put)
- [ipfs block rm](#ipfs-block-rm)
- [ipfs block stat](#ipfs-block-stat)
- [ipfs bootstrap](#ipfs-bootstrap)
- [ipfs bootstrap add](#ipfs-bootstrap-add)
- [ipfs bootstrap add default](#ipfs-bootstrap-add-default)
- [ipfs bootstrap list](#ipfs-bootstrap-list)
- [ipfs bootstrap rm](#ipfs-bootstrap-rm)
- [ipfs bootstrap rm all](#ipfs-bootstrap-rm-all)
- [ipfs cat](#ipfs-cat)
- [ipfs commands](#ipfs-commands)
- [ipfs config](#ipfs-config)
- [ipfs config edit](#ipfs-config-edit)
- [ipfs config replace](#ipfs-config-replace)
- [ipfs config show](#ipfs-config-show)
- [ipfs daemon](#ipfs-daemon)
- [ipfs dag](#ipfs-dag)
- [ipfs dag get](#ipfs-dag-get)
- [ipfs dag put](#ipfs-dag-put)
- [ipfs dht](#ipfs-dht)
- [ipfs dht findpeer](#ipfs-dht-findpeer)
- [ipfs dht findprovs](#ipfs-dht-findprovs)
- [ipfs dht get](#ipfs-dht-get)
- [ipfs dht provide](#ipfs-dht-provide)
- [ipfs dht put](#ipfs-dht-put)
- [ipfs dht query](#ipfs-dht-query)
- [ipfs diag](#ipfs-diag)
- [ipfs diag cmds](#ipfs-diag-cmds)
- [ipfs diag cmds clear](#ipfs-diag-cmds-clear)
- [ipfs diag cmds set-time](#ipfs-diag-cmds-set-time)
- [ipfs diag sys](#ipfs-diag-sys)
- [ipfs dns](#ipfs-dns)
- [ipfs file](#ipfs-file)
- [ipfs file ls](#ipfs-file-ls)
- [ipfs files](#ipfs-files)
- [ipfs files cp](#ipfs-files-cp)
- [ipfs files flush](#ipfs-files-flush)
- [ipfs files ls](#ipfs-files-ls)
- [ipfs files mkdir](#ipfs-files-mkdir)
- [ipfs files mv](#ipfs-files-mv)
- [ipfs files read](#ipfs-files-read)
- [ipfs files rm](#ipfs-files-rm)
- [ipfs files stat](#ipfs-files-stat)
- [ipfs files write](#ipfs-files-write)
- [ipfs filestore](#ipfs-filestore)
- [ipfs filestore dups](#ipfs-filestore-dups)
- [ipfs filestore ls](#ipfs-filestore-ls)
- [ipfs filestore verify](#ipfs-filestore-verify)
- [ipfs get](#ipfs-get)
- [ipfs id](#ipfs-id)
- [ipfs init](#ipfs-init)
- [ipfs key](#ipfs-key)
- [ipfs key gen](#ipfs-key-gen)
- [ipfs key list](#ipfs-key-list)
- [ipfs log](#ipfs-log)
- [ipfs log level](#ipfs-log-level)
- [ipfs log ls](#ipfs-log-ls)
- [ipfs log tail](#ipfs-log-tail)
- [ipfs ls](#ipfs-ls)
- [ipfs mount](#ipfs-mount)
- [ipfs name](#ipfs-name)
- [ipfs name publish](#ipfs-name-publish)
- [ipfs name resolve](#ipfs-name-resolve)
- [ipfs object](#ipfs-object)
- [ipfs object data](#ipfs-object-data)
- [ipfs object diff](#ipfs-object-diff)
- [ipfs object get](#ipfs-object-get)
- [ipfs object links](#ipfs-object-links)
- [ipfs object new](#ipfs-object-new)
- [ipfs object patch](#ipfs-object-patch)
- [ipfs object patch add-link](#ipfs-object-patch-add-link)
- [ipfs object patch append-data](#ipfs-object-patch-append-data)
- [ipfs object patch rm-link](#ipfs-object-patch-rm-link)
- [ipfs object patch set-data](#ipfs-object-patch-set-data)
- [ipfs object put](#ipfs-object-put)
- [ipfs object stat](#ipfs-object-stat)
- [ipfs pin](#ipfs-pin)
- [ipfs pin add](#ipfs-pin-add)
- [ipfs pin ls](#ipfs-pin-ls)
- [ipfs pin rm](#ipfs-pin-rm)
- [ipfs ping](#ipfs-ping)
- [ipfs pubsub](#ipfs-pubsub)
- [ipfs pubsub ls](#ipfs-pubsub-ls)
- [ipfs pubsub peers](#ipfs-pubsub-peers)
- [ipfs pubsub pub](#ipfs-pubsub-pub)
- [ipfs pubsub sub](#ipfs-pubsub-sub)
- [ipfs refs](#ipfs-refs)
- [ipfs refs local](#ipfs-refs-local)
- [ipfs repo](#ipfs-repo)
- [ipfs repo fsck](#ipfs-repo-fsck)
- [ipfs repo gc](#ipfs-repo-gc)
- [ipfs repo stat](#ipfs-repo-stat)
- [ipfs repo verify](#ipfs-repo-verify)
- [ipfs repo version](#ipfs-repo-version)
- [ipfs resolve](#ipfs-resolve)
- [ipfs stats](#ipfs-stats)
- [ipfs stats bitswap](#ipfs-stats-bitswap)
- [ipfs stats bw](#ipfs-stats-bw)
- [ipfs stats repo](#ipfs-stats-repo)
- [ipfs swarm](#ipfs-swarm)
- [ipfs swarm addrs](#ipfs-swarm-addrs)
- [ipfs swarm addrs local](#ipfs-swarm-addrs-local)
- [ipfs swarm connect](#ipfs-swarm-connect)
- [ipfs swarm disconnect](#ipfs-swarm-disconnect)
- [ipfs swarm filters](#ipfs-swarm-filters)
- [ipfs swarm filters add](#ipfs-swarm-filters-add)
- [ipfs swarm filters rm](#ipfs-swarm-filters-rm)
- [ipfs swarm peers](#ipfs-swarm-peers)
- [ipfs tar](#ipfs-tar)
- [ipfs tar add](#ipfs-tar-add)
- [ipfs tar cat](#ipfs-tar-cat)
- [ipfs tour](#ipfs-tour)
- [ipfs tour list](#ipfs-tour-list)
- [ipfs tour next](#ipfs-tour-next)
- [ipfs tour restart](#ipfs-tour-restart)
- [ipfs update](#ipfs-update)
- [ipfs version](#ipfs-version)

## ipfs

```
USAGE
  ipfs - Global p2p merkle-dag filesystem.

SYNOPSIS
  ipfs [--config=<config> | -c] [--debug=<debug> | -D] [--help=<help>] [-h=<h>] [--local=<local> | -L] [--api=<api>] <command> ...

OPTIONS

  -c,   --config string - Path to the configuration file to use.
  -D,   --debug  bool   - Operate in debug mode. Default: false.
  --help         bool   - Show the full command help text. Default: false.
  -h             bool   - Show a short version of the command help text. Default: false.
  -L,   --local  bool   - Run the command locally, instead of using the daemon. Default: false.
  --api          string - Use a specific API instance (defaults to /ip4/127.0.0.1/tcp/5001).

SUBCOMMANDS
  BASIC COMMANDS
    init          Initialize ipfs local configuration
    add <path>    Add a file to IPFS
    cat <ref>     Show IPFS object data
    get <ref>     Download IPFS objects
    ls <ref>      List links from an object
    refs <ref>    List hashes of links from an object

  DATA STRUCTURE COMMANDS
    block         Interact with raw blocks in the datastore
    object        Interact with raw dag nodes
    files         Interact with objects as if they were a unix filesystem
    dag           Interact with IPLD documents (experimental)

  ADVANCED COMMANDS
    daemon        Start a long-running daemon process
    mount         Mount an IPFS read-only mountpoint
    resolve       Resolve any type of name
    name          Publish and resolve IPNS names
    key           Create and list IPNS name keypairs
    dns           Resolve DNS links
    pin           Pin objects to local storage
    repo          Manipulate the IPFS repository
    stats         Various operational stats
    filestore     Manage the filestore (experimental)

  NETWORK COMMANDS
    id            Show info about IPFS peers
    bootstrap     Add or remove bootstrap peers
    swarm         Manage connections to the p2p network
    dht           Query the DHT for values or peers
    ping          Measure the latency of a connection
    diag          Print diagnostics

  TOOL COMMANDS
    config        Manage configuration
    version       Show ipfs version information
    update        Download and apply go-ipfs updates
    commands      List all available commands

  Use 'ipfs <command> --help' to learn more about each command.

  ipfs uses a repository in the local file system. By default, the repo is located
  at ~/.ipfs. To change the repo location, set the $IPFS_PATH environment variable:

    export IPFS_PATH=/path/to/ipfsrepo

  EXIT STATUS

  The CLI will exit with one of the following values:

  0     Successful execution.
  1     Failed executions.

  Use 'ipfs <subcmd> --help' for more information about each command.
```

## ipfs add

```
USAGE
  ipfs add <path>... - Add a file or directory to ipfs.

SYNOPSIS
  ipfs add [--recursive | -r] [--quiet | -q] [--quieter | -Q] [--silent] [--progress | -p] [--trickle | -t] [--only-hash | -n] [--wrap-with-directory | -w] [--hidden | -H] [--chunker=<chunker> | -s] [--pin=false] [--raw-leaves] [--nocopy] [--fscache] [--] <path>...

ARGUMENTS

  <path>... - The path to a file to be added to ipfs.

OPTIONS

  -r,         --recursive           bool   - Add directory paths recursively. Default: false.
  -q,         --quiet               bool   - Write minimal output.
  -Q,         --quieter             bool   - Write only final hash.
  --silent                          bool   - Write no output.
  -p,         --progress            bool   - Stream progress data.
  -t,         --trickle             bool   - Use trickle-dag format for dag generation.
  -n,         --only-hash           bool   - Only chunk and hash - do not write to disk.
  -w,         --wrap-with-directory bool   - Wrap files with a directory object.
  -H,         --hidden              bool   - Include files that are hidden. Only takes effect on recursive add.
  -s,         --chunker             string - Chunking algorithm to use.
  --pin                             bool   - Pin this object when adding. Default: true.
  --raw-leaves                      bool   - Use raw blocks for leaf nodes. (experimental).
  --nocopy                          bool   - Add the file using filestore. (experimental).
  --fscache                         bool   - Check the filestore for pre-existing blocks. (experimental).

DESCRIPTION

  Adds contents of <path> to ipfs. Use -r to add directories.
  Note that directories are added recursively, to form the ipfs
  MerkleDAG.

  The wrap option, '-w', wraps the file (or files, if using the
  recursive option) in a directory. This directory contains only
  the files which have been added, and means that the file retains
  its filename. For example:

    > ipfs add example.jpg
    added QmbFMke1KXqnYyBBWxB74N4c5SBnJMVAiMNRcGu6x1AwQH example.jpg
    > ipfs add example.jpg -w
    added QmbFMke1KXqnYyBBWxB74N4c5SBnJMVAiMNRcGu6x1AwQH example.jpg
    added QmaG4FuMqEBnQNn3C8XJ5bpW8kLs7zq2ZXgHptJHbKDDVx

  You can now refer to the added file in a gateway, like so:

    /ipfs/QmaG4FuMqEBnQNn3C8XJ5bpW8kLs7zq2ZXgHptJHbKDDVx/example.jpg
```

## ipfs bitswap

```
USAGE
  ipfs bitswap - Interact with the bitswap agent.

SYNOPSIS
  ipfs bitswap

SUBCOMMANDS
  ipfs bitswap ledger <peer>   - Show the current ledger for a peer.
  ipfs bitswap stat            - Show some diagnostic information on the bitswap agent.
  ipfs bitswap unwant <key>... - Remove a given block from your wantlist.
  ipfs bitswap wantlist        - Show blocks currently on the wantlist.

  Use 'ipfs bitswap <subcmd> --help' for more information about each command.
```

## ipfs bitswap ledger

```
USAGE
  ipfs bitswap ledger <peer> - Show the current ledger for a peer.

SYNOPSIS
  ipfs bitswap ledger [--] <peer>

ARGUMENTS

  <peer> - The PeerID (B58) of the ledger to inspect.

DESCRIPTION

  The Bitswap decision engine tracks the number of bytes exchanged between IPFS
  nodes, and stores this information as a collection of ledgers. This command
  prints the ledger associated with a given peer.
```

## ipfs bitswap stat

```
USAGE
  ipfs bitswap stat - Show some diagnostic information on the bitswap agent.

SYNOPSIS
  ipfs bitswap stat
```

## ipfs bitswap unwant

```
USAGE
  ipfs bitswap unwant <key>... - Remove a given block from your wantlist.

SYNOPSIS
  ipfs bitswap unwant [--] <key>...

ARGUMENTS

  <key>... - Key(s) to remove from your wantlist.
```

## ipfs bitswap wantlist

```
USAGE
  ipfs bitswap wantlist - Show blocks currently on the wantlist.

SYNOPSIS
  ipfs bitswap wantlist [--peer=<peer> | -p]

OPTIONS

  -p, --peer string - Specify which peer to show wantlist for. Default: self.

DESCRIPTION

  Print out all blocks currently on the bitswap wantlist for the local peer.
```

## ipfs block

```
USAGE
  ipfs block - Interact with raw IPFS blocks.

SYNOPSIS
  ipfs block

DESCRIPTION

  'ipfs block' is a plumbing command used to manipulate raw IPFS blocks.
  Reads from stdin or writes to stdout, and <key> is a base58 encoded
  multihash.

SUBCOMMANDS
  ipfs block get <key>    - Get a raw IPFS block.
  ipfs block put <data>   - Store input as an IPFS block.
  ipfs block rm <hash>... - Remove IPFS block(s).
  ipfs block stat <key>   - Print information of a raw IPFS block.

  Use 'ipfs block <subcmd> --help' for more information about each command.
```

## ipfs block get

```
USAGE
  ipfs block get <key> - Get a raw IPFS block.

SYNOPSIS
  ipfs block get [--] <key>

ARGUMENTS

  <key> - The base58 multihash of an existing block to get.

DESCRIPTION

  'ipfs block get' is a plumbing command for retrieving raw IPFS blocks.
  It outputs to stdout, and <key> is a base58 encoded multihash.
```

## ipfs block put

```
USAGE
  ipfs block put <data> - Store input as an IPFS block.

SYNOPSIS
  ipfs block put [--format=<format> | -f] [--mhtype=<mhtype>] [--mhlen=<mhlen>] [--] <data>

ARGUMENTS

  <data> - The data to be stored as an IPFS block.

OPTIONS

  -f,     --format string - cid format for blocks to be created with. Default: v0.
  --mhtype         string - multihash hash function. Default: sha2-256.
  --mhlen          int    - multihash hash length. Default: -1.

DESCRIPTION

  'ipfs block put' is a plumbing command for storing raw IPFS blocks.
  It reads from stdin, and <key> is a base58 encoded multihash.
```

## ipfs block rm

```
USAGE
  ipfs block rm <hash>... - Remove IPFS block(s).

SYNOPSIS
  ipfs block rm [--force | -f] [--quiet | -q] [--] <hash>...

ARGUMENTS

  <hash>... - Bash58 encoded multihash of block(s) to remove.

OPTIONS

  -f, --force bool - Ignore nonexistent blocks. Default: false.
  -q, --quiet bool - Write minimal output. Default: false.

DESCRIPTION

  'ipfs block rm' is a plumbing command for removing raw ipfs blocks.
  It takes a list of base58 encoded multihashs to remove.
```

## ipfs block stat

```
USAGE
  ipfs block stat <key> - Print information of a raw IPFS block.

SYNOPSIS
  ipfs block stat [--] <key>

ARGUMENTS

  <key> - The base58 multihash of an existing block to stat.

DESCRIPTION

  'ipfs block stat' is a plumbing command for retrieving information
  on raw IPFS blocks. It outputs the following to stdout:

  	Key  - the base58 encoded multihash
  	Size - the size of the block in bytes
```

## ipfs bootstrap

```
USAGE
  ipfs bootstrap - Show or edit the list of bootstrap peers.

SYNOPSIS
  ipfs bootstrap

DESCRIPTION

  Running 'ipfs bootstrap' with no arguments will run 'ipfs bootstrap list'.

  SECURITY WARNING:

  The bootstrap command manipulates the "bootstrap list", which contains
  the addresses of bootstrap nodes. These are the *trusted peers* from
  which to learn about other peers in the network. Only edit this list
  if you understand the risks of adding or removing nodes from this list.

SUBCOMMANDS
  ipfs bootstrap add [<peer>]... - Add peers to the bootstrap list.
  ipfs bootstrap list            - Show peers in the bootstrap list.
  ipfs bootstrap rm [<peer>]...  - Remove peers from the bootstrap list.

  Use 'ipfs bootstrap <subcmd> --help' for more information about each command.
```

## ipfs bootstrap add

```
USAGE
  ipfs bootstrap add [<peer>]... - Add peers to the bootstrap list.

SYNOPSIS
  ipfs bootstrap add [--default] [--] [<peer>...]

ARGUMENTS

  [<peer>]... - A peer to add to the bootstrap list (in the format '<multiaddr>/<peerID>')

OPTIONS

  --default bool - Add default bootstrap nodes. (Deprecated, use 'default' subcommand instead).

DESCRIPTION

  Outputs a list of peers that were added (that weren't already
  in the bootstrap list).

  SECURITY WARNING:

  The bootstrap command manipulates the "bootstrap list", which contains
  the addresses of bootstrap nodes. These are the *trusted peers* from
  which to learn about other peers in the network. Only edit this list
  if you understand the risks of adding or removing nodes from this list.

SUBCOMMANDS
  ipfs bootstrap add default - Add default peers to the bootstrap list.

  Use 'ipfs bootstrap add <subcmd> --help' for more information about each command.
```

## ipfs bootstrap add default

```
USAGE
  ipfs bootstrap add default - Add default peers to the bootstrap list.

SYNOPSIS
  ipfs bootstrap add default

DESCRIPTION

  Outputs a list of peers that were added (that weren't already
  in the bootstrap list).
```

## ipfs bootstrap list

```
USAGE
  ipfs bootstrap list - Show peers in the bootstrap list.

SYNOPSIS
  ipfs bootstrap list

DESCRIPTION

  Peers are output in the format '<multiaddr>/<peerID>'.
```

## ipfs bootstrap rm

```
USAGE
  ipfs bootstrap rm [<peer>]... - Remove peers from the bootstrap list.

SYNOPSIS
  ipfs bootstrap rm [--all] [--] [<peer>...]

ARGUMENTS

  [<peer>]... - A peer to add to the bootstrap list (in the format '<multiaddr>/<peerID>')

OPTIONS

  --all bool - Remove all bootstrap peers. (Deprecated, use 'all' subcommand).

DESCRIPTION

  Outputs the list of peers that were removed.

  SECURITY WARNING:

  The bootstrap command manipulates the "bootstrap list", which contains
  the addresses of bootstrap nodes. These are the *trusted peers* from
  which to learn about other peers in the network. Only edit this list
  if you understand the risks of adding or removing nodes from this list.

SUBCOMMANDS
  ipfs bootstrap rm all - Remove all peers from the bootstrap list.

  Use 'ipfs bootstrap rm <subcmd> --help' for more information about each command.
```

## ipfs bootstrap rm all

```
USAGE
  ipfs bootstrap rm all - Remove all peers from the bootstrap list.

SYNOPSIS
  ipfs bootstrap rm all

DESCRIPTION

  Outputs the list of peers that were removed.
```

## ipfs cat

```
USAGE
  ipfs cat <ipfs-path>... - Show IPFS object data.

SYNOPSIS
  ipfs cat [--] <ipfs-path>...

ARGUMENTS

  <ipfs-path>... - The path to the IPFS object(s) to be outputted.

DESCRIPTION

  Displays the data contained by an IPFS or IPNS object(s) at the given path.
```

## ipfs commands

```
USAGE
  ipfs commands - List all available commands.

SYNOPSIS
  ipfs commands [--flags | -f]

OPTIONS

  -f, --flags bool - Show command flags. Default: false.

DESCRIPTION

  Lists all available commands (and subcommands) and exits.
```

## ipfs config

```
USAGE
  ipfs config <key> [<value>] - Get and set ipfs config values.

SYNOPSIS
  ipfs config [--bool] [--json] [--] <key> [<value>]

ARGUMENTS

  <key>     - The key of the config entry (e.g. "Addresses.API").
  [<value>] - The value to set the config entry to.

OPTIONS

  --bool bool - Set a boolean value. Default: false.
  --json bool - Parse stringified JSON. Default: false.

DESCRIPTION

  'ipfs config' controls configuration variables. It works
  much like 'git config'. The configuration values are stored in a config
  file inside your IPFS repository.

  Examples:

  Get the value of the 'Datastore.Path' key:

    $ ipfs config Datastore.Path

  Set the value of the 'Datastore.Path' key:

    $ ipfs config Datastore.Path ~/.ipfs/datastore

SUBCOMMANDS
  ipfs config edit           - Open the config file for editing in $EDITOR.
  ipfs config replace <file> - Replace the config with <file>.
  ipfs config show           - Output config file contents.

  Use 'ipfs config <subcmd> --help' for more information about each command.
```

## ipfs config edit

```
USAGE
  ipfs config edit - Open the config file for editing in $EDITOR.

SYNOPSIS
  ipfs config edit

DESCRIPTION

  To use 'ipfs config edit', you must have the $EDITOR environment
  variable set to your preferred text editor.
```

## ipfs config replace

```
USAGE
  ipfs config replace <file> - Replace the config with <file>.

SYNOPSIS
  ipfs config replace [--] <file>

ARGUMENTS

  <file> - The file to use as the new config.

DESCRIPTION

  Make sure to back up the config file first if neccessary, as this operation
  can't be undone.
```

## ipfs config show

```
USAGE
  ipfs config show - Output config file contents.

SYNOPSIS
  ipfs config show

DESCRIPTION

  WARNING: Your private key is stored in the config file, and it will be
  included in the output of this command.
```

## ipfs daemon

```
USAGE
  ipfs daemon - Run a network-connected IPFS node.

SYNOPSIS
  ipfs daemon [--init] [--routing=<routing>] [--mount] [--writable] [--mount-ipfs=<mount-ipfs>] [--mount-ipns=<mount-ipns>] [--unrestricted-api] [--disable-transport-encryption] [--enable-gc] [--manage-fdlimit=false] [--offline] [--migrate] [--enable-pubsub-experiment] [--enable-mplex-experiment=false]

OPTIONS

  --init                         bool   - Initialize ipfs with default settings if not already initialized. Default: false.
  --routing                      string - Overrides the routing option. Default: dht.
  --mount                        bool   - Mounts IPFS to the filesystem. Default: false.
  --writable                     bool   - Enable writing objects (with POST, PUT and DELETE). Default: false.
  --mount-ipfs                   string - Path to the mountpoint for IPFS (if using --mount). Defaults to config setting.
  --mount-ipns                   string - Path to the mountpoint for IPNS (if using --mount). Defaults to config setting.
  --unrestricted-api             bool   - Allow API access to unlisted hashes. Default: false.
  --disable-transport-encryption bool   - Disable transport encryption (for debugging protocols). Default: false.
  --enable-gc                    bool   - Enable automatic periodic repo garbage collection. Default: false.
  --manage-fdlimit               bool   - Check and raise file descriptor limits if needed. Default: true.
  --offline                      bool   - Run offline. Do not connect to the rest of the network but provide local API. Default: false.
  --migrate                      bool   - If true, assume yes at the migrate prompt. If false, assume no.
  --enable-pubsub-experiment     bool   - Instantiate the ipfs daemon with the experimental pubsub feature enabled.
  --enable-mplex-experiment      bool   - Add the experimental 'go-multiplex' stream muxer to libp2p on construction. Default: true.

DESCRIPTION

  The daemon will start listening on ports on the network, which are
  documented in (and can be modified through) 'ipfs config Addresses'.
  For example, to change the 'Gateway' port:

      ipfs config Addresses.Gateway /ip4/127.0.0.1/tcp/8082

  The API address can be changed the same way:

     ipfs config Addresses.API /ip4/127.0.0.1/tcp/5002

  Make sure to restart the daemon after changing addresses.

  By default, the gateway is only accessible locally. To expose it to
  other computers in the network, use 0.0.0.0 as the ip address:

     ipfs config Addresses.Gateway /ip4/0.0.0.0/tcp/8080

  Be careful if you expose the API. It is a security risk, as anyone could
  control your node remotely. If you need to control the node remotely,
  make sure to protect the port as you would other services or database
  (firewall, authenticated proxy, etc).

  HTTP Headers

  ipfs supports passing arbitrary headers to the API and Gateway. You can
  do this by setting headers on the API.HTTPHeaders and Gateway.HTTPHeaders
  keys:

  	ipfs config --json API.HTTPHeaders.X-Special-Header '["so special :)"]'
  	ipfs config --json Gateway.HTTPHeaders.X-Special-Header '["so special :)"]'

  Note that the value of the keys is an _array_ of strings. This is because
  headers can have more than one value, and it is convenient to pass through
  to other libraries.

  CORS Headers (for API)

  You can setup CORS headers the same way:

  	ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin '["example.com"]'
  	ipfs config --json API.HTTPHeaders.Access-Control-Allow-Methods '["PUT", "GET", "POST"]'
  	ipfs config --json API.HTTPHeaders.Access-Control-Allow-Credentials '["true"]'

  Shutdown

  To shutdown the daemon, send a SIGINT signal to it (e.g. by pressing 'Ctrl-C')
  or send a SIGTERM signal to it (e.g. with 'kill'). It may take a while for the
  daemon to shutdown gracefully, but it can be killed forcibly by sending a
  second signal.

  IPFS_PATH environment variable

  ipfs uses a repository in the local file system. By default, the repo is
  located at ~/.ipfs. To change the repo location, set the $IPFS_PATH
  environment variable:

      export IPFS_PATH=/path/to/ipfsrepo

  Routing

  IPFS by default will use a DHT for content routing. There is a highly
  experimental alternative that operates the DHT in a 'client only' mode that can
  be enabled by running the daemon as:

      ipfs daemon --routing=dhtclient

  This will later be transitioned into a config option once it gets out of the
  'experimental' stage.

  DEPRECATION NOTICE

  Previously, ipfs used an environment variable as seen below:

     export API_ORIGIN="http://localhost:8888/"

  This is deprecated. It is still honored in this version, but will be removed
  in a future version, along with this notice. Please move to setting the HTTP
  Headers.
```

## ipfs dag

```
USAGE
  ipfs dag - Interact with ipld dag objects.

SYNOPSIS
  ipfs dag

DESCRIPTION

  'ipfs dag' is used for creating and manipulating dag objects.

  This subcommand is currently an experimental feature, but it is intended
  to deprecate and replace the existing 'ipfs object' command moving forward.


SUBCOMMANDS
  ipfs dag get <ref>         - Get a dag node from ipfs.
  ipfs dag put <object data> - Add a dag node to ipfs.

  Use 'ipfs dag <subcmd> --help' for more information about each command.
```

## ipfs dag get

```
USAGE
  ipfs dag get <ref> - Get a dag node from ipfs.

SYNOPSIS
  ipfs dag get [--] <ref>

ARGUMENTS

  <ref> - The object to get

DESCRIPTION

  'ipfs dag get' fetches a dag node from ipfs and prints it out in the specifed format.
```

## ipfs dag put

```
USAGE
  ipfs dag put <object data> - Add a dag node to ipfs.

SYNOPSIS
  ipfs dag put [--format=<format> | -f] [--input-enc=<input-enc>] [--] <object data>

ARGUMENTS

  <object data> - The object to put

OPTIONS

  -f,        --format string - Format that the object will be added as. Default: cbor.
  --input-enc         string - Format that the input object will be. Default: json.

DESCRIPTION

  'ipfs dag put' accepts input from a file or stdin and parses it
  into an object of the specified format.
```

## ipfs dht

```
USAGE
  ipfs dht - Issue commands directly through the DHT.

SYNOPSIS
  ipfs dht

SUBCOMMANDS
  ipfs dht findpeer <peerID>... - Query the DHT for all of the multiaddresses associated with a Peer ID.
  ipfs dht findprovs <key>...   - Find peers in the DHT that can provide a specific value, given a key.
  ipfs dht get <key>...         - Given a key, query the DHT for its best value.
  ipfs dht provide <key>...     - Announce to the network that you are providing given values.
  ipfs dht put <key> <value>    - Write a key/value pair to the DHT.
  ipfs dht query <peerID>...    - Find the closest Peer IDs to a given Peer ID by querying the DHT.

  Use 'ipfs dht <subcmd> --help' for more information about each command.
```

## ipfs dht findpeer

```
USAGE
  ipfs dht findpeer <peerID>... - Query the DHT for all of the multiaddresses associated with a Peer ID.

SYNOPSIS
  ipfs dht findpeer [--verbose | -v] [--] <peerID>...

ARGUMENTS

  <peerID>... - The ID of the peer to search for.

OPTIONS

  -v, --verbose bool - Print extra information. Default: false.

DESCRIPTION

  Outputs a list of newline-delimited multiaddresses.
```

## ipfs dht findprovs

```
USAGE
  ipfs dht findprovs <key>... - Find peers in the DHT that can provide a specific value, given a key.

SYNOPSIS
  ipfs dht findprovs [--verbose | -v] [--] <key>...

ARGUMENTS

  <key>... - The key to find providers for.

OPTIONS

  -v, --verbose bool - Print extra information. Default: false.

DESCRIPTION

  Outputs a list of newline-delimited provider Peer IDs.
```

## ipfs dht get

```
USAGE
  ipfs dht get <key>... - Given a key, query the DHT for its best value.

SYNOPSIS
  ipfs dht get [--verbose | -v] [--] <key>...

ARGUMENTS

  <key>... - The key to find a value for.

OPTIONS

  -v, --verbose bool - Print extra information. Default: false.

DESCRIPTION

  Outputs the best value for the given key.

  There may be several different values for a given key stored in the DHT; in
  this context 'best' means the record that is most desirable. There is no one
  metric for 'best': it depends entirely on the key type. For IPNS, 'best' is
  the record that is both valid and has the highest sequence number (freshest).
  Different key types can specify other 'best' rules.
```

## ipfs dht provide

```
USAGE
  ipfs dht provide <key>... - Announce to the network that you are providing given values.

SYNOPSIS
  ipfs dht provide [--verbose | -v] [--recursive | -r] [--] <key>...

ARGUMENTS

  <key>... - The key[s] to send provide records for.

OPTIONS

  -v, --verbose   bool - Print extra information. Default: false.
  -r, --recursive bool - Recursively provide entire graph. Default: false.
```

## ipfs dht put

```
USAGE
  ipfs dht put <key> <value> - Write a key/value pair to the DHT.

SYNOPSIS
  ipfs dht put [--verbose | -v] [--] <key> <value>

ARGUMENTS

  <key>   - The key to store the value at.
  <value> - The value to store.

OPTIONS

  -v, --verbose bool - Print extra information. Default: false.

DESCRIPTION

  Given a key of the form /foo/bar and a value of any form, this will write that
  value to the DHT with that key.

  Keys have two parts: a keytype (foo) and the key name (bar). IPNS uses the
  /ipns keytype, and expects the key name to be a Peer ID. IPNS entries are
  specifically formatted (protocol buffer).

  You may only use keytypes that are supported in your ipfs binary: currently
  this is only /ipns. Unless you have a relatively deep understanding of the
  go-ipfs DHT internals, you likely want to be using 'ipfs name publish' instead
  of this.

  Value is arbitrary text. Standard input can be used to provide value.

  NOTE: A value may not exceed 2048 bytes.
```

## ipfs dht query

```
USAGE
  ipfs dht query <peerID>... - Find the closest Peer IDs to a given Peer ID by querying the DHT.

SYNOPSIS
  ipfs dht query [--verbose | -v] [--] <peerID>...

ARGUMENTS

  <peerID>... - The peerID to run the query against.

OPTIONS

  -v, --verbose bool - Print extra information. Default: false.

DESCRIPTION

  Outputs a list of newline-delimited Peer IDs.
```

## ipfs diag

```
USAGE
  ipfs diag - Generate diagnostic reports.

SYNOPSIS
  ipfs diag

SUBCOMMANDS
  ipfs diag cmds - List commands run on this IPFS node.
  ipfs diag net  - Generate a network diagnostics report.
  ipfs diag sys  - Print system diagnostic information.

  Use 'ipfs diag <subcmd> --help' for more information about each command.
```

## ipfs diag cmds

```
USAGE
  ipfs diag cmds - List commands run on this IPFS node.

SYNOPSIS
  ipfs diag cmds [--verbose | -v]

OPTIONS

  -v, --verbose bool - Print extra information. Default: false.

DESCRIPTION

  Lists running and recently run commands.

SUBCOMMANDS
  ipfs diag cmds clear           - Clear inactive requests from the log.
  ipfs diag cmds set-time <time> - Set how long to keep inactive requests in the log.

  Use 'ipfs diag cmds <subcmd> --help' for more information about each command.
```

## ipfs diag cmds clear

```
USAGE
  ipfs diag cmds clear - Clear inactive requests from the log.

SYNOPSIS
  ipfs diag cmds clear
```

## ipfs diag cmds set-time

```
USAGE
  ipfs diag cmds set-time <time> - Set how long to keep inactive requests in the log.

SYNOPSIS
  ipfs diag cmds set-time [--] <time>

ARGUMENTS

  <time> - Time to keep inactive requests in log.
```

## ipfs diag sys

```
USAGE
  ipfs diag sys - Print system diagnostic information.

SYNOPSIS
  ipfs diag sys

DESCRIPTION

  Prints out information about your computer to aid in easier debugging.
```

## ipfs dns

```
USAGE
  ipfs dns <domain-name> - Resolve DNS links.

SYNOPSIS
  ipfs dns [--recursive | -r] [--] <domain-name>

ARGUMENTS

  <domain-name> - The domain-name name to resolve.

OPTIONS

  -r, --recursive bool - Resolve until the result is not a DNS link. Default: false.

DESCRIPTION

  Multihashes are hard to remember, but domain names are usually easy to
  remember.  To create memorable aliases for multihashes, DNS TXT
  records can point to other DNS links, IPFS objects, IPNS keys, etc.
  This command resolves those links to the referenced object.

  For example, with this DNS TXT record:

  	> dig +short TXT _dnslink.ipfs.io
  	dnslink=/ipfs/QmRzTuh2Lpuz7Gr39stNr6mTFdqAghsZec1JoUnfySUzcy

  The resolver will give:

  	> ipfs dns ipfs.io
  	/ipfs/QmRzTuh2Lpuz7Gr39stNr6mTFdqAghsZec1JoUnfySUzcy

  The resolver can recursively resolve:

  	> dig +short TXT recursive.ipfs.io
  	dnslink=/ipns/ipfs.io
  	> ipfs dns -r recursive.ipfs.io
  	/ipfs/QmRzTuh2Lpuz7Gr39stNr6mTFdqAghsZec1JoUnfySUzcy
```

## ipfs file

```
USAGE
  ipfs file - Interact with IPFS objects representing Unix filesystems.

SYNOPSIS
  ipfs file

DESCRIPTION

  'ipfs file' provides a familiar interface to file systems represented
  by IPFS objects, which hides ipfs implementation details like layout
  objects (e.g. fanout and chunking).

SUBCOMMANDS
  ipfs file ls <ipfs-path>... - List directory contents for Unix filesystem objects.

  Use 'ipfs file <subcmd> --help' for more information about each command.
```

## ipfs file ls

```
USAGE
  ipfs file ls <ipfs-path>... - List directory contents for Unix filesystem objects.

SYNOPSIS
  ipfs file ls [--] <ipfs-path>...

ARGUMENTS

  <ipfs-path>... - The path to the IPFS object(s) to list links from.

DESCRIPTION

  Displays the contents of an IPFS or IPNS object(s) at the given path.

  The JSON output contains size information. For files, the child size
  is the total size of the file contents. For directories, the child
  size is the IPFS link size.

  The path can be a prefixless ref; in this case, we assume it to be an
  /ipfs ref and not /ipns.

  Example:

      > ipfs file ls QmW2WQi7j6c7UgJTarActp7tDNikE4B2qXtFCfLPdsgaTQ
      cat.jpg
      > ipfs file ls /ipfs/QmW2WQi7j6c7UgJTarActp7tDNikE4B2qXtFCfLPdsgaTQ
      cat.jpg

  This functionality is deprecated, and will be removed in future versions. If
  possible, please use 'ipfs ls' instead.
```

## ipfs files

```
USAGE
  ipfs files - Interact with unixfs files.

SYNOPSIS
  ipfs files [--f=false]

OPTIONS

  -f, --flush bool - Flush target and ancestors after write. Default: true.

DESCRIPTION

  Files is an API for manipulating IPFS objects as if they were a unix
  filesystem.

  NOTE:
  Most of the subcommands of 'ipfs files' accept the '--flush' flag. It defaults
  to true. Use caution when setting this flag to false. It will improve
  performance for large numbers of file operations, but it does so at the cost
  of consistency guarantees. If the daemon is unexpectedly killed before running
  'ipfs files flush' on the files in question, then data may be lost. This also
  applies to running 'ipfs repo gc' concurrently with '--flush=false'
  operations.

SUBCOMMANDS
  ipfs files cp <source> <dest>  - Copy files into mfs.
  ipfs files flush [<path>]      - Flush a given path's data to disk.
  ipfs files ls [<path>]         - List directories in the local mutable namespace.
  ipfs files mkdir <path>        - Make directories.
  ipfs files mv <source> <dest>  - Move files.
  ipfs files read <path>         - Read a file in a given mfs.
  ipfs files rm <path>...        - Remove a file.
  ipfs files stat <path>         - Display file status.
  ipfs files write <path> <data> - Write to a mutable file in a given filesystem.

  Use 'ipfs files <subcmd> --help' for more information about each command.
```

## ipfs files cp

```
USAGE
  ipfs files cp <source> <dest> - Copy files into mfs.

SYNOPSIS
  ipfs files cp [--] <source> <dest>

ARGUMENTS

  <source> - Source object to copy.
  <dest>   - Destination to copy object to.
```

## ipfs files flush

```
USAGE
  ipfs files flush [<path>] - Flush a given path's data to disk.

SYNOPSIS
  ipfs files flush [--] [<path>]

ARGUMENTS

  [<path>] - Path to flush. Default: '/'.

DESCRIPTION

  Flush a given path to disk. This is only useful when other commands
  are run with the '--flush=false'.
```

## ipfs files ls

```
USAGE
  ipfs files ls [<path>] - List directories in the local mutable namespace.

SYNOPSIS
  ipfs files ls [-l] [--] [<path>]

ARGUMENTS

  [<path>] - Path to show listing for. Defaults to '/'.

OPTIONS

  -l bool - Use long listing format.

DESCRIPTION

  List directories in the local mutable namespace.

  Examples:

      $ ipfs files ls /welcome/docs/
      about
      contact
      help
      quick-start
      readme
      security-notes

      $ ipfs files ls /myfiles/a/b/c/d
      foo
      bar
```

## ipfs files mkdir

```
USAGE
  ipfs files mkdir <path> - Make directories.

SYNOPSIS
  ipfs files mkdir [--parents | -p] [--] <path>

ARGUMENTS

  <path> - Path to dir to make.

OPTIONS

  -p, --parents bool - No error if existing, make parent directories as needed.

DESCRIPTION

  Create the directory if it does not already exist.

  NOTE: All paths must be absolute.

  Examples:

      $ ipfs mfs mkdir /test/newdir
      $ ipfs mfs mkdir -p /test/does/not/exist/yet
```

## ipfs files mv

```
USAGE
  ipfs files mv <source> <dest> - Move files.

SYNOPSIS
  ipfs files mv [--] <source> <dest>

ARGUMENTS

  <source> - Source file to move.
  <dest>   - Destination path for file to be moved to.

DESCRIPTION

  Move files around. Just like traditional unix mv.

  Example:

      $ ipfs files mv /myfs/a/b/c /myfs/foo/newc
```

## ipfs files read

```
USAGE
  ipfs files read <path> - Read a file in a given mfs.

SYNOPSIS
  ipfs files read [--offset=<offset> | -o] [--count=<count> | -n] [--] <path>

ARGUMENTS

  <path> - Path to file to be read.

OPTIONS

  -o, --offset int - Byte offset to begin reading from.
  -n, --count  int - Maximum number of bytes to read.

DESCRIPTION

  Read a specified number of bytes from a file at a given offset. By default,
  will read the entire file similar to unix cat.

  Examples:

      $ ipfs files read /test/hello
      hello
```

## ipfs files rm

```
USAGE
  ipfs files rm <path>... - Remove a file.

SYNOPSIS
  ipfs files rm [--recursive | -r] [--] <path>...

ARGUMENTS

  <path>... - File to remove.

OPTIONS

  -r, --recursive bool - Recursively remove directories.

DESCRIPTION

  Remove files or directories.

      $ ipfs files rm /foo
      $ ipfs files ls /bar
      cat
      dog
      fish
      $ ipfs files rm -r /bar
```

## ipfs files stat

```
USAGE
  ipfs files stat <path> - Display file status.

SYNOPSIS
  ipfs files stat [--format=<format>] [--hash] [--size] [--] <path>

ARGUMENTS

  <path> - Path to node to stat.

OPTIONS

  --format string - Print statistics in given format. Allowed tokens: <hash> <size> <cumulsize> <type> <childs>. Conflicts with other format options. Default: <hash>
  Size: <size>
  CumulativeSize: <cumulsize>
  ChildBlocks: <childs>
  Type: <type>.
  --hash   bool   - Print only hash. Implies '--format=<hash>'. Conflicts with other format options. Default: false.
  --size   bool   - Print only size. Implies '--format=<cumulsize>'. Conflicts with other format options. Default: false.
```

## ipfs files write

```
USAGE
  ipfs files write <path> <data> - Write to a mutable file in a given filesystem.

SYNOPSIS
  ipfs files write [--offset=<offset> | -o] [--create | -e] [--truncate | -t] [--count=<count> | -n] [--] <path> <data>

ARGUMENTS

  <path> - Path to write to.
  <data> - Data to write.

OPTIONS

  -o, --offset   int  - Byte offset to begin writing at.
  -e, --create   bool - Create the file if it does not exist.
  -t, --truncate bool - Truncate the file to size zero before writing.
  -n, --count    int  - Maximum number of bytes to read.

DESCRIPTION

  Write data to a file in a given filesystem. This command allows you to specify
  a beginning offset to write to. The entire length of the input will be written.

  If the '--create' option is specified, the file will be created if it does not
  exist. Nonexistant intermediate directories will not be created.

  If the '--flush' option is set to false, changes will not be propogated to the
  merkledag root. This can make operations much faster when doing a large number
  of writes to a deeper directory structure.

  EXAMPLE:

      echo "hello world" | ipfs files write --create /myfs/a/b/file
      echo "hello world" | ipfs files write --truncate /myfs/a/b/file

  WARNING:

  Usage of the '--flush=false' option does not guarantee data durability until
  the tree has been flushed. This can be accomplished by running 'ipfs files
  stat' on the file or any of its ancestors.
```

## ipfs filestore

```
USAGE
  ipfs filestore - Interact with filestore objects.

SYNOPSIS
  ipfs filestore

SUBCOMMANDS
  ipfs filestore dups              - List blocks that are both in the filestore and standard block storage.
  ipfs filestore ls [<obj>]...     - List objects in filestore.
  ipfs filestore verify [<obj>]... - Verify objects in filestore.

  Use 'ipfs filestore <subcmd> --help' for more information about each command.
```

## ipfs filestore dups

```
USAGE
  ipfs filestore dups - List blocks that are both in the filestore and standard block storage.

SYNOPSIS
  ipfs filestore dups
```

## ipfs filestore ls

```
USAGE
  ipfs filestore ls [<obj>]... - List objects in filestore.

SYNOPSIS
  ipfs filestore ls [--] [<obj>...]

ARGUMENTS

  [<obj>]... - Cid of objects to list.

DESCRIPTION

  List objects in the filestore.

  If one or more <obj> is specified only list those specific objects,
  otherwise list all objects.

  The output is:

  <hash> <size> <path> <offset>
```

## ipfs filestore verify

```
USAGE
  ipfs filestore verify [<obj>]... - Verify objects in filestore.

SYNOPSIS
  ipfs filestore verify [--] [<obj>...]

ARGUMENTS

  [<obj>]... - Cid of objects to verify.

DESCRIPTION

  Verify objects in the filestore.

  If one or more <obj> is specified only verify those specific objects,
  otherwise verify all objects.

  The output is:

  <status> <hash> <size> <path> <offset>

  Where <status> is one of:
  ok:       the block can be reconstructed
  changed:  the contents of the backing file have changed
  no-file:  the backing file could not be found
  error:    there was some other problem reading the file
  missing:  <obj> could not be found in the filestore
  ERROR:    internal error, most likely due to a corrupt database

  For ERROR entries the error will also be printed to stderr.
```

## ipfs get

```
USAGE
  ipfs get <ipfs-path> - Download IPFS objects.

SYNOPSIS
  ipfs get [--output=<output> | -o] [--archive | -a] [--compress | -C] [--compression-level=<compression-level> | -l] [--] <ipfs-path>

ARGUMENTS

  <ipfs-path> - The path to the IPFS object(s) to be outputted.

OPTIONS

  -o, --output            string - The path where the output should be stored.
  -a, --archive           bool   - Output a TAR archive. Default: false.
  -C, --compress          bool   - Compress the output with GZIP compression. Default: false.
  -l, --compression-level int    - The level of compression (1-9). Default: -1.

DESCRIPTION

  Stores to disk the data contained an IPFS or IPNS object(s) at the given path.

  By default, the output will be stored at './<ipfs-path>', but an alternate
  path can be specified with '--output=<path>' or '-o=<path>'.

  To output a TAR archive instead of unpacked files, use '--archive' or '-a'.

  To compress the output with GZIP compression, use '--compress' or '-C'. You
  may also specify the level of compression by specifying '-l=<1-9>'.
```

## ipfs id

```
USAGE
  ipfs id [<peerid>] - Show ipfs node id info.

SYNOPSIS
  ipfs id [--format=<format> | -f] [--] [<peerid>]

ARGUMENTS

  [<peerid>] - Peer.ID of node to look up.

OPTIONS

  -f, --format string - Optional output format.

DESCRIPTION

  Prints out information about the specified peer.
  If no peer is specified, prints out information for local peers.

  'ipfs id' supports the format option for output with the following keys:
  <id> : The peers id.
  <aver>: Agent version.
  <pver>: Protocol version.
  <pubkey>: Public key.
  <addrs>: Addresses (newline delimited).

  EXAMPLE:

      ipfs id Qmece2RkXhsKe5CRooNisBTh4SK119KrXXGmoK6V3kb8aH -f="<addrs>\n"
```

## ipfs init

```
USAGE
  ipfs init [<default-config>] - Initializes ipfs config file.

SYNOPSIS
  ipfs init [--bits=<bits> | -b] [--empty-repo | -e] [--] [<default-config>]

ARGUMENTS

  [<default-config>] - Initialize with the given configuration.

OPTIONS

  -b, --bits       int  - Number of bits to use in the generated RSA private key. Default: 2048.
  -e, --empty-repo bool - Don't add and pin help files to the local storage. Default: false.

DESCRIPTION

  Initializes ipfs configuration files and generates a new keypair.

  ipfs uses a repository in the local file system. By default, the repo is
  located at ~/.ipfs. To change the repo location, set the $IPFS_PATH
  environment variable:

      export IPFS_PATH=/path/to/ipfsrepo
```

## ipfs key

```
USAGE
  ipfs key - Create and list IPNS name keypairs

SYNOPSIS
  ipfs key

DESCRIPTION

  'ipfs key gen' generates a new keypair for usage with IPNS and 'ipfs name publish'.

    > ipfs key gen --type=rsa --size=2048 mykey
    > ipfs name publish --key=mykey QmSomeHash

  'ipfs key list' lists the available keys.

    > ipfs key list
    self
    mykey


SUBCOMMANDS
  ipfs key gen <name> - Create a new keypair
  ipfs key list       - List all local keypairs

  Use 'ipfs key <subcmd> --help' for more information about each command.
```

## ipfs key gen

```
USAGE
  ipfs key gen <name> - Create a new keypair

SYNOPSIS
  ipfs key gen [--type=<type> | -t] [--size=<size> | -s] [--] <name>

ARGUMENTS

  <name> - name of key to create

OPTIONS

  -t, --type string - type of the key to create [rsa, ed25519].
  -s, --size int    - size of the key to generate.
```

## ipfs key list

```
USAGE
  ipfs key list - List all local keypairs

SYNOPSIS
  ipfs key list [-l]

OPTIONS

  -l bool - Show extra information about keys.
```

## ipfs log

```
USAGE
  ipfs log - Interact with the daemon log output.

SYNOPSIS
  ipfs log

DESCRIPTION

  'ipfs log' contains utility commands to affect or read the logging
  output of a running daemon.

SUBCOMMANDS
  ipfs log level <subsystem> <level> - Change the logging level.
  ipfs log ls                        - List the logging subsystems.
  ipfs log tail                      - Read the event log.

  Use 'ipfs log <subcmd> --help' for more information about each command.
```

## ipfs log level

```
USAGE
  ipfs log level <subsystem> <level> - Change the logging level.

SYNOPSIS
  ipfs log level [--] <subsystem> <level>

ARGUMENTS

  <subsystem> - The subsystem logging identifier. Use 'all' for all subsystems.
  <level>     - The log level, with 'debug' the most verbose and 'critical' the least verbose.
  			One of: debug, info, warning, error, critical.


DESCRIPTION

  Change the verbosity of one or all subsystems log output. This does not affect the event log.
```

## ipfs log ls

```
USAGE
  ipfs log ls - List the logging subsystems.

SYNOPSIS
  ipfs log ls

DESCRIPTION

  'ipfs log ls' is a utility command used to list the logging
  subsystems of a running daemon.
```

## ipfs log tail

```
USAGE
  ipfs log tail - Read the event log.

SYNOPSIS
  ipfs log tail

DESCRIPTION

  Outputs event log messages (not other log messages) as they are generated.
```

## ipfs ls

```
USAGE
  ipfs ls <ipfs-path>... - List directory contents for Unix filesystem objects.

SYNOPSIS
  ipfs ls [--headers | -v] [--resolve-type=false] [--] <ipfs-path>...

ARGUMENTS

  <ipfs-path>... - The path to the IPFS object(s) to list links from.

OPTIONS

  -v,           --headers bool - Print table headers (Hash, Size, Name). Default: false.
  --resolve-type          bool - Resolve linked objects to find out their types. Default: true.

DESCRIPTION

  Displays the contents of an IPFS or IPNS object(s) at the given path, with
  the following format:

    <link base58 hash> <link size in bytes> <link name>

  The JSON output contains type information.
```

## ipfs mount

```
USAGE
  ipfs mount - Mounts IPFS to the filesystem (read-only).

SYNOPSIS
  ipfs mount [--ipfs-path=<ipfs-path> | -f] [--ipns-path=<ipns-path> | -n]

OPTIONS

  -f, --ipfs-path string - The path where IPFS should be mounted.
  -n, --ipns-path string - The path where IPNS should be mounted.

DESCRIPTION

  Mount IPFS at a read-only mountpoint on the OS. The default, /ipfs and /ipns,
  are set in the configutation file, but can be overriden by the options.
  All IPFS objects will be accessible under this directory. Note that the
  root will not be listable, as it is virtual. Access known paths directly.

  You may have to create /ipfs and /ipns before using 'ipfs mount':

  > sudo mkdir /ipfs /ipns
  > sudo chown `whoami` /ipfs /ipns
  > ipfs daemon &
  > ipfs mount

  Example:

  # setup
  > mkdir foo
  > echo "baz" > foo/bar
  > ipfs add -r foo
  added QmWLdkp93sNxGRjnFHPaYg8tCQ35NBY3XPn6KiETd3Z4WR foo/bar
  added QmSh5e7S6fdcu75LAbXNZAFY2nGyZUJXyLCJDvn2zRkWyC foo
  > ipfs ls QmSh5e7S6fdcu75LAbXNZAFY2nGyZUJXyLCJDvn2zRkWyC
  QmWLdkp93sNxGRjnFHPaYg8tCQ35NBY3XPn6KiETd3Z4WR 12 bar
  > ipfs cat QmWLdkp93sNxGRjnFHPaYg8tCQ35NBY3XPn6KiETd3Z4WR
  baz

  # mount
  > ipfs daemon &
  > ipfs mount
  IPFS mounted at: /ipfs
  IPNS mounted at: /ipns
  > cd /ipfs/QmSh5e7S6fdcu75LAbXNZAFY2nGyZUJXyLCJDvn2zRkWyC
  > ls
  bar
  > cat bar
  baz
  > cat /ipfs/QmSh5e7S6fdcu75LAbXNZAFY2nGyZUJXyLCJDvn2zRkWyC/bar
  baz
  > cat /ipfs/QmWLdkp93sNxGRjnFHPaYg8tCQ35NBY3XPn6KiETd3Z4WR
  baz
```

## ipfs name

```
USAGE
  ipfs name - Publish and resolve IPNS names.

SYNOPSIS
  ipfs name

DESCRIPTION

  IPNS is a PKI namespace, where names are the hashes of public keys, and
  the private key enables publishing new (signed) values. In both publish
  and resolve, the default name used is the node's own PeerID,
  which is the hash of its public key.

  You can use the 'ipfs key' commands to list and generate more names and their respective keys.

  Examples:

  Publish an <ipfs-path> with your default name:

    > ipfs name publish /ipfs/QmatmE9msSfkKxoffpHwNLNKgwZG8eT9Bud6YoPab52vpy
    Published to QmbCMUZw6JFeZ7Wp9jkzbye3Fzp2GGcPgC3nmeUjfVF87n: /ipfs/QmatmE9msSfkKxoffpHwNLNKgwZG8eT9Bud6YoPab52vpy

  Publish an <ipfs-path> with another name, added by an 'ipfs key' command:

    > ipfs key gen --type=rsa --size=2048 mykey
    > ipfs name publish --key=mykey /ipfs/QmatmE9msSfkKxoffpHwNLNKgwZG8eT9Bud6YoPab52vpy
    Published to QmbCMUZw6JFeZ7Wp9jkzbye3Fzp2GGcPgC3nmeUjfVF87n: /ipfs/QmatmE9msSfkKxoffpHwNLNKgwZG8eT9Bud6YoPab52vpy

  Resolve the value of your name:

    > ipfs name resolve
    /ipfs/QmatmE9msSfkKxoffpHwNLNKgwZG8eT9Bud6YoPab52vpy

  Resolve the value of another name:

    > ipfs name resolve QmaCpDMGvV2BGHeYERUEnRQAwe3N8SzbUtfsmvsqQLuvuJ
    /ipfs/QmSiTko9JZyabH56y2fussEt1A5oDqsFXB3CkvAqraFryz

  Resolve the value of a dnslink:

    > ipfs name resolve ipfs.io
    /ipfs/QmaBvfZooxWkrv7D3r8LS9moNjzD2o525XMZze69hhoxf5

SUBCOMMANDS
  ipfs name publish <ipfs-path> - Publish IPNS names.
  ipfs name resolve [<name>]    - Resolve IPNS names.

  Use 'ipfs name <subcmd> --help' for more information about each command.
```

## ipfs name publish

```
USAGE
  ipfs name publish <ipfs-path> - Publish IPNS names.

SYNOPSIS
  ipfs name publish [--resolve=false] [--lifetime=<lifetime> | -t] [--ttl=<ttl>] [--key=<key> | -k] [--] <ipfs-path>

ARGUMENTS

  <ipfs-path> - ipfs path of the object to be published.

OPTIONS

  --resolve           bool   - Resolve given path before publishing. Default: true.
  -t,      --lifetime string - Time duration that the record will be valid for. Default: 24h.
      This accepts durations such as "300s", "1.5h" or "2h45m". Valid time units are
      "ns", "us" (or "µs"), "ms", "s", "m", "h".
  --ttl               string - Time duration this record should be cached for (caution: experimental).
  -k,      --key      string - Name of the key to be used, as listed by 'ipfs key list'. Default: Default: self..

DESCRIPTION

  IPNS is a PKI namespace, where names are the hashes of public keys, and
  the private key enables publishing new (signed) values. In both publish
  and resolve, the default name used is the node's own PeerID,
  which is the hash of its public key.

  You can use the 'ipfs key' commands to list and generate more names and their respective keys.

  Examples:

  Publish an <ipfs-path> with your default name:

    > ipfs name publish /ipfs/QmatmE9msSfkKxoffpHwNLNKgwZG8eT9Bud6YoPab52vpy
    Published to QmbCMUZw6JFeZ7Wp9jkzbye3Fzp2GGcPgC3nmeUjfVF87n: /ipfs/QmatmE9msSfkKxoffpHwNLNKgwZG8eT9Bud6YoPab52vpy

  Publish an <ipfs-path> with another name, added by an 'ipfs key' command:

    > ipfs key gen --type=rsa --size=2048 mykey
    > ipfs name publish --key=mykey /ipfs/QmatmE9msSfkKxoffpHwNLNKgwZG8eT9Bud6YoPab52vpy
    Published to QmbCMUZw6JFeZ7Wp9jkzbye3Fzp2GGcPgC3nmeUjfVF87n: /ipfs/QmatmE9msSfkKxoffpHwNLNKgwZG8eT9Bud6YoPab52vpy
```

## ipfs name resolve

```
USAGE
  ipfs name resolve [<name>] - Resolve IPNS names.

SYNOPSIS
  ipfs name resolve [--recursive | -r] [--nocache | -n] [--] [<name>]

ARGUMENTS

  [<name>] - The IPNS name to resolve. Defaults to your node's peerID.

OPTIONS

  -r, --recursive bool - Resolve until the result is not an IPNS name. Default: false.
  -n, --nocache   bool - Do not use cached entries. Default: false.

DESCRIPTION

  IPNS is a PKI namespace, where names are the hashes of public keys, and
  the private key enables publishing new (signed) values. In both publish
  and resolve, the default name used is the node's own PeerID,
  which is the hash of its public key.

  You can use the 'ipfs key' commands to list and generate more names and their respective keys.

  Examples:

  Resolve the value of your name:

    > ipfs name resolve
    /ipfs/QmatmE9msSfkKxoffpHwNLNKgwZG8eT9Bud6YoPab52vpy

  Resolve the value of another name:

    > ipfs name resolve QmaCpDMGvV2BGHeYERUEnRQAwe3N8SzbUtfsmvsqQLuvuJ
    /ipfs/QmSiTko9JZyabH56y2fussEt1A5oDqsFXB3CkvAqraFryz

  Resolve the value of a dnslink:

    > ipfs name resolve ipfs.io
    /ipfs/QmaBvfZooxWkrv7D3r8LS9moNjzD2o525XMZze69hhoxf5
```

## ipfs object

```
USAGE
  ipfs object - Interact with IPFS objects.

SYNOPSIS
  ipfs object

DESCRIPTION

  'ipfs object' is a plumbing command used to manipulate DAG objects
  directly.

SUBCOMMANDS
  ipfs object data <key>           - Output the raw bytes of an IPFS object.
  ipfs object diff <obj_a> <obj_b> - Display the diff between two ipfs objects.
  ipfs object get <key>            - Get and serialize the DAG node named by <key>.
  ipfs object links <key>          - Output the links pointed to by the specified object.
  ipfs object new [<template>]     - Create a new object from an ipfs template.
  ipfs object patch                - Create a new merkledag object based on an existing one.
  ipfs object put <data>           - Store input as a DAG object, print its key.
  ipfs object stat <key>           - Get stats for the DAG node named by <key>.

  Use 'ipfs object <subcmd> --help' for more information about each command.
```

## ipfs object data

```
USAGE
  ipfs object data <key> - Output the raw bytes of an IPFS object.

SYNOPSIS
  ipfs object data [--] <key>

ARGUMENTS

  <key> - Key of the object to retrieve, in base58-encoded multihash format.

DESCRIPTION

  'ipfs object data' is a plumbing command for retrieving the raw bytes stored
  in a DAG node. It outputs to stdout, and <key> is a base58 encoded multihash.

  Note that the "--encoding" option does not affect the output, since the output
  is the raw data of the object.
```

## ipfs object diff

```
USAGE
  ipfs object diff <obj_a> <obj_b> - Display the diff between two ipfs objects.

SYNOPSIS
  ipfs object diff [--verbose | -v] [--] <obj_a> <obj_b>

ARGUMENTS

  <obj_a> - Object to diff against.
  <obj_b> - Object to diff.

OPTIONS

  -v, --verbose bool - Print extra information.

DESCRIPTION

  'ipfs object diff' is a command used to show the differences between
  two IPFS objects.

  Example:

     > ls foo
     bar baz/ giraffe
     > ipfs add -r foo
     ...
     Added QmegHcnrPgMwC7tBiMxChD54fgQMBUecNw9nE9UUU4x1bz foo
     > OBJ_A=QmegHcnrPgMwC7tBiMxChD54fgQMBUecNw9nE9UUU4x1bz
     > echo "different content" > foo/bar
     > ipfs add -r foo
     ...
     Added QmcmRptkSPWhptCttgHg27QNDmnV33wAJyUkCnAvqD3eCD foo
     > OBJ_B=QmcmRptkSPWhptCttgHg27QNDmnV33wAJyUkCnAvqD3eCD
     > ipfs object diff -v $OBJ_A $OBJ_B
     Changed "bar" from QmNgd5cz2jNftnAHBhcRUGdtiaMzb5Rhjqd4etondHHST8 to QmRfFVsjSXkhFxrfWnLpMae2M4GBVsry6VAuYYcji5MiZb.
```

## ipfs object get

```
USAGE
  ipfs object get <key> - Get and serialize the DAG node named by <key>.

SYNOPSIS
  ipfs object get [--] <key>

ARGUMENTS

  <key> - Key of the object to retrieve, in base58-encoded multihash format.

DESCRIPTION

  'ipfs object get' is a plumbing command for retrieving DAG nodes.
  It serializes the DAG node to the format specified by the "--encoding"
  flag. It outputs to stdout, and <key> is a base58 encoded multihash.

  This command outputs data in the following encodings:
    * "protobuf"
    * "json"
    * "xml"
  (Specified by the "--encoding" or "--enc" flag)
```

## ipfs object links

```
USAGE
  ipfs object links <key> - Output the links pointed to by the specified object.

SYNOPSIS
  ipfs object links [--headers | -v] [--] <key>

ARGUMENTS

  <key> - Key of the object to retrieve, in base58-encoded multihash format.

OPTIONS

  -v, --headers bool - Print table headers (Hash, Size, Name). Default: false.

DESCRIPTION

  'ipfs object links' is a plumbing command for retrieving the links from
  a DAG node. It outputs to stdout, and <key> is a base58 encoded
  multihash.
```

## ipfs object new

```
USAGE
  ipfs object new [<template>] - Create a new object from an ipfs template.

SYNOPSIS
  ipfs object new [--] [<template>]

ARGUMENTS

  [<template>] - Template to use. Optional.

DESCRIPTION

  'ipfs object new' is a plumbing command for creating new DAG nodes.
  By default it creates and returns a new empty merkledag node, but
  you may pass an optional template argument to create a preformatted
  node.

  Available templates:
  	* unixfs-dir
```

## ipfs object patch

```
USAGE
  ipfs object patch - Create a new merkledag object based on an existing one.

SYNOPSIS
  ipfs object patch

DESCRIPTION

  'ipfs object patch <root> <cmd> <args>' is a plumbing command used to
  build custom DAG objects. It mutates objects, creating new objects as a
  result. This is the Merkle-DAG version of modifying an object.

SUBCOMMANDS
  ipfs object patch add-link <root> <name> <ref> - Add a link to a given object.
  ipfs object patch append-data <root> <data>    - Append data to the data segment of a dag node.
  ipfs object patch rm-link <root> <link>        - Remove a link from an object.
  ipfs object patch set-data <root> <data>       - Set the data field of an IPFS object.

  Use 'ipfs object patch <subcmd> --help' for more information about each command.
```

## ipfs object patch add-link

```
USAGE
  ipfs object patch add-link <root> <name> <ref> - Add a link to a given object.

SYNOPSIS
  ipfs object patch add-link [--create | -p] [--] <root> <name> <ref>

ARGUMENTS

  <root> - The hash of the node to modify.
  <name> - Name of link to create.
  <ref>  - IPFS object to add link to.

OPTIONS

  -p, --create bool - Create intermediary nodes. Default: false.

DESCRIPTION

  Add a Merkle-link to the given object and return the hash of the result.

  Example:

      $ EMPTY_DIR=$(ipfs object new unixfs-dir)
      $ BAR=$(echo "bar" | ipfs add -q)
      $ ipfs object patch $EMPTY_DIR add-link foo $BAR

  This takes an empty directory, and adds a link named 'foo' under it, pointing
  to a file containing 'bar', and returns the hash of the new object.
```

## ipfs object patch append-data

```
USAGE
  ipfs object patch append-data <root> <data> - Append data to the data segment of a dag node.

SYNOPSIS
  ipfs object patch append-data [--] <root> <data>

ARGUMENTS

  <root> - The hash of the node to modify.
  <data> - Data to append.

DESCRIPTION

  Append data to what already exists in the data segment in the given object.

  Example:

  	$ echo "hello" | ipfs object patch $HASH append-data

  NOTE: This does not append data to a file - it modifies the actual raw
  data within an object. Objects have a max size of 1MB and objects larger than
  the limit will not be respected by the network.
```

## ipfs object patch rm-link

```
USAGE
  ipfs object patch rm-link <root> <link> - Remove a link from an object.

SYNOPSIS
  ipfs object patch rm-link [--] <root> <link>

ARGUMENTS

  <root> - The hash of the node to modify.
  <link> - Name of the link to remove.

DESCRIPTION

  Removes a link by the given name from root.
```

## ipfs object patch set-data

```
USAGE
  ipfs object patch set-data <root> <data> - Set the data field of an IPFS object.

SYNOPSIS
  ipfs object patch set-data [--] <root> <data>

ARGUMENTS

  <root> - The hash of the node to modify.
  <data> - The data to set the object to.

DESCRIPTION

  Set the data of an IPFS object from stdin or with the contents of a file.

  Example:

      $ echo "my data" | ipfs object patch $MYHASH set-data
```

## ipfs object put

```
USAGE
  ipfs object put <data> - Store input as a DAG object, print its key.

SYNOPSIS
  ipfs object put [--inputenc=<inputenc>] [--datafieldenc=<datafieldenc>] [--] <data>

ARGUMENTS

  <data> - Data to be stored as a DAG object.

OPTIONS

  --inputenc     string - Encoding type of input data. One of: {"protobuf", "json"}. Default: json.
  --datafieldenc string - Encoding type of the data field, either "text" or "base64". Default: text.

DESCRIPTION

  'ipfs object put' is a plumbing command for storing DAG nodes.
  It reads from stdin, and the output is a base58 encoded multihash.

  Data should be in the format specified by the --inputenc flag.
  --inputenc may be one of the following:
  	* "protobuf"
  	* "json" (default)

  Examples:

  	$ echo '{ "Data": "abc" }' | ipfs object put

  This creates a node with the data 'abc' and no links. For an object with
  links, create a file named 'node.json' with the contents:

      {
          "Data": "another",
          "Links": [ {
              "Name": "some link",
              "Hash": "QmXg9Pp2ytZ14xgmQjYEiHjVjMFXzCVVEcRTWJBmLgR39V",
              "Size": 8
          } ]
      }

  And then run:

  	$ ipfs object put node.json
```

## ipfs object stat

```
USAGE
  ipfs object stat <key> - Get stats for the DAG node named by <key>.

SYNOPSIS
  ipfs object stat [--] <key>

ARGUMENTS

  <key> - Key of the object to retrieve, in base58-encoded multihash format.

DESCRIPTION

  'ipfs object stat' is a plumbing command to print DAG node statistics.
  <key> is a base58 encoded multihash. It outputs to stdout:

  	NumLinks        int number of links in link table
  	BlockSize       int size of the raw, encoded data
  	LinksSize       int size of the links segment
  	DataSize        int size of the data segment
  	CumulativeSize  int cumulative size of object and its references
```

## ipfs pin

```
USAGE
  ipfs pin - Pin (and unpin) objects to local storage.

SYNOPSIS
  ipfs pin

SUBCOMMANDS
  ipfs pin add <ipfs-path>...  - Pin objects to local storage.
  ipfs pin ls [<ipfs-path>]... - List objects pinned to local storage.
  ipfs pin rm <ipfs-path>...   - Remove pinned objects from local storage.

  Use 'ipfs pin <subcmd> --help' for more information about each command.
```

## ipfs pin add

```
USAGE
  ipfs pin add <ipfs-path>... - Pin objects to local storage.

SYNOPSIS
  ipfs pin add [--recursive=false] [--progress] [--] <ipfs-path>...

ARGUMENTS

  <ipfs-path>... - Path to object(s) to be pinned.

OPTIONS

  -r,       --recursive bool - Recursively pin the object linked to by the specified object(s). Default: true.
  --progress            bool - Show progress.

DESCRIPTION

  Stores an IPFS object(s) from a given path locally to disk.
```

## ipfs pin ls

```
USAGE
  ipfs pin ls [<ipfs-path>]... - List objects pinned to local storage.

SYNOPSIS
  ipfs pin ls [--type=<type> | -t] [--quiet | -q] [--] [<ipfs-path>...]

ARGUMENTS

  [<ipfs-path>]... - Path to object(s) to be listed.

OPTIONS

  -t, --type  string - The type of pinned keys to list. Can be "direct", "indirect", "recursive", or "all". Default: all.
  -q, --quiet bool   - Write just hashes of objects. Default: false.

DESCRIPTION

  Returns a list of objects that are pinned locally.
  By default, all pinned objects are returned, but the '--type' flag or
  arguments can restrict that to a specific pin type or to some specific objects
  respectively.

  Use --type=<type> to specify the type of pinned keys to list.
  Valid values are:
      * "direct": pin that specific object.
      * "recursive": pin that specific object, and indirectly pin all its
      	descendants
      * "indirect": pinned indirectly by an ancestor (like a refcount)
      * "all"

  With arguments, the command fails if any of the arguments is not a pinned
  object. And if --type=<type> is additionally used, the command will also fail
  if any of the arguments is not of the specified type.

  Example:
  	$ echo "hello" | ipfs add -q
  	QmZULkCELmmk5XNfCgTnCyFgAVxBRBXyDHGGMVoLFLiXEN
  	$ ipfs pin ls
  	QmZULkCELmmk5XNfCgTnCyFgAVxBRBXyDHGGMVoLFLiXEN recursive
  	# now remove the pin, and repin it directly
  	$ ipfs pin rm QmZULkCELmmk5XNfCgTnCyFgAVxBRBXyDHGGMVoLFLiXEN
  	unpinned QmZULkCELmmk5XNfCgTnCyFgAVxBRBXyDHGGMVoLFLiXEN
  	$ ipfs pin add -r=false QmZULkCELmmk5XNfCgTnCyFgAVxBRBXyDHGGMVoLFLiXEN
  	pinned QmZULkCELmmk5XNfCgTnCyFgAVxBRBXyDHGGMVoLFLiXEN directly
  	$ ipfs pin ls --type=direct
  	QmZULkCELmmk5XNfCgTnCyFgAVxBRBXyDHGGMVoLFLiXEN direct
  	$ ipfs pin ls QmZULkCELmmk5XNfCgTnCyFgAVxBRBXyDHGGMVoLFLiXEN
  	QmZULkCELmmk5XNfCgTnCyFgAVxBRBXyDHGGMVoLFLiXEN direct
```

## ipfs pin rm

```
USAGE
  ipfs pin rm <ipfs-path>... - Remove pinned objects from local storage.

SYNOPSIS
  ipfs pin rm [--recursive=false] [--] <ipfs-path>...

ARGUMENTS

  <ipfs-path>... - Path to object(s) to be unpinned.

OPTIONS

  -r, --recursive bool - Recursively unpin the object linked to by the specified object(s). Default: true.

DESCRIPTION

  Removes the pin from the given object allowing it to be garbage
  collected if needed. (By default, recursively. Use -r=false for direct pins.)
```

## ipfs ping

```
USAGE
  ipfs ping <peer ID>... - Send echo request packets to IPFS hosts.

SYNOPSIS
  ipfs ping [--count=<count> | -n] [--] <peer ID>...

ARGUMENTS

  <peer ID>... - ID of peer to be pinged.

OPTIONS

  -n, --count int - Number of ping messages to send. Default: 10.

DESCRIPTION

  'ipfs ping' is a tool to test sending data to other nodes. It finds nodes
  via the routing system, sends pings, waits for pongs, and prints out round-
  trip latency information.
```

## ipfs pubsub

```
USAGE
  ipfs pubsub - An experimental publish-subscribe system on ipfs.

SYNOPSIS
  ipfs pubsub

DESCRIPTION

  ipfs pubsub allows you to publish messages to a given topic, and also to
  subscribe to new messages on a given topic.

  This is an experimental feature. It is not intended in its current state
  to be used in a production environment.

  To use, the daemon must be run with '--enable-pubsub-experiment'.

SUBCOMMANDS
  ipfs pubsub ls                    - List subscribed topics by name.
  ipfs pubsub peers [<topic>]       - List peers we are currently pubsubbing with.
  ipfs pubsub pub <topic> <data>... - Publish a message to a given pubsub topic.
  ipfs pubsub sub <topic>           - Subscribe to messages on a given topic.

  Use 'ipfs pubsub <subcmd> --help' for more information about each command.
```

## ipfs pubsub ls

```
USAGE
  ipfs pubsub ls - List subscribed topics by name.

SYNOPSIS
  ipfs pubsub ls

DESCRIPTION

  ipfs pubsub ls lists out the names of topics you are currently subscribed to.

  This is an experimental feature. It is not intended in its current state
  to be used in a production environment.

  To use, the daemon must be run with '--enable-pubsub-experiment'.
```

## ipfs pubsub peers

```
USAGE
  ipfs pubsub peers [<topic>] - List peers we are currently pubsubbing with.

SYNOPSIS
  ipfs pubsub peers [--] [<topic>]

ARGUMENTS

  [<topic>] - topic to list connected peers of

DESCRIPTION

  ipfs pubsub peers with no arguments lists out the pubsub peers you are
  currently connected to. If given a topic, it will list connected
  peers who are subscribed to the named topic.

  This is an experimental feature. It is not intended in its current state
  to be used in a production environment.

  To use, the daemon must be run with '--enable-pubsub-experiment'.
```

## ipfs pubsub pub

```
USAGE
  ipfs pubsub pub <topic> <data>... - Publish a message to a given pubsub topic.

SYNOPSIS
  ipfs pubsub pub [--] <topic> <data>...

ARGUMENTS

  <topic>   - Topic to publish to.
  <data>... - Payload of message to publish.

DESCRIPTION

  ipfs pubsub pub publishes a message to a specified topic.

  This is an experimental feature. It is not intended in its current state
  to be used in a production environment.

  To use, the daemon must be run with '--enable-pubsub-experiment'.
```

## ipfs pubsub sub

```
USAGE
  ipfs pubsub sub <topic> - Subscribe to messages on a given topic.

SYNOPSIS
  ipfs pubsub sub [--discover] [--] <topic>

ARGUMENTS

  <topic> - String name of topic to subscribe to.

OPTIONS

  --discover bool - try to discover other peers subscribed to the same topic.

DESCRIPTION

  ipfs pubsub sub subscribes to messages on a given topic.

  This is an experimental feature. It is not intended in its current state
  to be used in a production environment.

  To use, the daemon must be run with '--enable-pubsub-experiment'.
```

## ipfs refs

```
USAGE
  ipfs refs <ipfs-path>... - List links (references) from an object.

SYNOPSIS
  ipfs refs [--format=<format>] [--edges | -e] [--unique | -u] [--recursive | -r] [--] <ipfs-path>...

ARGUMENTS

  <ipfs-path>... - Path to the object(s) to list refs from.

OPTIONS

  --format            string - Emit edges with given format. Available tokens: <src> <dst> <linkname>. Default: <dst>.
  -e,     --edges     bool   - Emit edge format: `<from> -> <to>`. Default: false.
  -u,     --unique    bool   - Omit duplicate refs from output. Default: false.
  -r,     --recursive bool   - Recursively list links of child nodes. Default: false.

DESCRIPTION

  Lists the hashes of all the links an IPFS or IPNS object(s) contains,
  with the following format:

    <link base58 hash>

  NOTE: List all references recursively by using the flag '-r'.

SUBCOMMANDS
  ipfs refs local - List all local references.

  Use 'ipfs refs <subcmd> --help' for more information about each command.
```

## ipfs refs local

```
USAGE
  ipfs refs local - List all local references.

SYNOPSIS
  ipfs refs local

DESCRIPTION

  Displays the hashes of all local objects.
```

## ipfs repo

```
USAGE
  ipfs repo - Manipulate the IPFS repo.

SYNOPSIS
  ipfs repo

DESCRIPTION

  'ipfs repo' is a plumbing command used to manipulate the repo.

SUBCOMMANDS
  ipfs repo fsck    - Remove repo lockfiles.
  ipfs repo gc      - Perform a garbage collection sweep on the repo.
  ipfs repo stat    - Get stats for the currently used repo.
  ipfs repo verify  - Verify all blocks in repo are not corrupted.
  ipfs repo version - Show the repo version.

  Use 'ipfs repo <subcmd> --help' for more information about each command.
```

## ipfs repo fsck

```
USAGE
  ipfs repo fsck - Remove repo lockfiles.

SYNOPSIS
  ipfs repo fsck

DESCRIPTION

  'ipfs repo fsck' is a plumbing command that will remove repo and level db
  lockfiles, as well as the api file. This command can only run when no ipfs
  daemons are running.
```

## ipfs repo gc

```
USAGE
  ipfs repo gc - Perform a garbage collection sweep on the repo.

SYNOPSIS
  ipfs repo gc [--quiet | -q] [--stream-errors]

OPTIONS

  -q,            --quiet bool - Write minimal output. Default: false.
  --stream-errors        bool - Stream errors. Default: false.

DESCRIPTION

  'ipfs repo gc' is a plumbing command that will sweep the local
  set of stored objects and remove ones that are not pinned in
  order to reclaim hard disk space.
```

## ipfs repo stat

```
USAGE
  ipfs repo stat - Get stats for the currently used repo.

SYNOPSIS
  ipfs repo stat [--human]

OPTIONS

  --human bool - Output RepoSize in MiB. Default: false.

DESCRIPTION

  'ipfs repo stat' is a plumbing command that will scan the local
  set of stored objects and print repo statistics. It outputs to stdout:
  NumObjects      int Number of objects in the local repo.
  RepoPath        string The path to the repo being currently used.
  RepoSize        int Size in bytes that the repo is currently taking.
  Version         string The repo version.
```

## ipfs repo verify

```
USAGE
  ipfs repo verify - Verify all blocks in repo are not corrupted.

SYNOPSIS
  ipfs repo verify
```

## ipfs repo version

```
USAGE
  ipfs repo version - Show the repo version.

SYNOPSIS
  ipfs repo version [--quiet | -q]

OPTIONS

  -q, --quiet bool - Write minimal output.

DESCRIPTION

  'ipfs repo version' returns the current repo version.
```

## ipfs resolve

```
USAGE
  ipfs resolve <name> - Resolve the value of names to IPFS.

SYNOPSIS
  ipfs resolve [--recursive | -r] [--] <name>

ARGUMENTS

  <name> - The name to resolve.

OPTIONS

  -r, --recursive bool - Resolve until the result is an IPFS name. Default: false.

DESCRIPTION

  There are a number of mutable name protocols that can link among
  themselves and into IPNS. For example IPNS references can (currently)
  point at an IPFS object, and DNS links can point at other DNS links, IPNS
  entries, or IPFS objects. This command accepts any of these
  identifiers and resolves them to the referenced item.

  EXAMPLES

  Resolve the value of your identity:

    $ ipfs resolve /ipns/QmatmE9msSfkKxoffpHwNLNKgwZG8eT9Bud6YoPab52vpy
    /ipfs/Qmcqtw8FfrVSBaRmbWwHxt3AuySBhJLcvmFYi3Lbc4xnwj

  Resolve the value of another name:

    $ ipfs resolve /ipns/QmbCMUZw6JFeZ7Wp9jkzbye3Fzp2GGcPgC3nmeUjfVF87n
    /ipns/QmatmE9msSfkKxoffpHwNLNKgwZG8eT9Bud6YoPab52vpy

  Resolve the value of another name recursively:

    $ ipfs resolve -r /ipns/QmbCMUZw6JFeZ7Wp9jkzbye3Fzp2GGcPgC3nmeUjfVF87n
    /ipfs/Qmcqtw8FfrVSBaRmbWwHxt3AuySBhJLcvmFYi3Lbc4xnwj

  Resolve the value of an IPFS DAG path:

    $ ipfs resolve /ipfs/QmeZy1fGbwgVSrqbfh9fKQrAWgeyRnj7h8fsHS1oy3k99x/beep/boop
    /ipfs/QmYRMjyvAiHKN9UTi8Bzt1HUspmSRD8T8DwxfSMzLgBon1
```

## ipfs stats

```
USAGE
  ipfs stats - Query IPFS statistics.

SYNOPSIS
  ipfs stats

DESCRIPTION

  'ipfs stats' is a set of commands to help look at statistics
  for your IPFS node.

SUBCOMMANDS
  ipfs stats bitswap - Show some diagnostic information on the bitswap agent.
  ipfs stats bw      - Print ipfs bandwidth information.
  ipfs stats repo    - Get stats for the currently used repo.

  Use 'ipfs stats <subcmd> --help' for more information about each command.
```

## ipfs stats bitswap

```
USAGE
  ipfs stats bitswap - Show some diagnostic information on the bitswap agent.

SYNOPSIS
  ipfs stats bitswap
```

## ipfs stats bw

```
USAGE
  ipfs stats bw - Print ipfs bandwidth information.

SYNOPSIS
  ipfs stats bw [--peer=<peer> | -p] [--proto=<proto> | -t] [--poll] [--interval=<interval> | -i]

OPTIONS

  -p,   --peer     string - Specify a peer to print bandwidth for.
  -t,   --proto    string - Specify a protocol to print bandwidth for.
  --poll           bool   - Print bandwidth at an interval. Default: false.
  -i,   --interval string - Time interval to wait between updating output, if 'poll' is true.

      This accepts durations such as "300s", "1.5h" or "2h45m". Valid time units are:
      "ns", "us" (or "µs"), "ms", "s", "m", "h". Default: 1s.

DESCRIPTION

  'ipfs stats bw' prints bandwidth information for the ipfs daemon.
  It displays: TotalIn, TotalOut, RateIn, RateOut.

  By default, overall bandwidth and all protocols are shown. To limit bandwidth
  to a particular peer, use the 'peer' option along with that peer's multihash
  id. To specify a specific protocol, use the 'proto' option. The 'peer' and
  'proto' options cannot be specified simultaneously. The protocols that are
  queried using this method are outlined in the specification:
  https://github.com/libp2p/specs/blob/master/7-properties.md#757-protocol-multicodecs

  Example protocol options:
    - /ipfs/id/1.0.0
    - /ipfs/bitswap
    - /ipfs/dht

  Example:

      > ipfs stats bw -t /ipfs/bitswap
      Bandwidth
      TotalIn: 5.0MB
      TotalOut: 0B
      RateIn: 343B/s
      RateOut: 0B/s
      > ipfs stats bw -p QmepgFW7BHEtU4pZJdxaNiv75mKLLRQnPi1KaaXmQN4V1a
      Bandwidth
      TotalIn: 4.9MB
      TotalOut: 12MB
      RateIn: 0B/s
      RateOut: 0B/s
```

## ipfs stats repo

```
USAGE
  ipfs stats repo - Get stats for the currently used repo.

SYNOPSIS
  ipfs stats repo [--human]

OPTIONS

  --human bool - Output RepoSize in MiB. Default: false.

DESCRIPTION

  'ipfs repo stat' is a plumbing command that will scan the local
  set of stored objects and print repo statistics. It outputs to stdout:
  NumObjects      int Number of objects in the local repo.
  RepoPath        string The path to the repo being currently used.
  RepoSize        int Size in bytes that the repo is currently taking.
  Version         string The repo version.
```

## ipfs swarm

```
USAGE
  ipfs swarm - Interact with the swarm.

SYNOPSIS
  ipfs swarm

DESCRIPTION

  'ipfs swarm' is a tool to manipulate the network swarm. The swarm is the
  component that opens, listens for, and maintains connections to other
  ipfs peers in the internet.

SUBCOMMANDS
  ipfs swarm addrs                   - List known addresses. Useful for debugging.
  ipfs swarm connect <address>...    - Open connection to a given address.
  ipfs swarm disconnect <address>... - Close connection to a given address.
  ipfs swarm filters                 - Manipulate address filters.
  ipfs swarm peers                   - List peers with open connections.

  Use 'ipfs swarm <subcmd> --help' for more information about each command.
```

## ipfs swarm addrs

```
USAGE
  ipfs swarm addrs - List known addresses. Useful for debugging.

SYNOPSIS
  ipfs swarm addrs

DESCRIPTION

  'ipfs swarm addrs' lists all addresses this node is aware of.

SUBCOMMANDS
  ipfs swarm addrs local - List local addresses.

  Use 'ipfs swarm addrs <subcmd> --help' for more information about each command.
```

## ipfs swarm addrs local

```
USAGE
  ipfs swarm addrs local - List local addresses.

SYNOPSIS
  ipfs swarm addrs local [--id]

OPTIONS

  --id bool - Show peer ID in addresses. Default: false.

DESCRIPTION

  'ipfs swarm addrs local' lists all local addresses the node is listening on.
```

## ipfs swarm connect

```
USAGE
  ipfs swarm connect <address>... - Open connection to a given address.

SYNOPSIS
  ipfs swarm connect [--] <address>...

ARGUMENTS

  <address>... - Address of peer to connect to.

DESCRIPTION

  'ipfs swarm connect' opens a new direct connection to a peer address.

  The address format is an IPFS multiaddr:

  ipfs swarm connect /ip4/104.131.131.82/tcp/4001/ipfs/QmaCpDMGvV2BGHeYERUEnRQAwe3N8SzbUtfsmvsqQLuvuJ
```

## ipfs swarm disconnect

```
USAGE
  ipfs swarm disconnect <address>... - Close connection to a given address.

SYNOPSIS
  ipfs swarm disconnect [--] <address>...

ARGUMENTS

  <address>... - Address of peer to disconnect from.

DESCRIPTION

  'ipfs swarm disconnect' closes a connection to a peer address. The address
  format is an IPFS multiaddr:

  ipfs swarm disconnect /ip4/104.131.131.82/tcp/4001/ipfs/QmaCpDMGvV2BGHeYERUEnRQAwe3N8SzbUtfsmvsqQLuvuJ

  The disconnect is not permanent; if ipfs needs to talk to that address later,
  it will reconnect.
```

## ipfs swarm filters

```
USAGE
  ipfs swarm filters - Manipulate address filters.

SYNOPSIS
  ipfs swarm filters

DESCRIPTION

  'ipfs swarm filters' will list out currently applied filters. Its subcommands
  can be used to add or remove said filters. Filters are specified using the
  multiaddr-filter format:

  Example:

      /ip4/192.168.0.0/ipcidr/16

  Where the above is equivalent to the standard CIDR:

      192.168.0.0/16

  Filters default to those specified under the "Swarm.AddrFilters" config key.

SUBCOMMANDS
  ipfs swarm filters add <address>... - Add an address filter.
  ipfs swarm filters rm <address>...  - Remove an address filter.

  Use 'ipfs swarm filters <subcmd> --help' for more information about each command.
```

## ipfs swarm filters add

```
USAGE
  ipfs swarm filters add <address>... - Add an address filter.

SYNOPSIS
  ipfs swarm filters add [--] <address>...

ARGUMENTS

  <address>... - Multiaddr to filter.

DESCRIPTION

  'ipfs swarm filters add' will add an address filter to the daemons swarm.
  Filters applied this way will not persist daemon reboots, to achieve that,
  add your filters to the ipfs config file.
```

## ipfs swarm filters rm

```
USAGE
  ipfs swarm filters rm <address>... - Remove an address filter.

SYNOPSIS
  ipfs swarm filters rm [--] <address>...

ARGUMENTS

  <address>... - Multiaddr filter to remove.

DESCRIPTION

  'ipfs swarm filters rm' will remove an address filter from the daemons swarm.
  Filters removed this way will not persist daemon reboots, to achieve that,
  remove your filters from the ipfs config file.
```

## ipfs swarm peers

```
USAGE
  ipfs swarm peers - List peers with open connections.

SYNOPSIS
  ipfs swarm peers [--verbose | -v] [--streams] [--latency]

OPTIONS

  -v,      --verbose bool - display all extra information.
  --streams          bool - Also list information about open streams for each peer.
  --latency          bool - Also list information about latency to each peer.

DESCRIPTION

  'ipfs swarm peers' lists the set of peers this node is connected to.
```

## ipfs tar

```
USAGE
  ipfs tar - Utility functions for tar files in ipfs.

SYNOPSIS
  ipfs tar

SUBCOMMANDS
  ipfs tar add <file> - Import a tar file into ipfs.
  ipfs tar cat <path> - Export a tar file from IPFS.

  Use 'ipfs tar <subcmd> --help' for more information about each command.
```

## ipfs tar add

```
USAGE
  ipfs tar add <file> - Import a tar file into ipfs.

SYNOPSIS
  ipfs tar add [--] <file>

ARGUMENTS

  <file> - Tar file to add.

DESCRIPTION

  'ipfs tar add' will parse a tar file and create a merkledag structure to
  represent it.
```

## ipfs tar cat

```
USAGE
  ipfs tar cat <path> - Export a tar file from IPFS.

SYNOPSIS
  ipfs tar cat [--] <path>

ARGUMENTS

  <path> - ipfs path of archive to export.

DESCRIPTION

  'ipfs tar cat' will export a tar file from a previously imported one in IPFS.
```

## ipfs tour

```
USAGE
  ipfs tour [<id>] - Provide an introduction to IPFS.

SYNOPSIS
  ipfs tour [--] [<id>]

ARGUMENTS

  [<id>] - The id of the topic you would like to tour.

DESCRIPTION

  This is a tour that takes you through various IPFS concepts,
  features, and tools to make sure you get up to speed with
  IPFS very quickly. To start, run:

      ipfs tour

SUBCOMMANDS
  ipfs tour list    - Show a list of IPFS Tour topics.
  ipfs tour next    - Show the next IPFS Tour topic.
  ipfs tour restart - Restart the IPFS Tour.

  Use 'ipfs tour <subcmd> --help' for more information about each command.
```

## ipfs tour list

```
USAGE
  ipfs tour list - Show a list of IPFS Tour topics.

SYNOPSIS
  ipfs tour list
```

## ipfs tour next

```
USAGE
  ipfs tour next - Show the next IPFS Tour topic.

SYNOPSIS
  ipfs tour next
```

## ipfs tour restart

```
USAGE
  ipfs tour restart - Restart the IPFS Tour.

SYNOPSIS
  ipfs tour restart
```

## ipfs update

```
ipfs-update is an 'external' command.
It does not currently appear to be installed.
Please refer to the ipfs documentation for instructions.
```

## ipfs version

```
USAGE
  ipfs version - Show ipfs version information.

SYNOPSIS
  ipfs version [--number | -n] [--commit] [--repo] [--all]

OPTIONS

  -n,     --number bool - Only show the version number. Default: false.
  --commit         bool - Show the commit hash. Default: false.
  --repo           bool - Show repo version. Default: false.
  --all            bool - Show all version information. Default: false.

DESCRIPTION

  Returns the current version of ipfs and exits.
```


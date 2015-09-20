# ipfs command reference

generated on 2015-09-20 12:36:32.483398

- [ipfs](docs/commands/#ipfs)
- [ipfs add](docs/commands/#ipfs-add)
- [ipfs bitswap](docs/commands/#ipfs-bitswap)
- [ipfs bitswap stat](docs/commands/#ipfs-bitswap-stat)
- [ipfs bitswap wantlist](docs/commands/#ipfs-bitswap-wantlist)
- [ipfs block](docs/commands/#ipfs-block)
- [ipfs block get](docs/commands/#ipfs-block-get)
- [ipfs block put](docs/commands/#ipfs-block-put)
- [ipfs block stat](docs/commands/#ipfs-block-stat)
- [ipfs bootstrap](docs/commands/#ipfs-bootstrap)
- [ipfs bootstrap add](docs/commands/#ipfs-bootstrap-add)
- [ipfs bootstrap list](docs/commands/#ipfs-bootstrap-list)
- [ipfs bootstrap rm](docs/commands/#ipfs-bootstrap-rm)
- [ipfs cat](docs/commands/#ipfs-cat)
- [ipfs commands](docs/commands/#ipfs-commands)
- [ipfs config](docs/commands/#ipfs-config)
- [ipfs config edit](docs/commands/#ipfs-config-edit)
- [ipfs config replace](docs/commands/#ipfs-config-replace)
- [ipfs config show](docs/commands/#ipfs-config-show)
- [ipfs daemon](docs/commands/#ipfs-daemon)
- [ipfs dht](docs/commands/#ipfs-dht)
- [ipfs dht findpeer](docs/commands/#ipfs-dht-findpeer)
- [ipfs dht findprovs](docs/commands/#ipfs-dht-findprovs)
- [ipfs dht get](docs/commands/#ipfs-dht-get)
- [ipfs dht put](docs/commands/#ipfs-dht-put)
- [ipfs dht query](docs/commands/#ipfs-dht-query)
- [ipfs diag](docs/commands/#ipfs-diag)
- [ipfs diag net](docs/commands/#ipfs-diag-net)
- [ipfs dns](docs/commands/#ipfs-dns)
- [ipfs file](docs/commands/#ipfs-file)
- [ipfs file ls](docs/commands/#ipfs-file-ls)
- [ipfs get](docs/commands/#ipfs-get)
- [ipfs id](docs/commands/#ipfs-id)
- [ipfs init](docs/commands/#ipfs-init)
- [ipfs log](docs/commands/#ipfs-log)
- [ipfs log level](docs/commands/#ipfs-log-level)
- [ipfs log tail](docs/commands/#ipfs-log-tail)
- [ipfs ls](docs/commands/#ipfs-ls)
- [ipfs mount](docs/commands/#ipfs-mount)
- [ipfs name](docs/commands/#ipfs-name)
- [ipfs name publish](docs/commands/#ipfs-name-publish)
- [ipfs name resolve](docs/commands/#ipfs-name-resolve)
- [ipfs object](docs/commands/#ipfs-object)
- [ipfs object data](docs/commands/#ipfs-object-data)
- [ipfs object get](docs/commands/#ipfs-object-get)
- [ipfs object links](docs/commands/#ipfs-object-links)
- [ipfs object new](docs/commands/#ipfs-object-new)
- [ipfs object patch](docs/commands/#ipfs-object-patch)
- [ipfs object put](docs/commands/#ipfs-object-put)
- [ipfs object stat](docs/commands/#ipfs-object-stat)
- [ipfs pin](docs/commands/#ipfs-pin)
- [ipfs pin add](docs/commands/#ipfs-pin-add)
- [ipfs pin ls](docs/commands/#ipfs-pin-ls)
- [ipfs pin rm](docs/commands/#ipfs-pin-rm)
- [ipfs ping](docs/commands/#ipfs-ping)
- [ipfs refs](docs/commands/#ipfs-refs)
- [ipfs refs local](docs/commands/#ipfs-refs-local)
- [ipfs repo](docs/commands/#ipfs-repo)
- [ipfs repo gc](docs/commands/#ipfs-repo-gc)
- [ipfs resolve](docs/commands/#ipfs-resolve)
- [ipfs stats](docs/commands/#ipfs-stats)
- [ipfs stats bw](docs/commands/#ipfs-stats-bw)
- [ipfs swarm](docs/commands/#ipfs-swarm)
- [ipfs swarm addrs](docs/commands/#ipfs-swarm-addrs)
- [ipfs swarm addrs local](docs/commands/#ipfs-swarm-addrs-local)
- [ipfs swarm connect](docs/commands/#ipfs-swarm-connect)
- [ipfs swarm disconnect](docs/commands/#ipfs-swarm-disconnect)
- [ipfs swarm filters](docs/commands/#ipfs-swarm-filters)
- [ipfs swarm filters add](docs/commands/#ipfs-swarm-filters-add)
- [ipfs swarm filters rm](docs/commands/#ipfs-swarm-filters-rm)
- [ipfs swarm peers](docs/commands/#ipfs-swarm-peers)
- [ipfs tour](docs/commands/#ipfs-tour)
- [ipfs tour list](docs/commands/#ipfs-tour-list)
- [ipfs tour next](docs/commands/#ipfs-tour-next)
- [ipfs tour restart](docs/commands/#ipfs-tour-restart)
- [ipfs update](docs/commands/#ipfs-update)
- [ipfs version](docs/commands/#ipfs-version)

## ipfs

```
ipfs - global p2p merkle-dag filesystem

OPTIONS:

    -c,   --config string - Path to the configuration file to use
    -D,   --debug  bool   - Operate in debug mode
    --help         bool   - Show the full command help text
    -h             bool   - Show a short version of the command help text
    -L,   --local  bool   - Run the command locally, instead of using the daemon
    --api          string - Overrides the routing option (dht, supernode)

SUBCOMMANDS:

    ipfs daemon                 - Run a network-connected IPFS node
    ipfs object                 - Interact with ipfs objects
    ipfs get <ipfs-path>        - Download IPFS objects
    ipfs commands               - List all available commands.
    ipfs swarm                  - swarm inspection tool
    ipfs update                 - Downloads and installs updates for IPFS (disabled)
    ipfs cat <ipfs-path>...     - Show IPFS object data
    ipfs resolve <name>         - Resolve the value of names to IPFS
    ipfs init                   - Initializes IPFS config file
    ipfs ping <peer ID>...      - send echo request packets to IPFS hosts
    ipfs log                    - Interact with the daemon log output
    ipfs pin                    - Pin (and unpin) objects to local storage
    ipfs stats                  - Query IPFS statistics
    ipfs refs <ipfs-path>...    - Lists links (references) from an object
    ipfs bootstrap              - Show or edit the list of bootstrap peers
    ipfs name                   - IPFS namespace (IPNS) tool
    ipfs diag                   - Generates diagnostic reports
    ipfs bitswap                - A set of commands to manipulate the bitswap agent
    ipfs dht                    - Issue commands directly through the DHT
    ipfs mount                  - Mounts IPFS to the filesystem (read-only)
    ipfs id [<peerid>]          - Show IPFS Node ID info
    ipfs tour [<id>]            - An introduction to IPFS
    ipfs ls <ipfs-path>...      - List links from an object.
    ipfs file                   - Interact with ipfs objects representing Unix filesystems
    ipfs repo                   - Manipulate the IPFS repo
    ipfs add <path>...          - Add an object to ipfs.
    ipfs version                - Shows ipfs version information
    ipfs config <key> [<value>] - get and set IPFS config values
    ipfs block                  - Manipulate raw IPFS blocks
    ipfs dns <domain-name>      - DNS link resolver

    Use 'ipfs <subcmd> --help' for more information about each command.

DESCRIPTION:

    BASIC COMMANDS
    
        init          Initialize ipfs local configuration
        add <path>    Add an object to ipfs
        cat <ref>     Show ipfs object data
        get <ref>     Download ipfs objects
        ls <ref>      List links from an object
        refs <ref>    List hashes of links from an object
    
    DATA STRUCTURE COMMANDS
    
        block         Interact with raw blocks in the datastore
        object        Interact with raw dag nodes
        file          Interact with Unix filesystem objects
    
    ADVANCED COMMANDS
    
        daemon        Start a long-running daemon process
        mount         Mount an ipfs read-only mountpoint
        resolve       Resolve any type of name
        name          Publish or resolve IPNS names
        dns           Resolve DNS links
        pin           Pin objects to local storage
        repo gc       Garbage collect unpinned objects
    
    NETWORK COMMANDS
    
        id            Show info about ipfs peers
        bootstrap     Add or remove bootstrap peers
        swarm         Manage connections to the p2p network
        dht           Query the dht for values or peers
        ping          Measure the latency of a connection
        diag          Print diagnostics
    
    TOOL COMMANDS
    
        config        Manage configuration
        version       Show ipfs version information
        update        Download and apply go-ipfs updates
        commands      List all available commands
    
    Use 'ipfs <command> --help' to learn more about each command.
```

## ipfs add

```
ipfs add <path>... - Add an object to ipfs.

ARGUMENTS:

    <path>... - The path to a file to be added to IPFS

OPTIONS:

    -r,     --recursive           bool   - Add directory paths recursively
    -q,     --quiet               bool   - Write minimal output
    -p,     --progress            bool   - Stream progress data
    -t,     --trickle             bool   - Use trickle-dag format for dag generation
    -n,     --only-hash           bool   - Only chunk and hash - do not write to disk
    -w,     --wrap-with-directory bool   - Wrap files with a directory object
    --hidden                      bool   - Include files that are hidden
    -s,     --chunker             string - chunking algorithm to use

DESCRIPTION:

    Adds contents of <path> to ipfs. Use -r to add directories.
    Note that directories are added recursively, to form the ipfs
    MerkleDAG. A smarter partial add with a staging area (like git)
    remains to be implemented.
```

## ipfs bitswap

```
ipfs bitswap - A set of commands to manipulate the bitswap agent

SUBCOMMANDS:

    ipfs bitswap wantlist - Show blocks currently on the wantlist
    ipfs bitswap stat     - show some diagnostic information on the bitswap agent

    Use 'ipfs bitswap <subcmd> --help' for more information about each command.
```

## ipfs bitswap stat

```
ipfs bitswap stat - show some diagnostic information on the bitswap agent
```

## ipfs bitswap wantlist

```
ipfs bitswap wantlist - Show blocks currently on the wantlist

OPTIONS:

    -p, --peer string - specify which peer to show wantlist for (default self)

DESCRIPTION:

    Print out all blocks currently on the bitswap wantlist for the local peer
```

## ipfs block

```
ipfs block - Manipulate raw IPFS blocks

SUBCOMMANDS:

    ipfs block stat <key> - Print information of a raw IPFS block
    ipfs block get <key>  - Get a raw IPFS block
    ipfs block put <data> - Stores input as an IPFS block

    Use 'ipfs block <subcmd> --help' for more information about each command.

DESCRIPTION:

    'ipfs block' is a plumbing command used to manipulate raw ipfs blocks.
    Reads from stdin or writes to stdout, and <key> is a base58 encoded
    multihash.
```

## ipfs block get

```
ipfs block get <key> - Get a raw IPFS block

ARGUMENTS:

    <key> - The base58 multihash of an existing block to get

DESCRIPTION:

    'ipfs block get' is a plumbing command for retreiving raw ipfs blocks.
    It outputs to stdout, and <key> is a base58 encoded multihash.
```

## ipfs block put

```
ipfs block put <data> - Stores input as an IPFS block

ARGUMENTS:

    <data> - The data to be stored as an IPFS block

DESCRIPTION:

    ipfs block put is a plumbing command for storing raw ipfs blocks.
    It reads from stdin, and <key> is a base58 encoded multihash.
```

## ipfs block stat

```
ipfs block stat <key> - Print information of a raw IPFS block

ARGUMENTS:

    <key> - The base58 multihash of an existing block to get

DESCRIPTION:

    'ipfs block stat' is a plumbing command for retreiving information
    on raw ipfs blocks. It outputs the following to stdout:
    
    	Key  - the base58 encoded multihash
    	Size - the size of the block in bytes
```

## ipfs bootstrap

```
ipfs bootstrap - Show or edit the list of bootstrap peers

SUBCOMMANDS:

    ipfs bootstrap list            - Show peers in the bootstrap list
    ipfs bootstrap add [<peer>]... - Add peers to the bootstrap list
    ipfs bootstrap rm [<peer>]...  - Removes peers from the bootstrap list

    Use 'ipfs bootstrap <subcmd> --help' for more information about each command.

DESCRIPTION:

    Running 'ipfs bootstrap' with no arguments will run 'ipfs bootstrap list'.
    
    SECURITY WARNING:
    
    The bootstrap command manipulates the "bootstrap list", which contains
    the addresses of bootstrap nodes. These are the *trusted peers* from
    which to learn about other peers in the network. Only edit this list
    if you understand the risks of adding or removing nodes from this list.
```

## ipfs bootstrap add

```
ipfs bootstrap add [<peer>]... - Add peers to the bootstrap list

ARGUMENTS:

    [<peer>]... - A peer to add to the bootstrap list (in the format '<multiaddr>/<peerID>')

OPTIONS:

    --default bool - add default bootstrap nodes

DESCRIPTION:

    Outputs a list of peers that were added (that weren't already
    in the bootstrap list).
    
    SECURITY WARNING:
    
    The bootstrap command manipulates the "bootstrap list", which contains
    the addresses of bootstrap nodes. These are the *trusted peers* from
    which to learn about other peers in the network. Only edit this list
    if you understand the risks of adding or removing nodes from this list.
```

## ipfs bootstrap list

```
ipfs bootstrap list - Show peers in the bootstrap list

DESCRIPTION:

    Peers are output in the format '<multiaddr>/<peerID>'.
```

## ipfs bootstrap rm

```
ipfs bootstrap rm [<peer>]... - Removes peers from the bootstrap list

ARGUMENTS:

    [<peer>]... - A peer to add to the bootstrap list (in the format '<multiaddr>/<peerID>')

OPTIONS:

    --all bool - Remove all bootstrap peers.

DESCRIPTION:

    Outputs the list of peers that were removed.
    
    SECURITY WARNING:
    
    The bootstrap command manipulates the "bootstrap list", which contains
    the addresses of bootstrap nodes. These are the *trusted peers* from
    which to learn about other peers in the network. Only edit this list
    if you understand the risks of adding or removing nodes from this list.
```

## ipfs cat

```
ipfs cat <ipfs-path>... - Show IPFS object data

ARGUMENTS:

    <ipfs-path>... - The path to the IPFS object(s) to be outputted

DESCRIPTION:

    Retrieves the object named by <ipfs-or-ipns-path> and outputs the data
    it contains.
```

## ipfs commands

```
ipfs commands - List all available commands.

DESCRIPTION:

    Lists all available commands (and subcommands) and exits.
```

## ipfs config

```
ipfs config <key> [<value>] - get and set IPFS config values

ARGUMENTS:

    <key>     - The key of the config entry (e.g. "Addresses.API")
    [<value>] - The value to set the config entry to

OPTIONS:

    --bool bool - Set a boolean value
    --json bool - Parse stringified JSON

SUBCOMMANDS:

    ipfs config show           - Outputs the content of the config file
    ipfs config edit           - Opens the config file for editing in $EDITOR
    ipfs config replace <file> - Replaces the config with <file>

    Use 'ipfs config <subcmd> --help' for more information about each command.

DESCRIPTION:

    ipfs config controls configuration variables. It works
    much like 'git config'. The configuration values are stored in a config
    file inside your IPFS repository.
    
    EXAMPLES:
    
    Get the value of the 'datastore.path' key:
    
      ipfs config datastore.path
    
    Set the value of the 'datastore.path' key:
    
      ipfs config datastore.path ~/.ipfs/datastore
```

## ipfs config edit

```
ipfs config edit - Opens the config file for editing in $EDITOR

DESCRIPTION:

    To use 'ipfs config edit', you must have the $EDITOR environment
    variable set to your preferred text editor.
```

## ipfs config replace

```
ipfs config replace <file> - Replaces the config with <file>

ARGUMENTS:

    <file> - The file to use as the new config

DESCRIPTION:

    Make sure to back up the config file first if neccessary, this operation
    can't be undone.
```

## ipfs config show

```
ipfs config show - Outputs the content of the config file

DESCRIPTION:

    WARNING: Your private key is stored in the config file, and it will be
    included in the output of this command.
```

## ipfs daemon

```
ipfs daemon - Run a network-connected IPFS node

OPTIONS:

    --init                         bool   - Initialize IPFS with default settings if not already initialized
    --routing                      string - Overrides the routing option (dht, supernode)
    --mount                        bool   - Mounts IPFS to the filesystem
    --writable                     bool   - Enable writing objects (with POST, PUT and DELETE)
    --mount-ipfs                   string - Path to the mountpoint for IPFS (if using --mount)
    --mount-ipns                   string - Path to the mountpoint for IPNS (if using --mount)
    --unrestricted-api             bool   - Allow API access to unlisted hashes
    --disable-transport-encryption bool   - Disable transport encryption (for debugging protocols)

DESCRIPTION:

    'ipfs daemon' runs a persistent IPFS daemon that can serve commands
    over the network. Most applications that use IPFS will do so by
    communicating with a daemon over the HTTP API. While the daemon is
    running, calls to 'ipfs' commands will be sent over the network to
    the daemon.
    
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
    
    IPFS supports passing arbitrary headers to the API and Gateway. You can
    do this by setting headers on the API.HTTPHeaders and Gateway.HTTPHeaders
    keys:
    
    	ipfs config --json API.HTTPHeaders.X-Special-Header '["so special :)"]'
    	ipfs config --json Gateway.HTTPHeaders.X-Special-Header '["so special :)"]'
    
    Note that the value of the keys is an _array_ of strings. This is because
    headers can have more than one value, and it is convenient to pass through
    to other libraries.
    
    CORS Headers (for API)
    
    You can setup CORS headers the same way:
    
    	ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin '["*"]'
    	ipfs config --json API.HTTPHeaders.Access-Control-Allow-Methods '["PUT", "GET", "POST"]'
    	ipfs config --json API.HTTPHeaders.Access-Control-Allow-Credentials '["true"]'
    
    
    DEPRECATION NOTICE
    
    Previously, IPFS used an environment variable as seen below:
    
       export API_ORIGIN="http://localhost:8888/"
    
    This is deprecated. It is still honored in this version, but will be removed in a
    future version, along with this notice. Please move to setting the HTTP Headers.
```

## ipfs dht

```
ipfs dht - Issue commands directly through the DHT

SUBCOMMANDS:

    ipfs dht query <peerID>...    - Run a 'findClosestPeers' query through the DHT
    ipfs dht findprovs <key>...   - Run a 'FindProviders' query through the DHT
    ipfs dht findpeer <peerID>... - Run a 'FindPeer' query through the DHT
    ipfs dht get <key>...         - Run a 'GetValue' query through the DHT
    ipfs dht put <key> <value>    - Run a 'PutValue' query through the DHT

    Use 'ipfs dht <subcmd> --help' for more information about each command.
```

## ipfs dht findpeer

```
ipfs dht findpeer <peerID>... - Run a 'FindPeer' query through the DHT

ARGUMENTS:

    <peerID>... - The peer to search for
```

## ipfs dht findprovs

```
ipfs dht findprovs <key>... - Run a 'FindProviders' query through the DHT

ARGUMENTS:

    <key>... - The key to find providers for

OPTIONS:

    -v, --verbose bool - Write extra information

DESCRIPTION:

    FindProviders will return a list of peers who are able to provide the value requested.
```

## ipfs dht get

```
ipfs dht get <key>... - Run a 'GetValue' query through the DHT

ARGUMENTS:

    <key>... - The key to find a value for

OPTIONS:

    -v, --verbose bool - Write extra information

DESCRIPTION:

    GetValue will return the value stored in the dht at the given key.
```

## ipfs dht put

```

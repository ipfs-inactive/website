section: Docs
title: commands
url: docs/commands
save_as: docs/commands/index.html

# ipfs command reference

generated on 2016-02-23 14:41:10.728008

- [ipfs](#ipfs)
- [ipfs add](#ipfs-add)
- [ipfs bitswap](#ipfs-bitswap)
- [ipfs bitswap stat](#ipfs-bitswap-stat)
- [ipfs bitswap unwant](#ipfs-bitswap-unwant)
- [ipfs bitswap wantlist](#ipfs-bitswap-wantlist)
- [ipfs block](#ipfs-block)
- [ipfs block get](#ipfs-block-get)
- [ipfs block put](#ipfs-block-put)
- [ipfs block stat](#ipfs-block-stat)
- [ipfs bootstrap](#ipfs-bootstrap)
- [ipfs bootstrap add](#ipfs-bootstrap-add)
- [ipfs bootstrap list](#ipfs-bootstrap-list)
- [ipfs bootstrap rm](#ipfs-bootstrap-rm)
- [ipfs cat](#ipfs-cat)
- [ipfs commands](#ipfs-commands)
- [ipfs config](#ipfs-config)
- [ipfs config edit](#ipfs-config-edit)
- [ipfs config replace](#ipfs-config-replace)
- [ipfs config show](#ipfs-config-show)
- [ipfs daemon](#ipfs-daemon)
- [ipfs dht](#ipfs-dht)
- [ipfs dht findpeer](#ipfs-dht-findpeer)
- [ipfs dht findprovs](#ipfs-dht-findprovs)
- [ipfs dht get](#ipfs-dht-get)
- [ipfs dht put](#ipfs-dht-put)
- [ipfs dht query](#ipfs-dht-query)
- [ipfs diag](#ipfs-diag)
- [ipfs diag net](#ipfs-diag-net)
- [ipfs diag sys](#ipfs-diag-sys)
- [ipfs dns](#ipfs-dns)
- [ipfs file](#ipfs-file)
- [ipfs file ls](#ipfs-file-ls)
- [ipfs get](#ipfs-get)
- [ipfs id](#ipfs-id)
- [ipfs init](#ipfs-init)
- [ipfs log](#ipfs-log)
- [ipfs log level](#ipfs-log-level)
- [ipfs log tail](#ipfs-log-tail)
- [ipfs ls](#ipfs-ls)
- [ipfs mount](#ipfs-mount)
- [ipfs name](#ipfs-name)
- [ipfs name publish](#ipfs-name-publish)
- [ipfs name resolve](#ipfs-name-resolve)
- [ipfs object](#ipfs-object)
- [ipfs object data](#ipfs-object-data)
- [ipfs object get](#ipfs-object-get)
- [ipfs object links](#ipfs-object-links)
- [ipfs object new](#ipfs-object-new)
- [ipfs object patch](#ipfs-object-patch)
- [ipfs object put](#ipfs-object-put)
- [ipfs object stat](#ipfs-object-stat)
- [ipfs pin](#ipfs-pin)
- [ipfs pin add](#ipfs-pin-add)
- [ipfs pin ls](#ipfs-pin-ls)
- [ipfs pin rm](#ipfs-pin-rm)
- [ipfs ping](#ipfs-ping)
- [ipfs refs](#ipfs-refs)
- [ipfs refs local](#ipfs-refs-local)
- [ipfs repo](#ipfs-repo)
- [ipfs repo gc](#ipfs-repo-gc)
- [ipfs resolve](#ipfs-resolve)
- [ipfs stats](#ipfs-stats)
- [ipfs stats bw](#ipfs-stats-bw)
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
ipfs - global p2p merkle-dag filesystem

OPTIONS:

    -c,   --config string - Path to the configuration file to use
    -D,   --debug  bool   - Operate in debug mode
    --help         bool   - Show the full command help text
    -h             bool   - Show a short version of the command help text
    -L,   --local  bool   - Run the command locally, instead of using the daemon
    --api          string - Use a specific API instance (defaults to /ip4/127.0.0.1/tcp/5001)

SUBCOMMANDS:

    ipfs commands               - List all available commands.
    ipfs get <ipfs-path>        - Download IPFS objects
    ipfs id [<peerid>]          - Show IPFS Node ID info
    ipfs dht                    - Issue commands directly through the DHT
    ipfs daemon                 - Run a network-connected IPFS node
    ipfs refs <ipfs-path>...    - Lists links (references) from an object
    ipfs diag                   - Generates diagnostic reports
    ipfs version                - Shows ipfs version information
    ipfs config <key> [<value>] - get and set IPFS config values
    ipfs bitswap                - A set of commands to manipulate the bitswap agent
    ipfs swarm                  - swarm inspection tool
    ipfs dns <domain-name>      - DNS link resolver
    ipfs file                   - Interact with ipfs objects representing Unix filesystems
    ipfs log                    - Interact with the daemon log output
    ipfs pin                    - Pin (and unpin) objects to local storage
    ipfs block                  - Manipulate raw IPFS blocks
    ipfs update [<args>]...     -
    ipfs ls <ipfs-path>...      - List links from an object.
    ipfs mount                  - Mounts IPFS to the filesystem (read-only)
    ipfs ping <peer ID>...      - send echo request packets to IPFS hosts
    ipfs repo                   - Manipulate the IPFS repo
    ipfs bootstrap              - Show or edit the list of bootstrap peers
    ipfs stats                  - Query IPFS statistics
    ipfs tar                    - utility functions for tar files in ipfs
    ipfs init                   - Initializes IPFS config file
    ipfs cat <ipfs-path>...     - Show IPFS object data
    ipfs add <path>...          - Add an object to ipfs.
    ipfs object                 - Interact with ipfs objects
    ipfs name                   - IPFS namespace (IPNS) tool
    ipfs resolve <name>         - Resolve the value of names to IPFS
    ipfs tour [<id>]            - An introduction to IPFS

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

    ipfs uses a repository in the local file system. By default, the repo is located
    at ~/.ipfs. To change the repo location, set the $IPFS_PATH environment variable:

        export IPFS_PATH=/path/to/ipfsrepo
```

## ipfs add

```
ipfs add <path>... - Add an object to ipfs.

ARGUMENTS:

    <path>... - The path to a file to be added to IPFS

OPTIONS:

    -r, --recursive           bool   - Add directory paths recursively
    -q, --quiet               bool   - Write minimal output
    -p, --progress            bool   - Stream progress data
    -t, --trickle             bool   - Use trickle-dag format for dag generation
    -n, --only-hash           bool   - Only chunk and hash - do not write to disk
    -w, --wrap-with-directory bool   - Wrap files with a directory object
    -H, --hidden              bool   - Include files that are hidden
    -s, --chunker             string - chunking algorithm to use

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

    ipfs bitswap wantlist        - Show blocks currently on the wantlist
    ipfs bitswap stat            - show some diagnostic information on the bitswap agent
    ipfs bitswap unwant <key>... - Remove a given block from your wantlist

    Use 'ipfs bitswap <subcmd> --help' for more information about each command.
```

## ipfs bitswap stat

```
ipfs bitswap stat - show some diagnostic information on the bitswap agent
```

## ipfs bitswap unwant

```
ipfs bitswap unwant <key>... - Remove a given block from your wantlist

ARGUMENTS:

    <key>... - key to remove from your wantlist
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

OPTIONS:

    -f, --flags bool - Show command flags

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
    --enable-gc                    bool   - Enable automatic periodic repo garbage collection

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

    Shutdown

    To shutdown, kill, quit, or otherwise stop the daemon, send a SIGTERM signal.
    If it persists, send a second. This can be done by pressing Ctrl+C twice.

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

    ipfs dht findprovs <key>...   - Run a 'FindProviders' query through the DHT
    ipfs dht findpeer <peerID>... - Run a 'FindPeer' query through the DHT
    ipfs dht get <key>...         - Run a 'GetValue' query through the DHT
    ipfs dht put <key> <value>    - Run a 'PutValue' query through the DHT
    ipfs dht query <peerID>...    - Run a 'findClosestPeers' query through the DHT

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
ipfs dht put <key> <value> - Run a 'PutValue' query through the DHT

ARGUMENTS:

    <key>   - The key to store the value at
    <value> - The value to store

OPTIONS:

    -v, --verbose bool - Write extra information

DESCRIPTION:

    PutValue will store the given key value pair in the dht.
```

## ipfs dht query

```
ipfs dht query <peerID>... - Run a 'findClosestPeers' query through the DHT

ARGUMENTS:

    <peerID>... - The peerID to run the query against

OPTIONS:

    -v, --verbose bool - Write extra information
```

## ipfs diag

```
ipfs diag - Generates diagnostic reports

SUBCOMMANDS:

    ipfs diag net - Generates a network diagnostics report
    ipfs diag sys - prints out system diagnostic information.

    Use 'ipfs diag <subcmd> --help' for more information about each command.
```

## ipfs diag net

```
ipfs diag net - Generates a network diagnostics report

OPTIONS:

    --vis string - output vis. one of: d3, dot

DESCRIPTION:

    Sends out a message to each node in the network recursively
    requesting a listing of data about them including number of
    connected peers and latencies between them.

    The given timeout will be decremented 2s at every network hop,
    ensuring peers try to return their diagnostics before the initiator's
    timeout. If the timeout is too small, some peers may not be reached.
    30s and 60s are reasonable timeout values, though network vary.
    The default timeout is 20 seconds.

    The 'vis' option may be used to change the output format.
    four formats are supported:
     * plain text - easy to read
     * d3 - json ready to be fed into d3view
     * dot - graphviz format

    The d3 format will output a json object ready to be consumed by
    the chord network viewer, available at the following hash:

        /ipfs/QmbesKpGyQGd5jtJFUGEB1ByPjNFpukhnKZDnkfxUiKn38

    To view your diag output, 'ipfs add' the d3 vis output, and
    open the following link:

    	http://gateway.ipfs.io/ipfs/QmbesKpGyQGd5jtJFUGEB1ByPjNFpukhnKZDnkfxUiKn38/chord#<your hash>

    The dot format can be fed into graphviz and other programs
    that consume the dot format to generate graphs of the network.
```

## ipfs diag sys

```
ipfs diag sys - prints out system diagnostic information.

DESCRIPTION:

    Prints out information about your computer to aid in easier debugging.
```

## ipfs dns

```
ipfs dns <domain-name> - DNS link resolver

ARGUMENTS:

    <domain-name> - The domain-name name to resolve.

OPTIONS:

    -r, --recursive bool - Resolve until the result is not a DNS link

DESCRIPTION:

    Multihashes are hard to remember, but domain names are usually easy to
    remember.  To create memorable aliases for multihashes, DNS TXT
    records can point to other DNS links, IPFS objects, IPNS keys, etc.
    This command resolves those links to the referenced object.

    For example, with this DNS TXT record:

      ipfs.io. TXT "dnslink=/ipfs/QmRzTuh2Lpuz7Gr39stNr6mTFdqAghsZec1JoUnfySUzcy ..."

    The resolver will give:

      > ipfs dns ipfs.io
      /ipfs/QmRzTuh2Lpuz7Gr39stNr6mTFdqAghsZec1JoUnfySUzcy

    And with this DNS TXT record:

      ipfs.ipfs.io. TXT "dnslink=/dns/ipfs.io ..."

    The resolver will give:

      > ipfs dns ipfs.io
      /dns/ipfs.io
      > ipfs dns --recursive
      /ipfs/QmRzTuh2Lpuz7Gr39stNr6mTFdqAghsZec1JoUnfySUzcy
```

## ipfs file

```
ipfs file - Interact with ipfs objects representing Unix filesystems

SUBCOMMANDS:

    ipfs file ls <ipfs-path>... - List directory contents for Unix-filesystem objects

    Use 'ipfs file <subcmd> --help' for more information about each command.

DESCRIPTION:

    'ipfs file' provides a familar interface to filesystems represtented
    by IPFS objects that hides IPFS-implementation details like layout
    objects (e.g. fanout and chunking).
```

## ipfs file ls

```
ipfs file ls <ipfs-path>... - List directory contents for Unix-filesystem objects

ARGUMENTS:

    <ipfs-path>... - The path to the IPFS object(s) to list links from

DESCRIPTION:

    Retrieves the object named by <ipfs-or-ipns-path> and displays the
    contents.

    The JSON output contains size information.  For files, the child size
    is the total size of the file contents.  For directories, the child
    size is the IPFS link size.
```

## ipfs get

```
ipfs get <ipfs-path> - Download IPFS objects

ARGUMENTS:

    <ipfs-path> - The path to the IPFS object(s) to be outputted

OPTIONS:

    -o, --output            string - The path where output should be stored
    -a, --archive           bool   - Output a TAR archive
    -C, --compress          bool   - Compress the output with GZIP compression
    -l, --compression-level int    - The level of compression (1-9)

DESCRIPTION:

    Retrieves the object named by <ipfs-or-ipns-path> and stores the data to disk.

    By default, the output will be stored at ./<ipfs-path>, but an alternate path
    can be specified with '--output=<path>' or '-o=<path>'.

    To output a TAR archive instead of unpacked files, use '--archive' or '-a'.

    To compress the output with GZIP compression, use '--compress' or '-C'. You
    may also specify the level of compression by specifying '-l=<1-9>'.
```

## ipfs id

```
ipfs id [<peerid>] - Show IPFS Node ID info

ARGUMENTS:

    [<peerid>] - peer.ID of node to look up

OPTIONS:

    -f, --format string - optional output format

DESCRIPTION:

    Prints out information about the specified peer,
    if no peer is specified, prints out local peers info.

    ipfs id supports the format option for output with the following keys:
    <id> : the peers id
    <aver>: agent version
    <pver>: protocol version
    <pubkey>: public key
    <addrs>: addresses (newline delimited)
```

## ipfs init

```
ipfs init - Initializes IPFS config file

OPTIONS:

    -b, --bits       int  - Number of bits to use in the generated RSA private key (defaults to 2048)
    -f, --force      bool - Overwrite existing config (if it exists)
    -e, --empty-repo bool - Don't add and pin help files to the local storage

DESCRIPTION:

    Initializes IPFS configuration files and generates a new keypair.
```

## ipfs log

```
ipfs log - Interact with the daemon log output

SUBCOMMANDS:

    ipfs log level <subsystem> <level> - Change the logging level
    ipfs log tail                      - Read the logs

    Use 'ipfs log <subcmd> --help' for more information about each command.

DESCRIPTION:

    'ipfs log' contains utility commands to affect or read the logging
    output of a running daemon.
```

## ipfs log level

```
ipfs log level <subsystem> <level> - Change the logging level

ARGUMENTS:

    <subsystem> - the subsystem logging identifier. Use 'all' for all subsystems.
    <level>     - one of: debug, info, warning, error, fatal, panic

DESCRIPTION:

    'ipfs log level' is a utility command used to change the logging
    output of a running daemon.
```

## ipfs log tail

```
ipfs log tail - Read the logs

DESCRIPTION:

    'ipfs log tail' is a utility command used to read log output as it is written.
```

## ipfs ls

```
ipfs ls <ipfs-path>... - List links from an object.

ARGUMENTS:

    <ipfs-path>... - The path to the IPFS object(s) to list links from

OPTIONS:

    -v, --headers bool - Print table headers (Hash, Name, Size)

DESCRIPTION:

    Retrieves the object named by <ipfs-or-ipns-path> and displays the links
    it contains, with the following format:

      <link base58 hash> <link size in bytes> <link name>
```

## ipfs mount

```
ipfs mount - Mounts IPFS to the filesystem (read-only)

OPTIONS:

    -f, --ipfs-path string - The path where IPFS should be mounted
    -n, --ipns-path string - The path where IPNS should be mounted

DESCRIPTION:

    Mount ipfs at a read-only mountpoint on the OS (default: /ipfs and /ipns).
    All ipfs objects will be accessible under that directory. Note that the
    root will not be listable, as it is virtual. Access known paths directly.

    You may have to create /ipfs and /ipns before using 'ipfs mount':

    > sudo mkdir /ipfs /ipns
    > sudo chown `whoami` /ipfs /ipns
    > ipfs daemon &
    > ipfs mount

    EXAMPLE:

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
ipfs name - IPFS namespace (IPNS) tool

SUBCOMMANDS:

    ipfs name publish <ipfs-path> - Publish an object to IPNS
    ipfs name resolve [<name>]    - Gets the value currently published at an IPNS name

    Use 'ipfs name <subcmd> --help' for more information about each command.

DESCRIPTION:

    IPNS is a PKI namespace, where names are the hashes of public keys, and
    the private key enables publishing new (signed) values. In both publish
    and resolve, the default value of <name> is your own identity public key.


    Examples:

    Publish an <ipfs-path> to your identity name:

      > ipfs name publish /ipfs/QmatmE9msSfkKxoffpHwNLNKgwZG8eT9Bud6YoPab52vpy
      Published to QmbCMUZw6JFeZ7Wp9jkzbye3Fzp2GGcPgC3nmeUjfVF87n: /ipfs/QmatmE9msSfkKxoffpHwNLNKgwZG8eT9Bud6YoPab52vpy

    Publish an <ipfs-path> to another public key:

      > ipfs name publish /ipfs/QmatmE9msSfkKxoffpHwNLNKgwZG8eT9Bud6YoPab52vpy QmbCMUZw6JFeZ7Wp9jkzbye3Fzp2GGcPgC3nmeUjfVF87n
      Published to QmbCMUZw6JFeZ7Wp9jkzbye3Fzp2GGcPgC3nmeUjfVF87n: /ipfs/QmatmE9msSfkKxoffpHwNLNKgwZG8eT9Bud6YoPab52vpy

    Resolve the value of your identity:

      > ipfs name resolve
      /ipfs/QmatmE9msSfkKxoffpHwNLNKgwZG8eT9Bud6YoPab52vpy

    Resolve the value of another name:

      > ipfs name resolve QmbCMUZw6JFeZ7Wp9jkzbye3Fzp2GGcPgC3nmeUjfVF87n
      /ipfs/QmatmE9msSfkKxoffpHwNLNKgwZG8eT9Bud6YoPab52vpy
```

## ipfs name publish

```
ipfs name publish <ipfs-path> - Publish an object to IPNS

ARGUMENTS:

    <ipfs-path> - IPFS path of the obejct to be published

OPTIONS:

    --resolve           bool   - resolve given path before publishing (default=true)
    -t,      --lifetime string - time duration that the record will be valid for (default: 24hrs)
    --ttl               string - time duration this record should be cached for (caution: experimental)

DESCRIPTION:

    IPNS is a PKI namespace, where names are the hashes of public keys, and
    the private key enables publishing new (signed) values. In publish, the
    default value of <name> is your own identity public key.

    Examples:

    Publish an <ipfs-path> to your identity name:

      > ipfs name publish /ipfs/QmatmE9msSfkKxoffpHwNLNKgwZG8eT9Bud6YoPab52vpy
      Published to QmbCMUZw6JFeZ7Wp9jkzbye3Fzp2GGcPgC3nmeUjfVF87n: /ipfs/QmatmE9msSfkKxoffpHwNLNKgwZG8eT9Bud6YoPab52vpy

    Publish an <ipfs-path> to another public key (not implemented):

      > ipfs name publish /ipfs/QmatmE9msSfkKxoffpHwNLNKgwZG8eT9Bud6YoPab52vpy QmbCMUZw6JFeZ7Wp9jkzbye3Fzp2GGcPgC3nmeUjfVF87n
      Published to QmbCMUZw6JFeZ7Wp9jkzbye3Fzp2GGcPgC3nmeUjfVF87n: /ipfs/QmatmE9msSfkKxoffpHwNLNKgwZG8eT9Bud6YoPab52vpy
```

## ipfs name resolve

```
ipfs name resolve [<name>] - Gets the value currently published at an IPNS name

ARGUMENTS:

    [<name>] - The IPNS name to resolve. Defaults to your node's peerID.

OPTIONS:

    -r, --recursive bool - Resolve until the result is not an IPNS name
    -n, --nocache   bool - Do not used cached entries

DESCRIPTION:

    IPNS is a PKI namespace, where names are the hashes of public keys, and
    the private key enables publishing new (signed) values. In resolve, the
    default value of <name> is your own identity public key.


    Examples:

    Resolve the value of your identity:

      > ipfs name resolve
      QmatmE9msSfkKxoffpHwNLNKgwZG8eT9Bud6YoPab52vpy

    Resolve the value of another name:

      > ipfs name resolve QmbCMUZw6JFeZ7Wp9jkzbye3Fzp2GGcPgC3nmeUjfVF87n
      QmatmE9msSfkKxoffpHwNLNKgwZG8eT9Bud6YoPab52vpy
```

## ipfs object

```
ipfs object - Interact with ipfs objects

SUBCOMMANDS:

    ipfs object patch <root> <command> <args>... - Create a new merkledag object based on an existing one
    ipfs object data <key>                       - Outputs the raw bytes in an IPFS object
    ipfs object links <key>                      - Outputs the links pointed to by the specified object
    ipfs object get <key>                        - Get and serialize the DAG node named by <key>
    ipfs object put <data>                       - Stores input as a DAG object, outputs its key
    ipfs object stat <key>                       - Get stats for the DAG node named by <key>
    ipfs object new [<template>]                 - creates a new object from an ipfs template

    Use 'ipfs object <subcmd> --help' for more information about each command.

DESCRIPTION:

    'ipfs object' is a plumbing command used to manipulate DAG objects
    directly.
```

## ipfs object data

```
ipfs object data <key> - Outputs the raw bytes in an IPFS object

ARGUMENTS:

    <key> - Key of the object to retrieve, in base58-encoded multihash format

DESCRIPTION:

    'ipfs object data' is a plumbing command for retreiving the raw bytes stored in
    a DAG node. It outputs to stdout, and <key> is a base58 encoded
    multihash.

    Note that the "--encoding" option does not affect the output, since the
    output is the raw data of the object.
```

## ipfs object get

```
ipfs object get <key> - Get and serialize the DAG node named by <key>

ARGUMENTS:

    <key> - Key of the object to retrieve (in base58-encoded multihash format)

DESCRIPTION:

    'ipfs object get' is a plumbing command for retreiving DAG nodes.
    It serializes the DAG node to the format specified by the "--encoding"
    flag. It outputs to stdout, and <key> is a base58 encoded multihash.

    This command outputs data in the following encodings:
      * "protobuf"
      * "json"
      * "xml"
    (Specified by the "--encoding" or "-enc" flag)
```

## ipfs object links

```
ipfs object links <key> - Outputs the links pointed to by the specified object

ARGUMENTS:

    <key> - Key of the object to retrieve, in base58-encoded multihash format

DESCRIPTION:

    'ipfs object links' is a plumbing command for retreiving the links from
    a DAG node. It outputs to stdout, and <key> is a base58 encoded
    multihash.
```

## ipfs object new

```
ipfs object new [<template>] - creates a new object from an ipfs template

ARGUMENTS:

    [<template>] - optional template to use

DESCRIPTION:

    'ipfs object new' is a plumbing command for creating new DAG nodes.
    By default it creates and returns a new empty merkledag node, but
    you may pass an optional template argument to create a preformatted
    node.

    Available templates:
    	* unixfs-dir
```

## ipfs object patch

```
ipfs object patch <root> <command> <args>... - Create a new merkledag object based on an existing one

ARGUMENTS:

    <root>    - the hash of the node to modify
    <command> - the operation to perform
    <args>... - extra arguments

OPTIONS:

    -p, --create bool - create intermediate directories on add-link

DESCRIPTION:

    'ipfs object patch <root> <cmd> <args>' is a plumbing command used to
    build custom DAG objects. It adds and removes links from objects, creating a new
    object as a result. This is the merkle-dag version of modifying an object. It
    can also set the data inside a node with 'set-data' and append to that data as
    well with 'append-data'.

    Patch commands:
        add-link <name> <ref>     - adds a link to a node
        rm-link <name>            - removes a link from a node
        set-data                  - sets a nodes data from stdin
        append-data               - appends to a nodes data from stdin

    Examples:

        EMPTY_DIR=$(ipfs object new unixfs-dir)
        BAR=$(echo "bar" | ipfs add -q)
        ipfs object patch $EMPTY_DIR add-link foo $BAR

    This takes an empty directory, and adds a link named foo under it, pointing to
    a file containing 'bar', and returns the hash of the new object.

        ipfs object patch $FOO_BAR rm-link foo

    This removes the link named foo from the hash in $FOO_BAR and returns the
    resulting object hash.

    The data inside the node can be modified as well:

        ipfs object patch $FOO_BAR set-data < file.dat
        ipfs object patch $FOO_BAR append-data < file.dat
```

## ipfs object put

```
ipfs object put <data> - Stores input as a DAG object, outputs its key

ARGUMENTS:

    <data> - Data to be stored as a DAG object

OPTIONS:

    --inputenc string - Encoding type of input data, either "protobuf" or "json"

DESCRIPTION:

    'ipfs object put' is a plumbing command for storing DAG nodes.
    It reads from stdin, and the output is a base58 encoded multihash.

    Data should be in the format specified by the --inputenc flag.
    --inputenc may be one of the following:
    	* "protobuf"
    	* "json" (default)

    Examples:

    	echo '{ "Data": "abc" }' | ipfs object put

    This creates a node with the data "abc" and no links. For an object with links,
    create a file named node.json with the contents:

        {
            "Data": "another",
            "Links": [ {
                "Name": "some link",
                "Hash": "QmXg9Pp2ytZ14xgmQjYEiHjVjMFXzCVVEcRTWJBmLgR39V",
                "Size": 8
            } ]
        }

    and then run

    	ipfs object put node.json
```

## ipfs object stat

```
ipfs object stat <key> - Get stats for the DAG node named by <key>

ARGUMENTS:

    <key> - Key of the object to retrieve (in base58-encoded multihash format)

DESCRIPTION:

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
ipfs pin - Pin (and unpin) objects to local storage

SUBCOMMANDS:

    ipfs pin add <ipfs-path>... - Pins objects to local storage
    ipfs pin rm <ipfs-path>...  - Removes the pinned object from local storage. (By default, recursively. Use -r=false for direct pins)
    ipfs pin ls                 - List objects pinned to local storage

    Use 'ipfs pin <subcmd> --help' for more information about each command.
```

## ipfs pin add

```
ipfs pin add <ipfs-path>... - Pins objects to local storage

ARGUMENTS:

    <ipfs-path>... - Path to object(s) to be pinned

OPTIONS:

    -r, --recursive bool - Recursively pin the object linked to by the specified object(s)

DESCRIPTION:

    Retrieves the object named by <ipfs-path> and stores it locally
    on disk.
```

## ipfs pin ls

```
ipfs pin ls - List objects pinned to local storage

OPTIONS:

    -t, --type  string - The type of pinned keys to list. Can be "direct", "indirect", "recursive", or "all". Defaults to "recursive"
    -n, --count bool   - Show refcount when listing indirect pins
    -q, --quiet bool   - Write just hashes of objects

DESCRIPTION:

    Returns a list of objects that are pinned locally.
    By default, only recursively pinned returned, but others may be shown via the '--type' flag.
    Example:
    	$ echo "hello" | ipfs add -q
    	QmZULkCELmmk5XNfCgTnCyFgAVxBRBXyDHGGMVoLFLiXEN
    	$ ipfs pin ls
    	QmZULkCELmmk5XNfCgTnCyFgAVxBRBXyDHGGMVoLFLiXEN
    	# now remove the pin, and repin it directly
    	$ ipfs pin rm QmZULkCELmmk5XNfCgTnCyFgAVxBRBXyDHGGMVoLFLiXEN
    	$ ipfs pin add -r=false QmZULkCELmmk5XNfCgTnCyFgAVxBRBXyDHGGMVoLFLiXEN
    	$ ipfs pin ls --type=direct
    	QmZULkCELmmk5XNfCgTnCyFgAVxBRBXyDHGGMVoLFLiXEN
```

## ipfs pin rm

```
ipfs pin rm <ipfs-path>... - Removes the pinned object from local storage. (By default, recursively. Use -r=false for direct pins)

ARGUMENTS:

    <ipfs-path>... - Path to object(s) to be unpinned

OPTIONS:

    -r, --recursive bool - Recursively unpin the object linked to by the specified object(s)

DESCRIPTION:

    Removes the pin from the given object allowing it to be garbage
    collected if needed. (By default, recursively. Use -r=false for direct pins)
```

## ipfs ping

```
ipfs ping <peer ID>... - send echo request packets to IPFS hosts

ARGUMENTS:

    <peer ID>... - ID of peer to be pinged

OPTIONS:

    -n, --count int - number of ping messages to send

DESCRIPTION:

    ipfs ping is a tool to test sending data to other nodes. It finds nodes
    via the routing system, send pings, wait for pongs, and print out round-
    trip latency information.
```

## ipfs refs

```
ipfs refs <ipfs-path>... - Lists links (references) from an object

ARGUMENTS:

    <ipfs-path>... - Path to the object(s) to list refs from

OPTIONS:

    --format            string - Emit edges with given format. tokens: <src> <dst> <linkname>
    -e,     --edges     bool   - Emit edge format: `<from> -> <to>`
    -u,     --unique    bool   - Omit duplicate refs from output
    -r,     --recursive bool   - Recursively list links of child nodes

SUBCOMMANDS:

    ipfs refs local - Lists all local references

    Use 'ipfs refs <subcmd> --help' for more information about each command.

DESCRIPTION:

    Retrieves the object named by <ipfs-path> and displays the link
    hashes it contains, with the following format:

      <link base58 hash>

    Note: list all refs recursively with -r.
```

## ipfs refs local

```
ipfs refs local - Lists all local references

DESCRIPTION:

    Displays the hashes of all local objects.
```

## ipfs repo

```
ipfs repo - Manipulate the IPFS repo

SUBCOMMANDS:

    ipfs repo gc - Perform a garbage collection sweep on the repo

    Use 'ipfs repo <subcmd> --help' for more information about each command.

DESCRIPTION:

    'ipfs repo' is a plumbing command used to manipulate the repo.
```

## ipfs repo gc

```
ipfs repo gc - Perform a garbage collection sweep on the repo

OPTIONS:

    -q, --quiet bool - Write minimal output

DESCRIPTION:

    'ipfs repo gc' is a plumbing command that will sweep the local
    set of stored objects and remove ones that are not pinned in
    order to reclaim hard disk space.
```

## ipfs resolve

```
ipfs resolve <name> - Resolve the value of names to IPFS

ARGUMENTS:

    <name> - The name to resolve.

OPTIONS:

    -r, --recursive bool - Resolve until the result is an IPFS name

DESCRIPTION:

    There are a number of mutable name protocols that can link among
    themselves and into IPNS.  For example IPNS references can (currently)
    point at IPFS object, and DNS links can point at other DNS links, IPNS
    entries, or IPFS objects.  This command accepts any of these
    identifiers and resolves them to the referenced item.

    Examples:

    Resolve the value of your identity:

      > ipfs resolve /ipns/QmatmE9msSfkKxoffpHwNLNKgwZG8eT9Bud6YoPab52vpy
      /ipfs/Qmcqtw8FfrVSBaRmbWwHxt3AuySBhJLcvmFYi3Lbc4xnwj

    Resolve the value of another name:

      > ipfs resolve /ipns/QmbCMUZw6JFeZ7Wp9jkzbye3Fzp2GGcPgC3nmeUjfVF87n
      /ipns/QmatmE9msSfkKxoffpHwNLNKgwZG8eT9Bud6YoPab52vpy

    Resolve the value of another name recursively:

      > ipfs resolve -r /ipns/QmbCMUZw6JFeZ7Wp9jkzbye3Fzp2GGcPgC3nmeUjfVF87n
      /ipfs/Qmcqtw8FfrVSBaRmbWwHxt3AuySBhJLcvmFYi3Lbc4xnwj

    Resolve the value of an IPFS DAG path:

      > ipfs resolve /ipfs/QmeZy1fGbwgVSrqbfh9fKQrAWgeyRnj7h8fsHS1oy3k99x/beep/boop
      /ipfs/QmYRMjyvAiHKN9UTi8Bzt1HUspmSRD8T8DwxfSMzLgBon1
```

## ipfs stats

```
ipfs stats - Query IPFS statistics

SUBCOMMANDS:

    ipfs stats bw - Print ipfs bandwidth information

    Use 'ipfs stats <subcmd> --help' for more information about each command.
```

## ipfs stats bw

```
ipfs stats bw - Print ipfs bandwidth information

OPTIONS:

    -p,   --peer     string - specify a peer to print bandwidth for
    -t,   --proto    string - specify a protocol to print bandwidth for
    --poll           bool   - print bandwidth at an interval
    -i,   --interval string - time interval to wait between updating output
```

## ipfs swarm

```
ipfs swarm - swarm inspection tool

SUBCOMMANDS:

    ipfs swarm peers                   - List peers with open connections
    ipfs swarm addrs                   - List known addresses. Useful to debug.
    ipfs swarm connect <address>...    - Open connection to a given address
    ipfs swarm disconnect <address>... - Close connection to a given address
    ipfs swarm filters                 - Manipulate address filters

    Use 'ipfs swarm <subcmd> --help' for more information about each command.

DESCRIPTION:

    ipfs swarm is a tool to manipulate the network swarm. The swarm is the
    component that opens, listens for, and maintains connections to other
    ipfs peers in the internet.
```

## ipfs swarm addrs

```
ipfs swarm addrs - List known addresses. Useful to debug.

SUBCOMMANDS:

    ipfs swarm addrs local - List local addresses.

    Use 'ipfs swarm addrs <subcmd> --help' for more information about each command.

DESCRIPTION:

    ipfs swarm addrs lists all addresses this node is aware of.
```

## ipfs swarm addrs local

```
ipfs swarm addrs local - List local addresses.

OPTIONS:

    --id bool - Show peer ID in addresses

DESCRIPTION:

    ipfs swarm addrs local lists all local addresses the node is listening on.
```

## ipfs swarm connect

```
ipfs swarm connect <address>... - Open connection to a given address

ARGUMENTS:

    <address>... - address of peer to connect to

DESCRIPTION:

    'ipfs swarm connect' opens a new direct connection to a peer address.

    The address format is an ipfs multiaddr:

    ipfs swarm connect /ip4/104.131.131.82/tcp/4001/ipfs/QmaCpDMGvV2BGHeYERUEnRQAwe3N8SzbUtfsmvsqQLuvuJ
```

## ipfs swarm disconnect

```
ipfs swarm disconnect <address>... - Close connection to a given address

ARGUMENTS:

    <address>... - address of peer to connect to

DESCRIPTION:

    'ipfs swarm disconnect' closes a connection to a peer address. The address format
    is an ipfs multiaddr:

    ipfs swarm disconnect /ip4/104.131.131.82/tcp/4001/ipfs/QmaCpDMGvV2BGHeYERUEnRQAwe3N8SzbUtfsmvsqQLuvuJ
```

## ipfs swarm filters

```
ipfs swarm filters - Manipulate address filters

SUBCOMMANDS:

    ipfs swarm filters add <address>... - add an address filter
    ipfs swarm filters rm <address>...  - remove an address filter

    Use 'ipfs swarm filters <subcmd> --help' for more information about each command.

DESCRIPTION:

    'ipfs swarm filters' will list out currently applied filters. Its subcommands can be used
    to add or remove said filters. Filters are specified using the multiaddr-filter format:

    example:

        /ip4/192.168.0.0/ipcidr/16

    Where the above is equivalent to the standard CIDR:

        192.168.0.0/16

    Filters default to those specified under the "Swarm.AddrFilters" config key.
```

## ipfs swarm filters add

```
ipfs swarm filters add <address>... - add an address filter

ARGUMENTS:

    <address>... - multiaddr to filter

DESCRIPTION:

    'ipfs swarm filters add' will add an address filter to the daemons swarm.
    Filters applied this way will not persist daemon reboots, to acheive that,
    add your filters to the ipfs config file.
```

## ipfs swarm filters rm

```
ipfs swarm filters rm <address>... - remove an address filter

ARGUMENTS:

    <address>... - multiaddr filter to remove

DESCRIPTION:

    'ipfs swarm filters rm' will remove an address filter from the daemons swarm.
    Filters removed this way will not persist daemon reboots, to acheive that,
    remove your filters from the ipfs config file.
```

## ipfs swarm peers

```
ipfs swarm peers - List peers with open connections

DESCRIPTION:

    ipfs swarm peers lists the set of peers this node is connected to.
```

## ipfs tar

```
ipfs tar - utility functions for tar files in ipfs

SUBCOMMANDS:

    ipfs tar add <file> - import a tar file into ipfs
    ipfs tar cat <path> - export a tar file from ipfs

    Use 'ipfs tar <subcmd> --help' for more information about each command.
```

## ipfs tar add

```
ipfs tar add <file> - import a tar file into ipfs

ARGUMENTS:

    <file> - tar file to add

DESCRIPTION:

    'ipfs tar add' will parse a tar file and create a merkledag structure to represent it.
```

## ipfs tar cat

```
ipfs tar cat <path> - export a tar file from ipfs

ARGUMENTS:

    <path> - ipfs path of archive to export

DESCRIPTION:

    'ipfs tar cat' will export a tar file from a previously imported one in ipfs
```

## ipfs tour

```
ipfs tour [<id>] - An introduction to IPFS

ARGUMENTS:

    [<id>] - The id of the topic you would like to tour

SUBCOMMANDS:

    ipfs tour list    - Show a list of IPFS Tour topics
    ipfs tour next    - Show the next IPFS Tour topic
    ipfs tour restart - Restart the IPFS Tour

    Use 'ipfs tour <subcmd> --help' for more information about each command.

DESCRIPTION:

    This is a tour that takes you through various IPFS concepts,
    features, and tools to make sure you get up to speed with
    IPFS very quickly. To start, run:

        ipfs tour
```

## ipfs tour list

```
ipfs tour list - Show a list of IPFS Tour topics
```

## ipfs tour next

```
ipfs tour next - Show the next IPFS Tour topic
```

## ipfs tour restart

```
ipfs tour restart - Restart the IPFS Tour
```

## ipfs update

```
NAME:
   ipfs-update - update ipfs

USAGE:
   ipfs-update [global options] command [command options] [arguments...]

VERSION:
   0.1.0

COMMANDS:
   versions	print out all available versions
   version	print out currently installed version
   install	install a version of ipfs
   stash	stashes copy of currently installed ipfs binary
   revert	revert to previously installed version of ipfs
   fetch	fetch a given (default: latest) version of ipfs
   help, h	Shows a list of commands or help for one command

GLOBAL OPTIONS:
   --verbose		print verbose output
   --help, -h		show help
   --version, -v	print the version
```

## ipfs version

```
ipfs version - Shows ipfs version information

OPTIONS:

    -n,     --number bool - Only show the version number
    --commit         bool - Show the commit hash
    --repo           bool - Show repo version

DESCRIPTION:

    Returns the current version of ipfs and exits.
```

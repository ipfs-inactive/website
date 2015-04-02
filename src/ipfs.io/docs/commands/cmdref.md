# ipfs command reference

generated on 2015-02-16 05:07:29.025901

- [ipfs](#ipfs)
- [ipfs add](#ipfs-add)
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
- [ipfs dht query](#ipfs-dht-query)
- [ipfs diag](#ipfs-diag)
- [ipfs diag net](#ipfs-diag-net)
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
- [ipfs swarm](#ipfs-swarm)
- [ipfs swarm addrs](#ipfs-swarm-addrs)
- [ipfs swarm connect](#ipfs-swarm-connect)
- [ipfs swarm disconnect](#ipfs-swarm-disconnect)
- [ipfs swarm peers](#ipfs-swarm-peers)
- [ipfs tour](#ipfs-tour)
- [ipfs tour list](#ipfs-tour-list)
- [ipfs tour next](#ipfs-tour-next)
- [ipfs tour restart](#ipfs-tour-restart)
- [ipfs update](#ipfs-update)
- [ipfs update check](#ipfs-update-check)
- [ipfs update log](#ipfs-update-log)
- [ipfs version](#ipfs-version)

## ipfs

```
USAGE:

    ipfs - global p2p merkle-dag filesystem

    ipfs [<flags>] <command> [<arg>] ...

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
    
    ADVANCED COMMANDS
    
        daemon        Start a long-running daemon process
        mount         Mount an ipfs read-only mountpoint
        name          Publish or resolve IPNS names
        pin           Pin objects to local storage
        gc            Garbage collect unpinned objects
    
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

    -r, -recursive           bool - Add directory paths recursively
    -q, -quiet               bool - Write minimal output
    -p, -progress            bool - Stream progress data
    -w, -wrap-with-directory bool - Wrap files with a directory object
    -t, -trickle             bool - Use trickle-dag format for dag generation

DESCRIPTION:

    Adds contents of <path> to ipfs. Use -r to add directories.
    Note that directories are added recursively, to form the ipfs
    MerkleDAG. A smarter partial add with a staging area (like git)
    remains to be implemented.
```

## ipfs block

```
ipfs block - Manipulate raw IPFS blocks

SUBCOMMANDS:

    ipfs block put <data> - Stores input as an IPFS block
    ipfs block stat <key> - Print information of a raw IPFS block
    ipfs block get <key>  - Get a raw IPFS block

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

    -default bool - add default bootstrap nodes

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

    -all bool - Remove all bootstrap peers.

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

    Retrieves the object named by <ipfs-path> and outputs the data
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

    -bool bool - Set a boolean value

SUBCOMMANDS:

    ipfs config show           - Outputs the content of the config file
    ipfs config edit           - Opens the config file for editing in $EDITOR
    ipfs config replace <file> - Replaces the config with `file>

    Use 'ipfs config <subcmd> --help' for more information about each command.

DESCRIPTION:

    ipfs config controls configuration variables. It works
    much like 'git config'. The configuration values are stored in a config
    file inside your IPFS repository.
    
    EXAMPLES:
    
    Get the value of the 'datastore.path' key:
    
      ipfs config datastore.path
    
    Set the value of the 'datastore.path' key:
    
      ipfs config datastore.path ~/.go-ipfs/datastore
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
ipfs config replace <file> - Replaces the config with `file>

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

    -init       bool   - Initialize IPFS with default settings if not already initialized
    -routing    string - Overrides the routing option (dht, supernode)
    -mount      bool   - Mounts IPFS to the filesystem
    -writable   bool   - Enable writing objects (with POST, PUT and DELETE)
    -mount-ipfs string - Path to the mountpoint for IPFS (if using --mount)
    -mount-ipns string - Path to the mountpoint for IPNS (if using --mount)

DESCRIPTION:

    'ipfs daemon' runs a persistent IPFS daemon that can serve commands
    over the network. Most applications that use IPFS will do so by
    communicating with a daemon over the HTTP API. While the daemon is
    running, calls to 'ipfs' commands will be sent over the network to
    the daemon.
```

## ipfs dht

```
ipfs dht - Issue commands directly through the DHT

SUBCOMMANDS:

    ipfs dht query <peerID>...    - Run a 'findClosestPeers' query through the DHT
    ipfs dht findprovs <key>...   - Run a 'FindProviders' query through the DHT
    ipfs dht findpeer <peerID>... - Run a 'FindPeer' query through the DHT

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

    -v, -verbose bool - Write extra information

DESCRIPTION:

    FindProviders will return a list of peers who are able to provide the value requested.
```

## ipfs dht query

```
ipfs dht query <peerID>... - Run a 'findClosestPeers' query through the DHT

ARGUMENTS:

    <peerID>... - The peerID to run the query against

OPTIONS:

    -v, -verbose bool - Write extra information
```

## ipfs diag

```
ipfs diag - Generates diagnostic reports

SUBCOMMANDS:

    ipfs diag net - Generates a network diagnostics report

    Use 'ipfs diag <subcmd> --help' for more information about each command.
```

## ipfs diag net

```
ipfs diag net - Generates a network diagnostics report

OPTIONS:

    -timeout string - diagnostic timeout duration
    -vis     string - output vis. one of: d3, dot

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

## ipfs get

```
ipfs get <ipfs-path> - Download IPFS objects

ARGUMENTS:

    <ipfs-path> - The path to the IPFS object(s) to be outputted

OPTIONS:

    -o, -output            string - The path where output should be stored
    -a, -archive           bool   - Output a TAR archive
    -C, -compress          bool   - Compress the output with GZIP compression
    -l, -compression-level int    - The level of compression (1-9)

DESCRIPTION:

    Retrieves the object named by <ipfs-path> and stores the data to disk.
    
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

    -f, -format string - optional output format

DESCRIPTION:

    Prints out information about the specified peer,
    if no peer is specified, prints out local peers info.
    
    ipfs id supports the format option for output with the following keys:
    <id> : the peers id
    <aver>: agent version
    <pver>: protocol version
    <pubkey>: public key
```

## ipfs init

```
ipfs init - Initializes IPFS config file

OPTIONS:

    -b, -bits       int    - Number of bits to use in the generated RSA private key (defaults to 4096)
    -p, -passphrase string - Passphrase for encrypting the private key
    -f, -force      bool   - Overwrite existing config (if it exists)

DESCRIPTION:

    Initializes IPFS configuration files and generates a new keypair.
```

## ipfs log

```
ipfs log - Interact with the daemon log output

SUBCOMMANDS:

    ipfs log tail                      - Read the logs
    ipfs log level <subsystem> <level> - Change the logging level

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
    <level>     - one of: debug, info, notice, warning, error, critical

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

DESCRIPTION:

    Retrieves the object named by <ipfs-path> and displays the links
    it contains, with the following format:
    
      <link base58 hash> <link size in bytes> <link name>
```

## ipfs mount

```
ipfs mount - Mounts IPFS to the filesystem (read-only)

OPTIONS:

    -f string - The path where IPFS should be mounted
    -n string - The path where IPNS should be mounted

DESCRIPTION:

    Mount ipfs at a read-only mountpoint on the OS (default: /ipfs and /ipns).
    All ipfs objects will be accessible under that directory. Note that the
    root will not be listable, as it is virtual. Access known paths directly.
    
    You may have to create /ipfs and /ipfs before using 'ipfs mount':
    
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

    ipfs name publish [<name>] <ipfs-path> - Publish an object to IPNS
    ipfs name resolve [<name>]             - Gets the value currently published at an IPNS name

    Use 'ipfs name <subcmd> --help' for more information about each command.

DESCRIPTION:

    IPNS is a PKI namespace, where names are the hashes of public keys, and
    the private key enables publishing new (signed) values. In both publish
    and resolve, the default value of <name> is your own identity public key.
    
    
    Examples:
    
    Publish a <ref> to your identity name:
    
      > ipfs name publish QmatmE9msSfkKxoffpHwNLNKgwZG8eT9Bud6YoPab52vpy
      published name QmbCMUZw6JFeZ7Wp9jkzbye3Fzp2GGcPgC3nmeUjfVF87n to QmatmE9msSfkKxoffpHwNLNKgwZG8eT9Bud6YoPab52vpy
    
    Publish a <ref> to another public key:
    
      > ipfs name publish QmbCMUZw6JFeZ7Wp9jkzbye3Fzp2GGcPgC3nmeUjfVF87n QmatmE9msSfkKxoffpHwNLNKgwZG8eT9Bud6YoPab52vpy
      published name QmbCMUZw6JFeZ7Wp9jkzbye3Fzp2GGcPgC3nmeUjfVF87n to QmatmE9msSfkKxoffpHwNLNKgwZG8eT9Bud6YoPab52vpy
    
    Resolve the value of your identity:
    
      > ipfs name resolve
      QmatmE9msSfkKxoffpHwNLNKgwZG8eT9Bud6YoPab52vpy
    
    Resolve the value of another name:
    
      > ipfs name resolve QmbCMUZw6JFeZ7Wp9jkzbye3Fzp2GGcPgC3nmeUjfVF87n
      QmatmE9msSfkKxoffpHwNLNKgwZG8eT9Bud6YoPab52vpy
```

## ipfs name publish

```
ipfs name publish [<name>] <ipfs-path> - Publish an object to IPNS

ARGUMENTS:

    [<name>]    - The IPNS name to publish to. Defaults to your node's peerID
    <ipfs-path> - IPFS path of the obejct to be published at <name>

DESCRIPTION:

    IPNS is a PKI namespace, where names are the hashes of public keys, and
    the private key enables publishing new (signed) values. In publish, the
    default value of <name> is your own identity public key.
    
    Examples:
    
    Publish a <ref> to your identity name:
    
      > ipfs name publish QmatmE9msSfkKxoffpHwNLNKgwZG8eT9Bud6YoPab52vpy
      published name QmbCMUZw6JFeZ7Wp9jkzbye3Fzp2GGcPgC3nmeUjfVF87n to QmatmE9msSfkKxoffpHwNLNKgwZG8eT9Bud6YoPab52vpy
    
    Publish a <ref> to another public key:
    
      > ipfs name publish QmbCMUZw6JFeZ7Wp9jkzbye3Fzp2GGcPgC3nmeUjfVF87n QmatmE9msSfkKxoffpHwNLNKgwZG8eT9Bud6YoPab52vpy
      published name QmbCMUZw6JFeZ7Wp9jkzbye3Fzp2GGcPgC3nmeUjfVF87n to QmatmE9msSfkKxoffpHwNLNKgwZG8eT9Bud6YoPab52vpy
```

## ipfs name resolve

```
ipfs name resolve [<name>] - Gets the value currently published at an IPNS name

ARGUMENTS:

    [<name>] - The IPNS name to resolve. Defaults to your node's peerID.

DESCRIPTION:

    IPNS is a PKI namespace, where names are the hashes of public keys, and
    the private key enables publishing new (signed) values. In resolve, the
    default value of <name> is your own identity public key.
    
    
    Examples:
    
    Resolve the value of your identity:
    
      > ipfs name resolve
      QmatmE9msSfkKxoffpHwNLNKgwZG8eT9Bud6YoPab52vpy
    
    Resolve te value of another name:
    
      > ipfs name resolve QmbCMUZw6JFeZ7Wp9jkzbye3Fzp2GGcPgC3nmeUjfVF87n
      QmatmE9msSfkKxoffpHwNLNKgwZG8eT9Bud6YoPab52vpy
```

## ipfs object

```
ipfs object - Interact with ipfs objects

SUBCOMMANDS:

    ipfs object data <key>            - Outputs the raw bytes in an IPFS object
    ipfs object links <key>           - Outputs the links pointed to by the specified object
    ipfs object get <key>             - Get and serialize the DAG node named by <key>
    ipfs object put <data> <encoding> - Stores input as a DAG object, outputs its key
    ipfs object stat <key>            - Get stats for the DAG node named by <key>

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

    ipfs data is a plumbing command for retreiving the raw bytes stored in
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

## ipfs object put

```
ipfs object put <data> <encoding> - Stores input as a DAG object, outputs its key

ARGUMENTS:

    <data>     - Data to be stored as a DAG object
    <encoding> - Encoding type of <data>, either "protobuf" or "json"

DESCRIPTION:

    'ipfs object put' is a plumbing command for storing DAG nodes.
    It reads from stdin, and the output is a base58 encoded multihash.
    
    Data should be in the format specified by <encoding>.
    <encoding> may be one of the following:
    	* "protobuf"
    	* "json"
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

    ipfs pin rm <ipfs-path>...  - Unpin an object from local storage
    ipfs pin ls                 - List objects pinned to local storage
    ipfs pin add <ipfs-path>... - Pins objects to local storage

    Use 'ipfs pin <subcmd> --help' for more information about each command.
```

## ipfs pin add

```
ipfs pin add <ipfs-path>... - Pins objects to local storage

ARGUMENTS:

    <ipfs-path>... - Path to object(s) to be pinned

OPTIONS:

    -r, -recursive bool - Recursively pin the object linked to by the specified object(s)

DESCRIPTION:

    Retrieves the object named by <ipfs-path> and stores it locally
    on disk.
```

## ipfs pin ls

```
ipfs pin ls - List objects pinned to local storage

OPTIONS:

    -t, -type string - The type of pinned keys to list. Can be "direct", "indirect", "recursive", or "all". Defaults to "direct"

DESCRIPTION:

    Returns a list of hashes of objects being pinned. Objects that are indirectly
    or recursively pinned are not included in the list.
    
    Use --type=<type> to specify the type of pinned keys to list. Valid values are:
        * "direct"
        * "indirect"
        * "recursive"
        * "all"
    (Defaults to "direct")
```

## ipfs pin rm

```
ipfs pin rm <ipfs-path>... - Unpin an object from local storage

ARGUMENTS:

    <ipfs-path>... - Path to object(s) to be unpinned

OPTIONS:

    -r, -recursive bool - Recursively unpin the object linked to by the specified object(s)

DESCRIPTION:

    Removes the pin from the given object allowing it to be garbage
    collected if needed.
```

## ipfs ping

```
ipfs ping <peer ID>... - send echo request packets to IPFS hosts

ARGUMENTS:

    <peer ID>... - ID of peer to be pinged

OPTIONS:

    -n, -count int - number of ping messages to send

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

    -format           string - Emit edges with given format. tokens: <src> <dst> <linkname>
    -e,    -edges     bool   - Emit edge format: `<from> -> <to>`
    -u,    -unique    bool   - Omit duplicate refs from output
    -r,    -recursive bool   - Recursively list links of child nodes

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

    -q, -quiet bool - Write minimal output

DESCRIPTION:

    'ipfs repo gc' is a plumbing command that will sweep the local
    set of stored objects and remove ones that are not pinned in
    order to reclaim hard disk space.
```

## ipfs swarm

```
ipfs swarm - swarm inspection tool

SUBCOMMANDS:

    ipfs swarm disconnect <address>... - Close connection to a given address
    ipfs swarm peers                   - List peers with open connections
    ipfs swarm addrs                   - List known addresses. Useful to debug.
    ipfs swarm connect <address>...    - Open connection to a given address

    Use 'ipfs swarm <subcmd> --help' for more information about each command.

DESCRIPTION:

    ipfs swarm is a tool to manipulate the network swarm. The swarm is the
    component that opens, listens for, and maintains connections to other
    ipfs peers in the internet.
```

## ipfs swarm addrs

```
ipfs swarm addrs - List known addresses. Useful to debug.

DESCRIPTION:

    ipfs swarm addrs lists all addresses this node is aware of.
```

## ipfs swarm connect

```
ipfs swarm connect <address>... - Open connection to a given address

ARGUMENTS:

    <address>... - address of peer to connect to

DESCRIPTION:

    'ipfs swarm connect' opens a connection to a peer address. The address format
    is an ipfs multiaddr:
    
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

## ipfs swarm peers

```
ipfs swarm peers - List peers with open connections

DESCRIPTION:

    ipfs swarm peers lists the set of peers this node is connected to.
```

## ipfs tour

```
ipfs tour [<id>] - An introduction to IPFS

ARGUMENTS:

    [<id>] - The id of the topic you would like to tour

SUBCOMMANDS:

    ipfs tour restart - Restart the IPFS Tour
    ipfs tour list    - Show a list of IPFS Tour topics
    ipfs tour next    - Show the next IPFS Tour topic

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
ipfs update - Downloads and installs updates for IPFS

SUBCOMMANDS:

    ipfs update check - Checks if updates are available
    ipfs update log   - List the changelog for the latest versions of IPFS

    Use 'ipfs update <subcmd> --help' for more information about each command.

DESCRIPTION:

    ipfs update is a utility command used to check for updates and apply them.
```

## ipfs update check

```
ipfs update check - Checks if updates are available

DESCRIPTION:

    'ipfs update check' checks if any updates are available for IPFS.
    Nothing will be downloaded or installed.
```

## ipfs update log

```
ipfs update log - List the changelog for the latest versions of IPFS

DESCRIPTION:

    This command is not yet implemented.
```

## ipfs version

```
ipfs version - Shows ipfs version information

OPTIONS:

    -n, -number bool - Only show the version number

DESCRIPTION:

    Returns the current version of ipfs and exits.
```


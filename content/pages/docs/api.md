section: Docs
title: API | IPFS Docs
pagetype: subdoc
url: docs/api
save_as: docs/api/index.html

# API Reference

A live specification for the HTTP API can be found at [docs.ipfs.apiary.io](http://docs.ipfs.apiary.io). For issues and support, check out the [http-api-spec repository](https://github.com/ipfs/http-api-spec) on GitHub.

## Commands

[Every command](../commands/) usable from the CLI is also available through
the HTTP API. For example:

```sh
> ipfs swarm peers
/ip4/104.131.131.82/tcp/4001/ipfs/QmaCpDMGvV2BGHeYERUEnRQAwe3N8SzbUtfsmvsqQLuvuJ
/ip4/104.236.151.122/tcp/4001/ipfs/QmSoLju6m7xTh3DuokvT3886QRYqxAzb1kShaanJgW36yx
/ip4/104.236.176.52/tcp/4001/ipfs/QmSoLnSGccFuZQJzRadHn95W2CrSFmZuTdDWP8HXaHca9z

> curl http://127.0.0.1:5001/api/v0/swarm/peers
{
  "Strings": [
    "/ip4/104.131.131.82/tcp/4001/ipfs/QmaCpDMGvV2BGHeYERUEnRQAwe3N8SzbUtfsmvsqQLuvuJ",
    "/ip4/104.236.151.122/tcp/4001/ipfs/QmSoLju6m7xTh3DuokvT3886QRYqxAzb1kShaanJgW36yx",
    "/ip4/104.236.176.52/tcp/4001/ipfs/QmSoLnSGccFuZQJzRadHn95W2CrSFmZuTdDWP8HXaHca9z",
  ]
}
```

## Flags

Flags are added through the query string. For example, the `--encoding=json`
flag is the `&encoding=json` query parameter below:

```
> curl "http://127.0.0.1:5001/api/v0/object/get?arg=QmaaqrHyAQm7gALkRW8DcfGX3u8q9rWKnxEMmf7m9z515w&encoding=json"
{
  "Links": [
    {
      "Name": "index.html",
      "Hash": "QmYftndCvcEiuSZRX7njywX2AGSeHY2ASa7VryCq1mKwEw",
      "Size": 1700
    },
    {
      "Name": "static",
      "Hash": "QmdtWFiasJeh2ymW3TD2cLHYxn1ryTuWoNpwieFyJriGTS",
      "Size": 2428803
    }
  ],
  "Data": "CAE="
}
```

## Arguments

Arguments are added through the special query string key `arg`:

```
> curl "http://127.0.0.1:5001/api/v0/swarm/disconnect?arg=/ip4/54.93.113.247/tcp/48131/ipfs/QmUDS3nsBD1X4XK5Jo836fed7SErTyTuQzRqWaiQAyBYMP"
{
  "Strings": [
    "disconnect QmUDS3nsBD1X4XK5Jo836fed7SErTyTuQzRqWaiQAyBYMP success",
  ]
}
```

Note that it can be used multiple times to signify multiple arguments:

```
> curl "http://127.0.0.1:5001/api/v0/swarm/disconnect?arg=/ip4/54.93.113.247/tcp/48131/ipfs/QmUDS3nsBD1X4XK5Jo836fed7SErTyTuQzRqWaiQAyBYMP&arg=/ip4/188.166.8.195/tcp/4001/ipfs/QmNU1Vpryj5hfSmybSYHnS497ttgy9aNJ3T2B8wY2uMso4"
{
  "Strings": [
    "disconnect QmUDS3nsBD1X4XK5Jo836fed7SErTyTuQzRqWaiQAyBYMP success",
    "disconnect QmNU1Vpryj5hfSmybSYHnS497ttgy9aNJ3T2B8wY2uMso4 success"
  ]
}
```

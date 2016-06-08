# ipfs.io website

This is a metalsmith template based website. generate it with:

```
npm install
make
```

The output is in `build/`.

Note: if you change layouts, you'll need to run `make` again as the watcher fails to watch them :/

## Publishing to https://ipfs.io

In order to publish to https://ipfs.io:

1. Put the Digital Ocean DNS auth token in a file called `auth.token`
2. Run `make publish`
3. Run `make publish-to-domain`

## TODO

- make this easy to publish with ipfs.
- make this easy to publish with ipns + dns.

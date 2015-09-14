# ipfs.io website

This is a metalsmith template based website. generate it with:

```
npm install
make
```

The output is in `build/`.

Note: if you change layouts, you'll need to run `make` again as the watcher fails to watch them :/

## Linkchecker
The "linkchecker" verifies that no dead links are present on the website. 
`linkchecker` is a python app that can be acquired through pip by running 
`pip install LinkChecker`. To verify that there aren't any dead links present
run:
```
make >/dev/null &
linkchecker --config linkchecker.conf http://localhost:8081/ipfs.io/
```


## TODO

- make this easy to publish with ipfs.
- make this easy to publish with ipns + dns.

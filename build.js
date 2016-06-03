#!/usr/bin/env node

var Metalsmith = require('metalsmith')
var debug = require('metalsmith-debug')
var templates = require('metalsmith-templates')
var partial = require('metalsmith-partial')
var msstatic = require('metalsmith-static')
var serve = require('metalsmith-serve')
var watch = require('metalsmith-watch')
var msIf = require('metalsmith-if')
var nunjucks = require('nunjucks')
var njmd = require('nunjucks-markdown')
var marked = require('marked')
var meow = require('meow')

var cli = meow(`
    Usage
      $ node build.js

    Options
      -w, --watch  Watch the files

    Examples
      $ node build.js --watch

`)
marked.setOptions({
  gfm: true,
  tables: true,
  smartLists: true,
})

njmd.register(nunjucks.configure({watch: cli.flags.watch}), marked);

Metalsmith(__dirname)
  .use(debug())
  .use(templates({
    "directory": ".",
    "engine": "nunjucks",
    "inPlace": true
  }))
  .use(templates({
    "directory": ".",
    "engine": "nunjucks",
  }))
  .use(msstatic({"src": "styles/", "dest": "ipfs.io/styles"}))
  .use(msstatic({"src": "media/", "dest": "ipfs.io/media"}))
  .use(msIf(
    cli.flags.watch,
    serve({
    'port': 8081,
    'verbose': true
    })
  ))
  .use(msIf(
    cli.flags.watch,
    watch()
  ))
  .destination('./build')
  .build(function(err){
    if (err) {
      console.log(err)
      throw err;
    }
  })

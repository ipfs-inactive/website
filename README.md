# ipfs.io

## Frontend Workflow

**Preliminary Development**

The site theme files are contained in the `ipfs.io-theme` directory.

*CSS*

CSS is compiled from stylus in the `_styl` directory.

*Markup*

Markup was originally built in jade. Original jade files are present in the `_jade` directory for ongoing iteration, if needed.

The theme utilizes files in the `templates` directory, so the assumed workflow is that the files in the `templates` directory will need to be manually updated with markup from the `build` directory.

*Building Static Assets*

Running `npm run build` in the theme directory will build the css from stylus files and generate static html files from jade into the `build` directory.

*Previewing Design Iteration*

For ongoing design iteration, run `npm run start` to preview what you've built from the `build` directory.

## Pages

Pages go in `./content/pages`

Pages should set their title, headlineText, and subheadText
at the top of each md file.
Optionally they can also set headlineClass and subheadText

Page urls can be defined (see the `docs` subfolder) or will default to a slugified version of the page name (i.e. `about.md` will end up at `/about`)

```
title: API
headlineClass: 'docs'
headlineText: This is a headline
subheadText: This goes under the headline as a subheadline
```

## Blog

Blog articles go in `./content/articles` and should have a title, date,
and author


## Config

There are two config files `pelicanconf.py` and `publishconf.py`

Most of the config is in `pelicanconf.py` with a few things that override critical settings for building the actual production site in `publishconf.py`.  One of these things is the final url for the site.

When developing locally, the site url and site path are both empty, so all urls are things like `/foo`.

When building the production site, site url and site path are prepended to the links so they'll be something like `http://ipfs.io/ipfs/s0meth1ng/foo`

The site is built via make. Type `make` to see your options.

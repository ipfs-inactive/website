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

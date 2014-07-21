
all: js css static pages

.PHONY: clean test

clean:
	rm -rf -- build

# watching
WATCH=*other/*;static/*;*src/*.md;
watch:
	make
	@echo "[watching $(WATCH) for recompilation]"
	@# for portability, use watchmedo -- pip install watchmedo
	@watchmedo shell-command --patterns="$(WATCH)" --recursive --command='\
		echo; \
		date +"%Y-%m-%d %H:%M:%S"; \
		make' \
		.

# dependencies
deps:
	npm install


# css/less
css: build/static/bundle.min.css

build/static/%.min.css: build/static/%.css
	@mkdir -p `dirname $@`
	@rm -f $@
	cat $< | node_modules/.bin/cssmin > $@

build/static/%.css: ss/%.less
	@mkdir -p `dirname $@`
	@rm -f $@
	node_modules/.bin/lessc $< $@


# static
static: $(shell find static -type f | sed 's/^/build\//')

build/static/%: static/%
	@mkdir -p `dirname $@`
	@rm -f $@
	cp $< $@

# js/coffee
js: build/static/bundle.min.js

build/static/%.min.js: build/static/%.js
	node_modules/.bin/uglifyjs $< > $@

build/static/bundle.js: $(shell node_modules/.bin/browserify --list js/web.js)
	@mkdir -p `dirname $@`
	node_modules/.bin/browserify -r fs:browserify-fs js/web.js -o $@

# pages
PAGES = build/index.html \
	build/about/index.html \
	build/blog/index.html \
	build/CNAME \
	build/.nojekyll

pages: $(PAGES)

build/%.html: html/%.html
	@mkdir -p `dirname $@`
	cp $< $@

build/CNAME: CNAME
	@mkdir -p `dirname $@`
	cp $< $@

build/.nojekyll: .nojekyll
	@mkdir -p `dirname $@`
	cp $< $@

serve:
	http-server

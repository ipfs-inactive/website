HUGO?=hugo
HUGOOPTS=
PORT=8080

NPM?=npm
NPMBIN=./node_modules/.bin

BASEDIR=$(CURDIR)
INPUTDIR=$(BASEDIR)/content
OUTPUTDIR=$(BASEDIR)/public
CONFFILE=$(BASEDIR)/config.toml
PUBLISHCONF=$(BASEDIR)/config.toml
PIDFILE=watch.PID

DEBUG ?= 0
ifeq ($(DEBUG), 1)
	HUGOOPTS += -D
endif

help:
	@echo 'Makefile for a pelican Web site                                                                           '
	@echo '                                                                                                          '
	@echo 'Usage:                                                                                                    '
	@echo '   make html                           (re)generate the web site                                          '
	@echo '   make publish                        generate using production settings                                 '
	@echo '   make minify                         minify generated js and images                                     '
	@echo '   make clean                          remove the generated files                                         '
	@echo '   make serve [PORT=8000]              serve site at http://localhost:8000                                '
	@echo '   make serve-global [SERVER=0.0.0.0]  serve (as root) to $(SERVER):80                                    '
	@echo '   make devserver [PORT=8000]          start/restart develop_server.sh, restarting when files are modified'
	@echo '   make stopserver                     stop local server                                                  '
	@echo '   make ipfs                           publish the website to IPFS                                        '
	@echo '   make ipfsio                         update ipfs.io dnslink TXT record                                  '
	@echo '                                                                                                          '
	@echo 'Set the DEBUG variable to 1 to enable debugging, e.g. make DEBUG=1 html                                   '
	@echo 'Set the RELATIVE variable to 1 to enable relative urls                                                    '
	@echo '                                                                                                          '

install:
	$(NPM) i && \
	[ -d static/js ] && mkdir -p static/js && \
	[ -d static/css ] && mkdir -p static/css

prebuild: install
	$(NPMBIN)/browserify js/popup.js -o static/js/popup.js & \
	$(NPMBIN)/browserify js/stars.js -o static/js/stars.js & \
	$(NPMBIN)/stylus -u autoprefixer-stylus -I node_modules/yeticss/lib -c -o static/css _styl/main.styl & \
	wait

html: prebuild
	$(HUGO) -c $(INPUTDIR) -d $(OUTPUTDIR) --config $(CONFFILE)

minify: html
	find public/images -type d -exec $(NPMBIN)/imagemin {}/* --out-dir={} \; & \
	find public/blog/static -type d -exec $(NPMBIN)/imagemin {}/* --out-dir={} \; & \
	find public/js -name '*.js' -exec $(NPMBIN)/uglifyjs {} --compress --output {} \; & \
	wait

clean:
	[ ! -d $(OUTPUTDIR) ] || rm -rf $(OUTPUTDIR) && \
	[ ! -d static/js ] || rm -rf static/js && \
	[ ! -d static/css ] || rm -rf static/css

devserver: install
	[ ! -f $(PIDFILE) ] || rm $(PIDFILE) ; \
	touch $(PIDFILE) ; \
	($(NPMBIN)/stylus -u autoprefixer-stylus -I node_modules/yeticss/lib -w _styl/main.styl -c -o static/css & echo $$! >> $(PIDFILE) ; \
	$(NPMBIN)/nodemon --watch js --exec "browserify js/popup.js -o static/js/popup.js" & echo $$! >> $(PIDFILE) ; \
	$(NPMBIN)/nodemon --watch js --exec "browserify js/stars.js -o static/js/stars.js" & echo $$! >> $(PIDFILE) ; \
	$(HUGO) server -c $(INPUTDIR) --config $(CONFFILE) --port $(PORT) -w & echo $$! >> $(PIDFILE))

stopserver:
	touch $(PIDFILE) ; \
	[ -z "`(cat $(PIDFILE))`" ] || kill `(cat $(PIDFILE))` ; \
	rm $(PIDFILE)

dnszone="ipfs.io"
dnsrecord="@"

ipfs: minify
	ipfs swarm peers >/dev/null || (echo "ipfs daemon must be online to publish" && exit 1)
	ipfs add -r -q $(OUTPUTDIR) | tail -n1 >versions/current
	cat versions/current >>versions/history
	@export hash=`cat versions/current`; \
		echo ""; \
		echo "published website:"; \
		echo "- http://localhost:8080/ipfs/$$hash"; \
		echo "- https://ipfs.io/ipfs/$$hash"; \
		echo ""; \
		echo "next steps:"; \
		echo "- ipfs pin add -r /ipfs/$$hash"; \
		echo "- make ipfsio"; \

ipfsio: node_modules/.bin/dnslink-deploy
	DIGITAL_OCEAN=$(shell cat auth.token) node_modules/.bin/dnslink-deploy \
		--domain=$(dnszone) --record=$(dnsrecord) --path=/ipfs/$(shell cat versions/current)

node_modules/.bin/dnslink-deploy: package.json
	npm install
	touch node_modules

.PHONY: help install prebuild html minify clean devserver stopserver ipfs ipfsio

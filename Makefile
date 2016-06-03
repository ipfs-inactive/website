local="http://localhost:8080/ipfs/"
gway="https://ipfs.io/ipfs/"

zone="ipfs.io"
record="@"

build: node_modules
	./build.js

serve: node_modules
	./build.js --watch

node_modules: package.json
	npm install
	touch node_modules

clean:
	rm -rf build

publish:
	ipfs swarm peers >/dev/null || (echo "ipfs daemon must be online to publish" && exit 1)
	ipfs add -r -q build/ipfs.io | tail -n1 >versions/current
	cat versions/current >>versions/history
	@export hash=`cat versions/current`; \
		echo ""; \
		echo "published website:"; \
		echo "- $(local)$$hash"; \
		echo "- $(gway)$$hash"; \
		echo ""; \
		echo "next steps:"; \
		echo "- ipfs pin add -r /ipfs/$$hash"; \
		echo "- make publish-to-domain"; \

publish-to-github:
	./publish-to-github

# Only run after publish, or there won't be a path to set.
publish-to-domain: auth.token
	DIGITAL_OCEAN=$(shell cat auth.token) node_modules/.bin/dnslink-deploy \
		--domain=$(zone) --record=$(record) --path=/ipfs/$(shell cat versions/current)

.PHONY: build clean publish publish-to-github

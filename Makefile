local="http://localhost:8080/ipfs/"
gway="http://gateway.ipfs.io/ipfs/"

build: node_modules
	./build.js

node_modules: package.json
	npm install
	touch node_modules

clean:
	rm -rf build

publish:
	ipfs add -r -q build/ipfs.io | tail -n1 >versions/current
	cat versions/current >>versions/history
	@export hash=`cat versions/current`; \
		echo "here are the links:"; \
		echo $(local)$$hash; \
		echo $(gway)$$hash; \
		echo ""; \
		echo "now must:"; \
		echo "- seed websites: /ipfs/$$hash"; \
		echo "- add TXT to ipfs.io: dnslink=/ipfs/$$hash"; \

publish-to-github:
	./publish-to-github

# Only run after publish, or there won't be a path to set.
publish-to-domain: auth.token
	DIGITAL_OCEAN=$(shell cat auth.token) node_modules/.bin/dnslink-deploy \
		--domain=ipfs.io --record=@ --path=/ipfs/$(shell cat versions/current)

# this assumes blog is a sibling.
update-blog:
	@rm -rf blog
	cp -r ../blog/build blog

# this assumes awesome-ipfs is a sibling
update-awesome:
	curl -s https://raw.githubusercontent.com/ipfs/awesome-ipfs/master/README.md > src/ipfs.io/docs/awesome-ipfs/readme.md

.PHONY: build clean publish publish-to-github

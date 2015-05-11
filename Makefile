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
	ipfs add -r -q build | tail -n1 >versions/current
	cat versions/current >>versions/history
	@export hash=`cat versions/current`; \
		export ipfshash=`ipfs ls $$hash | grep ipfs.io | cut -d ' ' -f 1`; \
		echo "here are the links:"; \
		echo $(local)$$hash; \
		echo $(gway)$$hash; \
		echo ""; \
		echo "now must:"; \
		echo "- seed websites: /ipfs/$$hash"; \
		echo "- add to ipfs.io: $$ipfshash"; \

publish-to-github:
	./publish-to-github

# this assumes blog is a sibling.
update-blog:
	@rm -rf blog
	cp -r ../blog/build blog

.PHONY: build clean publish publish-to-github

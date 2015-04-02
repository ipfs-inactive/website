local="http://localhost:8080/ipfs/"
gway="http://gateway.ipfs.io/ipfs/"

build: deps
	./build.js

deps: node_modules

node_modules: package.json
	# npm install

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

.PHONY: build clean publish publish-to-github

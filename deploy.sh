#!/bin/sh
echo '==> deploying website'
git checkout -b deploy
make clean
make
git add -f build/
git commit -m "payload"
git checkout master
git filter-branch --subdirectory-filter build/ -f deploy
git push -f origin deploy:gh-pages
git branch -D deploy

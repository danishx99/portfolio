#!/usr/bin/env sh
set -eu

rm -rf dist
mkdir -p dist

cp index.html styles.css script.js dist/

if [ -f favicon.svg ]; then
  cp favicon.svg dist/
fi

if [ -f Danish_Saleem_CV.pdf ]; then
  cp Danish_Saleem_CV.pdf dist/
fi

if [ -d assets ]; then
  cp -R assets dist/
fi

#!/usr/bin/env sh
set -eu

rm -rf dist
mkdir -p dist

cp index.html styles.css script.js dist/

if [ -d assets ]; then
  cp -R assets dist/
fi

#!/bin/sh

NAME=$1
DEST=$2/${NAME}

mffr npm-js-scaffolding ${NAME} -f
mkdir ${DEST}
cp LICENSE gulpfile.js package.json index.js .travis.yml .gitignore .npmignore ${DEST}
cp README-APP.md ${DEST}/README.md
cp -R test ${DEST}

git reset --hard

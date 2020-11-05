#!/usr/bin/env bash
printf "\n\n######## build & deploy GitHub Pages from a fork ########\n"
printf "\n## Info: Non-destructive build. Result is deployed on \"gh-pages\" branch in \"$(git rev-parse --abbrev-ref HEAD)\" folder.\n\n"

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

cd ${DIR}/..
pwd

npm install
npm run build
npm run deploy-branch

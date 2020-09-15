#!/usr/bin/env bash
printf "\n\n######## gh-pages ########\n"

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

echo "Building ${IMAGE_REPOSITORY} from ${SOURCE_REPOSITORY_URL} on ${SOURCE_REPOSITORY_REF}"

#TODO currently using node + gatsby serve.  Can switch to building assets and serving via nginx/httpd but requires a custom builder or chained build.
s2i build ${SOURCE_REPOSITORY_URL} --ref ${SOURCE_REPOSITORY_REF} --context-dir / registry.access.redhat.com/ubi8/nodejs-12 ${IMAGE_REPOSITORY}

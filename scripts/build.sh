#!/usr/bin/env bash
printf "\n\n######## building s2i image ########\n"

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

echo "Building ${IMAGE_REPOSITORY} from ${SOURCE_REPOSITORY_URL} on ${SOURCE_REPOSITORY_REF}"

#TODO currently using node + gatsby serve.  Can switch to building assets and serving via nginx/httpd but requires a custom builder or chained build.
if ! command -v ${CONTAINER_BUILDER} &>/dev/null; then
    echo "CONTAINER_BUILDER=${CONTAINER_BUILDER} doen't match any available executable, exiting."
    exit 1
elif [ ${CONTAINER_BUILDER} == 'docker' ] && docker version 2>&1 | grep -q podman; then
    echo "CONTAINER_BUILDER=${CONTAINER_BUILDER} is emulated via 'podman', enabling podman s2i workarounds."
    CONTAINER_BUILDER='podman'
fi

echo "Building via CONTAINER_BUILDER=${CONTAINER_BUILDER}"

if [ ${CONTAINER_BUILDER} == 'podman' ]; then
    mkdir -p build
    s2i build ${SOURCE_REPOSITORY_URL} --ref ${SOURCE_REPOSITORY_REF} --context-dir / registry.access.redhat.com/ubi8/nodejs-12 ${IMAGE_REPOSITORY} --as-dockerfile build/Dockerfile
    podman build ./build -t ${IMAGE_REPOSITORY}
else
    s2i build ${SOURCE_REPOSITORY_URL} --ref ${SOURCE_REPOSITORY_REF} --context-dir / registry.access.redhat.com/ubi8/nodejs-12 ${IMAGE_REPOSITORY}
fi

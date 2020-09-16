#!/usr/bin/env bash
printf "\n\n######## deploy ########\n"

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

echo $OC_PROJECT
oc project ${OC_PROJECT} 2> /dev/null || oc new-project ${OC_PROJECT}

oc project

oc apply -k "${DIR}/templates/base"

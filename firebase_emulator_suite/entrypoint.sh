#!/usr/bin/env bash

#set -x

exec firebase --project ${FIREBASE_PROJECT_ID} $@

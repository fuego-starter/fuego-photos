#!/bin/sh

if [ -n "$CODEBUILD_BUILD_ID" ]; then export NODE_ENV=test; fi

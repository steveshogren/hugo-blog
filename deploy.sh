#!/bin/sh

hugo && cd public && git add . && git commit -m "deploying" && git push && cd ..

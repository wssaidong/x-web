#!/bin/bash

echo 'start'
rm -rf ./app
cnpm run dev:dist
rm -rf ../nginx-docker/app
cp -rf ./app ../nginx-docker
cd ../nginx-docker
sh deploy.sh
echo 'end'

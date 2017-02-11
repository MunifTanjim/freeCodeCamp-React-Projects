#!/usr/bin/env sh

# get paths for projects
projects=$(find . -maxdepth 2 -name package.json -print0 | xargs -0 -n1 dirname)

# build projects
for project in "${projects}"; do
  cd "${project}"
  yarn run build
  cd ..
done

# include the entry point
cp index.html style.css build

# deploy to surge.sh
surge -p build -d https://react-projects-fcc-mt.surge.sh

#!/usr/bin/env sh

# get paths for projects
_ROOT="$( cd "$( dirname "${0}" )" && pwd )"
_PROJECTS="$(find "${_ROOT}" -maxdepth 2 -name package.json -print0 | xargs -0 -n1 dirname)"

# build projects
for PROJECT in ${_PROJECTS}; do
  cd "${PROJECT}"
  yarn run build
  cd ..
done

# include the entry point
cp index.html style.css build

# deploy to surge.sh
surge -p build -d https://react-projects-fcc-mt.surge.sh

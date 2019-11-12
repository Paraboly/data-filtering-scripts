#!/bin/sh

set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
NO_COLOR='\033[0m'
CLEAR_LINE='\r\033[K'


if ! command -v node > /dev/null; then

  # Set a specific color on a per-line basis
  printf "${CLEAR_LINE}💀${RED}   You must install node on your system before setup can continue${NO_COLOR}\n"
  printf "ℹ️   On macOS🍎 you should 'brew install node'\n"
  exit -1
fi
printf "⏳   $1 is being cloned"

# FILES=/media/gps/*
# prefix="konya-ankara"
# for f in $FILES
# do
#   echo "Processing $f file..."
#   filename=$(basename -- "$f")
#   node inside.js $f > "$prefix-$filename" & 
# done
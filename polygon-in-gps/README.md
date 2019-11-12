## Prerequisites 

1. Nodejs

## Installation

```bash
npm install
```

## Usage

1. Firstly change `polygon` field to your polygon of interest in GEOJSON format in `index.js` file. You can quickly get polygon in GEOJSON format from geojson.io 

2. Run shell command 
```bash
node inside.js {your-gps-file.csv} > filtered.csv

```
This script will filtered gps and redirect output to `filtered.csv`

### Multiple file filtering

1. Firstly change `polygon` field to your polygon of interest in GEOJSON format in `index.js` file. You can quickly get polygon in GEOJSON format from geojson.io 

2. Shell script which reads csvs from directory
```bash
FILES=/media/gps/*
prefix="konya-ankara"
for f in $FILES
do
  echo "Processing $f file..."
  filename=$(basename -- "$f")
  node inside.js $f > "$prefix-$filename" & 
done


```

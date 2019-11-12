var turf = require('@turf/turf');

const fs = require('fs'); 

var parse = require('csv-parse');

//geojson.io
var polygon = turf.polygon([
          [
            [
              29.026029109954834,
              41.02683487839711
            ],
            [
              29.031865596771237,
              41.02683487839711
            ],
            [
              29.031865596771237,
              41.028647877590366
            ],
            [
              29.026029109954834,
              41.028647877590366
            ],
            [
              29.026029109954834,
              41.02683487839711
            ]
          ]
        ]);
fs.createReadStream(process.argv[2])
    .pipe(parse({delimiter: ';'}))
    .on('data', function(csvrow) {
        var pt = turf.point([csvrow[2], csvrow[3]]);
        if(turf.booleanPointInPolygon(pt, polygon)){
            console.log(csvrow[0] + "," + csvrow[1] + "," + csvrow[2]+ "," + csvrow[3] + "," + csvrow[4] + "," + csvrow[5] + "," + csvrow[6]);
        }

    })
    .on('end',function() {
    });

'use strict';

var express = require('express');
var app = express();
var url = require('url');
var http = require('http');
var unix, natural, time;
var moment = require('moment');
var port = process.env.PORT || 8080;  

  

app.get('/:time', function(req, res) {
    var timestamp = moment(req.params.time, 'MMMM DD, YYYY', true);
        if (!timestamp.isValid()) {
            time = moment.unix(req.params.timestamp);
        }
         
        if (!time.isValid()) {
    res.json({
      'unix': null,
      'natural': null
    });
  }
  
  res.json({
    'unix': time.format('X'),
    'natural': time.format('MMMM DD, YYYY')
  });
        });



app.listen(port, function () {
  console.log('App listening on port 8080!');
});
'use strict';

var express = require('express');
var app = express();
var url = require('url');
var http = require('http');
var unix, natural, data;
var moment = require('moment');
var port = process.env.PORT || 8080;  

  

app.get('/:time', function(req, res) {
    var urlObj = url.parse(req.url, true);
    var pathname = urlObj.path.split('');
	pathname.shift();
	pathname = pathname.join('');
	pathname = pathname.replace(/%20/, ' ').replace(/%20/, ' ');
    
      pathname = urlObj.pathname;
      var date = new Date(pathname);
      if (isNaN(Number(pathname)) && date != 'Invalid Date') {
          natural = pathname;
          unix = Date.parse(pathname);
      } else if(!isNaN(Number(pathname))){
		natural = moment.unix(Number(pathname)).format("MMMM DD, YYYY");
		unix = pathname;
	}
	else { natural = null; unix = null; } 
	data = {"unix": unix, "natural": natural};
	res.write(JSON.stringify(data));
	res.end();
})



app.listen(port, function () {
  console.log('App listening on port 8080!');
});
'use strict';

var express = require('express');
var parser  = require("body-parser")
var routes = require('./app/routes/index.js');
var api = require('./app/api/timestamp.js');

var app = express();

app.use('/public', express.static(process.cwd() + '/public'));
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());


routes(app);
api(app);


var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});
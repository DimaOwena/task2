var express = require('express');
var db = require('./db/index.js');
// Router
var router = require('./routes.js');
var app = express();

//not sure we need
module.exports.app = app;

app.use('/', router);

// Serve the client files
app.use(express.static(__dirname + '/../client'));

app.set('port', 3000);
app.listen(3000)
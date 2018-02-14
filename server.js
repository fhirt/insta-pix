// setup the app
var express = require('express');
var app = express();

// define routes
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

// start the server on port 8080
app.listen(8080);
console.log('Server has started!')

// IMPORTS
// =======================================================
var express = require('express');
var app = express();
var ig = require('instagram-node').instagram();
require('dotenv').config();

// CONFIGURE THE APP
// =======================================================
// static resources
app.use(express.static(__dirname + '/public'));

// set the view engine
app.set('view engine', 'ejs');

// configure instagram access
ig.use({
  access_token: process.env.INSTA_TOKEN
});

// SETUP ROUTES
// =======================================================
app.get('/', function(req, res) {
  // get popular media from instagram
  ig.user_self_media_recent(function(err, medias, pagination, remaining, limit) {
    if(err) {
      // TODO: redirect to error handling
      console.log(err.code);
      console.log(err.message);
      return 0;
    }
    
    res.render('pages/index', { grams: medias });
  });
});

// START THE SERVER
// =======================================================
app.listen(process.env.PORT);
console.log('Server started on port:' + process.env.PORT);

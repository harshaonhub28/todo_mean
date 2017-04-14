var express = require('express');
var app = express();
var path = require('path');

var port = process.env.PORT || 3000;
var config = require('./config');
var mongoose = require('mongoose');

var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');

app.use('/',express.static(__dirname+'/public'));
app.use('/',express.static(__dirname+'/public/src'));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/public/src/index.html'));
});

mongoose.connect(config.dbConnection());

setupController(app);
apiController(app);

app.listen(port);

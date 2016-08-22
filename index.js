var express = require('express');
var server = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var port = process.env.PORT || 8080;
mongoURI = process.env.MONGOURI || require('./config.js').mongoURI;

mongoose.connect(mongoURI);
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
server.use(cors());

server.get('/', function(req, res){
  res.send('booya');
});

server.listen(port, function(req, res){
  console.log('Now listening on port:', port);
});

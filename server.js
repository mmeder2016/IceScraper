////////// MODULEDEPENDENCIES
var request = require('request');
var cheerio = require('cheerio');
var mongoose = require('mongoose');

////////// EXPRESS SETUP
var express = require("express");
var app = express();

////////// HANDLEBARS SETUP
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

////////// METHOD OVERRIDE SETUP
// var methodOverride = require('method-override');
// app.use(methodOverride('_method'));

////////// BODY PARSER SETUP
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

////////// ALLOW CORS http://enable-cors.org/server_expressjs.html
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

////////// SET PORT PLATFORM INDEPENDENT 
app.set('port', (process.env.PORT || 3000));

////////// DATABASE MODELS
var db;
//var db = require('./models');

////////// SET ROUTES
var router = require('./router');
router(app, db, __dirname);



////////// START THE SERVER
app.listen(app.get('port'), function() {
    console.log("App running on port 3000!");
});
// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
// Snatches HTML from URLs
var request = require('request');
// Scrapes our HTML
var cheerio = require('cheerio');

var mongoose = require('mongoose');

// Initialize Express
var app = express();



// This makes sure that any errors are logged if mongodb runs into an issue
db.on("error", function(error) {
    console.log("Database Error:", error);
});


// Set the app to listen on port 3000
app.listen(3000, function() {
    console.log("App running on port 3000!");
});
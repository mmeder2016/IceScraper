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


// Log what we are scraping
console.log("\n*************************************************************\n" +
    "Going to the Washington Post and collecting all the Headlines and Links\n" +
    "\n*************************************************************\n");

// An empty array to save the data that we'll scrape
var scrapeResults = [];

// Get the html of the main web page and save it in the html
request("https://www.washingtonpost.com/", function(error, response, html) {

    // Load the HTML into cheerio and save it to a variable
    var $ = cheerio.load(html);

    // An empty array to save the data that we'll scrape
    var scrapeResults = [];

    // With cheerio, find each div with the "headline" class
    $('div.headline').each(function(i, element) {

        // Save the text of the child element in the "title" variable
        var title = $(element).children().text();
        // Save the link of the child element in the "link" variable
        var link = $(element).children().attr("href");

        // if the there is a title and a link, 
        if (title && link) {
            // Save these scrapeResults in an object
            scrapeResults.push({
                title: title,
                link: link
            });
        }
    });
    // Log the result once cheerio analyzes each of its selected elements
    console.log(scrapeResults);

});
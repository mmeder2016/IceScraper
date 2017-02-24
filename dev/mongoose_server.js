var express = require("express");
var bodyParser = require("body-parser");

var mongoose = require("mongoose");
// Bring in our Models: Not and User
var Comment = require("./models/Comment.js");
var Story = require("./models/Story.js");
// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

var app = express();

// Use morgan and body parser with our app
app.use(bodyParser.urlencoded({
    extended: false
}));

// Database configuration with mongoose
mongoose.connect("mongodb://localhost/test_db");
var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
    console.log("Mongoose Error: ", error);
});

db.once("open", function() {
    console.log("Mongoose connection successful.");
});


// var jsonStory = {
//     headline: "testHeadline_3",
//     link: "testLink_3"
// };
// var story = new Story(jsonStory);

// story.save(function(error, doc) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(doc);
//     }
// });

Story.find({}, function(error, doc) {
    if (error) {
        console.log(error);
    } else {
        console.log(doc);
    }
});

var jsonComment = {
    body: "testComment"
};
var comment = new Comment(jsonComment);
var storyId = "58b05c83ef721224ec4860b9";
var commentId = "58b06a62891756118073513a";

comment.save(function(error, savedComment) {
    if (error) {
        console.log(error);
    } else {
        console.log(savedComment);
        commentId = savedComment._id;
        // req.params.id
        Story.findOneAndUpdate({ "_id": storyId }, { $push: { "comments": savedComment._id } }, { new: true }, function(err, newdoc) {
            if (err) {
                console.log(err);
            } else {
                console.log(newdoc);
            }
        });
    }
});

Story.findByIdAndRemove(storyId, function(error, story) {
    if (error) {
        console.log(error);
    } else {
        console.log("Deleted Story:id:" + story._id);
    }
});

Comment.findByIdAndRemove(commentId, function(error, comment) {
    if (error) {
        console.log(error);
    } else {
        console.log("Deleted Comment:id:" + comment._id);
    }
});
// SERVER API ROUTING
module.exports = function(app, db, approot) {
    var path = require('path');
    var Comment = require(path.join(approot, '/models/Comment.js'));
    var Story = require(path.join(approot, '/models/Story.js'));

    // Get the main page and populated it with stories from the database
    app.get("/", function(req, res) {
        console.log('app.get("/", function(req, res) {');

        // Other parts were developed and implemented to receive the Story and 
        // the Comment response in a specific form. The Story object would have
        // the Comment object embedded in it. Below I get the Story array and
        // then the Comment array and assemble respObj (response Object) to be 
        // in this form.
        Story.find({}, function(error, storyArray) {
            if (error) {
                console.log(error);
            } else {
                var respObj = []; // The response object.
                Comment.find({}, function(error, commentArray) {
                    if (error) {
                        console.log(error);
                    } else {
                        // 1.) For each story
                        for (var i = 0; i < storyArray.length; i++) {
                            // 2.) Create a corresponding story variable for the respObj
                            var responseStory = {
                                _id: storyArray[i]._id,
                                headline: storyArray[i].headline,
                                link: storyArray[i].link,
                                comments: [] // will be populated with all the comments
                            };
                            // 3.) For each comment in each story
                            for (var j = 0; j < storyArray[i].comments.length; j++) {
                                // 4.) Go through all the comments in the comments array
                                for (var k = 0; k < commentArray.length; k++) {
                                    // 5.) When matching comment found
                                    if (storyArray[i].comments[j].toString() === commentArray[k]._id.toString()) {
                                        // 6.) Push comment into respObj responseStory's comments array
                                        responseStory.comments.push(commentArray[k]);
                                    }
                                }
                            }
                            respObj.push(responseStory);
                        }
                        res.render('index', { stories: respObj });
                    }
                });
            }
        });
    });

    app.post("/", function(req, res) {
        console.log('app.post("/", function(req, res) {');
        console.log(req.body);

        res.send('app.post("/", function(req, res) {');
    });

    // Add new comments to database and then redirect to app.get('/') 
    app.put("/:id", function(req, res) {
        console.log('app.put("/:id", function(req, res) {');
        var comment = new Comment({ body: req.body.comment });
        comment.save(function(error, savedComment) {
            if (error) {
                console.log(error);
            } else {
                console.log(savedComment);
                commentId = savedComment._id;
                Story.findOneAndUpdate({ "_id": req.params.id }, { $push: { "comments": savedComment._id } }, { new: true }, function(err, newdoc) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(newdoc);
                        res.redirect("/");
                    }
                });
            }
        });
    });
};
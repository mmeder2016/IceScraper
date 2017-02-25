// SERVER API ROUTING
module.exports = function(app, db, approot) {
    var path = require('path');
    var Comment = require(path.join(approot, '/models/Comment.js'));
    var Story = require(path.join(approot, '/models/Story.js'));

    app.get("/", function(req, res) {
        console.log('app.get("/", function(req, res) {');
        Story.find({})
            .populate("comments")
            // Now, execute the query
            .exec(function(error, doc) {
                // Send any errors to the browser
                if (error) {
                    res.send(error);
                } else {
                    res.render('index', { stories: doc });
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
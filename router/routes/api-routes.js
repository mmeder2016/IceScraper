// SERVER API ROUTING
module.exports = function(app, db, approot) {
    var path = require('path');
    var Comment = require(path.join(approot, '/models/Comment.js'));
    var Story = require(path.join(approot, '/models/Story.js'));

    app.get("/", function(req, res) {
        console.log('app.get("/", function(req, res) {');

        Story.find({}, function(error, storyArray) {
            if (error) {
                console.log(error);
            } else {
                res.json(storyArray);
                //res.render('index', { stories: storyArray });
            }
        });
    });

    app.post("/", function(req, res) {
        console.log('app.post("/", function(req, res) {');
        console.log(req.body);

        res.send('app.post("/", function(req, res) {');
    });

    app.put("/:id", function(req, res) {
        console.log('app.put("/:id", function(req, res) {');
        console.log('req.params.id:' + req.params.id);
        console.log('req.body.comment:' + req.body.comment);
        var comment = new Comment({ body: req.body.comment });
        comment.save(function(error, savedComment) {
            if (error) {
                console.log(error);
            } else {
                console.log(savedComment);
                commentId = savedComment._id;
                // req.params.id
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
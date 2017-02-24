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
                //res.json(storyArray);
                res.render('index', { stories: storyArray });
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

        res.send('app.put("/:id", function(req, res) {');
    });
};
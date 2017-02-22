module.exports = function(app, db, approot) {
    app.get("/", function(req, res) {
        console.log('app.get("/", function(req, res) {');
        //res.render("index");
        res.send('app.get("/", function(req, res) {');

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
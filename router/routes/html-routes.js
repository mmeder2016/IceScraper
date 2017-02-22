var path = require("path");

module.exports = function(app, db, approot) {
    // Each of the below routes just handles the HTML page that the user gets sent to.
    app.get("/html", function(req, res) {
        var html_file = path.join(__dirname + "/../../public/test.html");
        console.log('app.get("/", function(req, res) { \nSending: ' + html_file)
        res.sendFile(html_file);
    });
};
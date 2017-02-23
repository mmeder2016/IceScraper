// HTML ROUTING

var path = require("path");

module.exports = function(app, db, approot) {

    // Test route for development
    app.get("/html", function(req, res) {
        var html_file = path.join(approot, '/public/test.html');
        console.log('app.get("/html", function(req, res) { \nSending: ' + html_file);

        res.sendFile(html_file);
    });
};
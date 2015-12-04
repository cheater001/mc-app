var express = require("express");
var app = express();

app.use(express.static(__dirname + '/app' ));

app.get("/", function (req, res) {
    res.sendfile(__dirname + '/app/index.html')
});

app.get(/^(.+)$/, function (req, res) {
    console.log('static file request : ' + req.params);
    res.sendfile(__dirname + req.params[0]);
});

var port = process.env.PORT || 5000;

app.listen(port, function () {
    console.log("Listening on " + port);
});

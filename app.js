var express = require('express');
var app = express();
const port_number = 8008;

app.set("view engine", "ejs");
app.use(express.urlencoded({
    extended: false }));

app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res) {
    res.render("index");
    });

app.get("/index", function(req, res) {
    res.render("index");
    });

app.get("/shop", function(req, res) {
    res.render("shop");
    });

app.listen(port_number, function() {
console.log('App listening on port ' + port_number + '!');
});
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

app.get("/products", function(req,res){
    const q = "select * from Product order by brand";
    //con.query(q, (err, results) => {
    if (err) throw err;
    console.log(results);
    //res.send(results);
    res.render("displayAll", { students: results });
});

app.post("/cart", function(req,res){
    let productID = req.body.id;
    const q = "INSERT INTO Product VALUES ? ? ?";
// con.query(q, [ID], (err, results) => {
// if (err) throw err;
// res.render("searchResult", { Student: results[0], count: results.length })
});


app.listen(port_number, function() {
console.log('App listening on port ' + port_number + '!');
});
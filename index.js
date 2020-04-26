var express = require("express");
var app = express();

app.use("/population",express.static("Public"));
app.use("/childpopulation",express.static("Public"));
app.use("/literates",express.static("Public"));
app.use("/literacyrate",express.static("Public"));
app.use("/sexratio",express.static("Public"));
app.use("/graduates",express.static("Public"));

app.get("/",function(req,res){
    res.render("homepage.ejs");
});

app.get("/maps",function(req,res){
    res.render("maps.ejs");
});

app.get("/about",function(req,res){
    res.render("about.ejs");
});

app.get("/population",function(req,res){
    res.render("pop.ejs");
});

app.get("/childpopulation",function(req,res){
    res.render("child_pop.ejs");
});

app.get("/literates",function(req,res){
    res.render("lit.ejs");
});

app.get("/literacyrate",function(req,res){
    res.render("lit_rate.ejs");
});

app.get("/sexratio",function(req,res){
    res.render("sr.ejs");
});

app.get("/graduates",function(req,res){
    res.render("grad.ejs");
});

app.listen(8000,function(){
    console.log("Server started on port 8000");
});
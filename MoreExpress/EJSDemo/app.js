var express = require("express");
var app = express();

app.get("/", function(req, res){
	res.render("home.html");
	res.send("<h1>Welcome to the home page!</h1><h2>blah blah blah</h2>")
});

app.listen(process.env.PORT, process.env.IP, function(){
	console.log("Server is listening!!!");
});
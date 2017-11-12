var express = require("express");
var app = express();

app.get("/", function(req, res){
   res.send("Hi there, welcome to my assignment!"); 
});

app.get("/speak/:animal", function(req, res){
    var voices = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof!",
        cat: "Fuck you",
        fish: "Blob"
    }
    var animal = req.params.animal.toLowerCase();
    var voice = voices[animal];
   res.send("The " + animal + " says '" + voice + "'"); 
});

app.get("/repeat/:word/:nbr", function(req, res){
    var word = req.params.word;
    var nbr = Number(req.params.nbr);
    var sentence = "";
    for (var i = 0; i < nbr; i++){
        sentence += word + " ";
    }
    res.send(sentence);
});

app.get("*", function(req, res){
   res.send("Sorry, page not found... What are you doing with your life?");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started");
});
// 1)-> Initialization
const express = require('express');
const app = express();

const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://ShubhamHarsh:Pb3zgpYV61xZv4lT@cluster0.jxblg4i.mongodb.net/?retryWrites=true&w=majority").then(function(){
    app.get("/", function(req,res){
        res.send("This is the home page");
    });

    app.get("/notes", function(req,res){
        res.send("This is the Notes page");
    });
});



// 3)-> Starting the server on a port

app.listen(5000, function(){
    console.log("Server started at PORT : 5000");
}); // port

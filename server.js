// 1)-> Initialization
const express = require('express');

const app = express();

// 2)-> App Routing

// Home Page Route
app.get("/", function(req,res){
    res.send("This is the home page");
});

// Notes Route
app.get("/notes", function(req,res){
    res.send("This is the Notes page");
});

// 3)-> Starting the server on a port

app.listen(5000); // port

// 1)-> Initialization
const express = require('express');
const app = express();

const mongoose = require('mongoose');
const Note = require('./models/Note');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false})); // Nested objects for true
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://ShubhamHarsh:Pb3zgpYV61xZv4lT@cluster0.jxblg4i.mongodb.net/?retryWrites=true&w=majority").then(function(){
    app.get("/", function(req,res){
        res.send("This is the home page");
    });

    app.get("/notes/list/:userid", async function(req,res){
        var notes = await Note.find({userid: req.params.userid});
        res.json(notes);
    });

    app.post("/notes/add", async function(req,res){

        const newNote = new Note({
            id: req.body.id,
            userid: req.body.userid,
            title: req.body.title,
            content: req.body.content
        });
        await newNote.save();

        const response = { message: "New Note Created!"};
        res.json(response);
    });
});



// 3)-> Starting the server on a port

app.listen(5000, function(){
    console.log("Server started at PORT : 5000");
}); // port

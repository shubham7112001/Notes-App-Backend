// 1)-> Initialization
const express = require('express');
const app = express();

const mongoose = require('mongoose');
const Note = require('./models/Note');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false})); // Nested objects for true
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://ShubhamHarsh:Pb3zgpYV61xZv4lT@cluster0.jxblg4i.mongodb.net/?retryWrites=true&w=majority").then(function(){
    console.log("mongo db connected");
    app.get("/", function(req,res){
        const response = {message: "API Working Fine"};
        res.json(response);
    });

    app.post("/notes/list", async function(req,res){
        var notes = await Note.find({userid: req.body.userid});
        res.json(notes);
    });

    app.post("/notes/add", async function(req,res){

        await Note.deleteOne({id: req.body.id});
        const newNote = new Note({
            id: req.body.id,
            userid: req.body.userid,
            title: req.body.title,
            content: req.body.content
        });
        await newNote.save();

        const response = { message: "New Note Created! id: " +req.body.userid };
        res.json(response);
    });


    app.post("/notes/delete",async function(req,res){
        await Note.deleteOne({id: req.body.id});

        const response = { message: "Note Deleted! id: " +req.body.id };
        res.json(response);
    })


});



// 3)-> Starting the server on a port

app.listen(5000, function(){
    console.log("Server started at PORT : 5000");  
}); // port

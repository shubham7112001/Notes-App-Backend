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


    const noteRouter = require('./routes/Note');
    app.use("/notes",noteRouter);


});



// 3)-> Starting the server on a port

app.listen(5000, function(){
    console.log("Server started at PORT : 5000");  
}); // port

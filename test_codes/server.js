const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Question = require("./models/questions.js");


app.set("view engine", "ejs");

// DB
// replace the ...//test:test@dysa... with ...//<username>:<password@dysa...>
const dbURI = "mongodb+srv://test:test@dysas-questionbank.99l7u.mongodb.net/QuestionBank?retryWrites=true&w=majority";
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => console.log("running"))
.catch((err) => console.log(err));

app.listen(3000)

app.get('/', (req, res) =>{
    res.send('Hello');
})

app.get('/add', (req, res) =>{
    const Ques = new Question({
        QuestionID: 2,
        Subject: "Probability",
        Topic: "Basics",
        QuestionText: "What is the chance of getting a head on a coin toss ?",
        Options: ["50 %", "25%", "75%", "100%"],
        CorrectIndex: 1,
        DifficultyLevelMarks: 2
    });

    Ques.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        });
});

app.get('/view-all', (req, res) =>{
    Question.find()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        });
});

app.get('/view-one', (req, res) =>{
    Question.findById("6239c91c3dafd5cb93bf5b81")
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        });
});
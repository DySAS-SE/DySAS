const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    QuestionID: {
        type: Number,
        required: true
    },
    Subject: {
        type: String,
        required: true
    },
    Topic: {
        type: String,
        required: true
    },
    QuestionText: {
        type: String,
        required: true
    },
    Options: {
        type: [String],
        required: true
    },
    CorrectIndex: {
        type: Number,
        required: true
    },
    DifficultyLevelMarks: {
        type: Number,
        required: true
    },
}, {timestamps: true});

const Question = mongoose.model("Question", questionSchema);
module.exports = Question;
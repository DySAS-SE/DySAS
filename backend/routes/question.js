const express = require("express");
const mongodb = require("mongodb");
const router = express.Router();

// Get all questions from the database
router.get("/", (req, res, next) => {
  const database = req.app.locals.database;
  const questions = database.collection("questions");
  questions
    .find({})
    .toArray()
    .then((result) => res.send(result))
    .catch((err) => next(err));
});

// Add question to the database
router.post("/", (req, res, next) => {
  const database = req.app.locals.database;
  const questions = database.collection("questions");

  questions
    .insertOne(req.body)
    .then((result) => res.send(result))
    .catch((err) => next(err));
});

// delete question from the mongodb database
router.delete("/:id", (req, res, next) => {
  const database = req.app.locals.database;
  const questions = database.collection("questions");

  questions
    .deleteOne({ _id: new mongodb.ObjectId(req.params.id) })
    .then((result) => res.send(result))
    .catch((err) => next(err));
});

// update a question
router.put("/:id", (req, res, next) => {
  const questions = req.app.locals.database.collection("questions");

  questions
    .updateOne({ _id: new mongodb.ObjectId(req.params.id) }, { $set: req.body })
    .then((result) => res.send(result))
    .catch((err) => next(err));
});

module.exports = router;

const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongodb = require("mongodb");

const app = express();

require("dotenv").config();

const dbClient = new mongodb.MongoClient(process.env.DB_URI);

dbClient
  .connect()
  .then((value) => {
    console.log("Connected to the database");
    app.locals.database = dbClient.db(process.env.DB_NAME);
  })
  .catch((err) => {
    console.log(err);
    dbClient.close();
  });

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/question", require("./routes/question"));

app.use(function (err, req, res, next) {
  res.status(422).send({ error: err.message });
  next(err);
});

module.exports = app;

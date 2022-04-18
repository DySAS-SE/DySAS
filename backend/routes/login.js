const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  const database = req.app.locals.database;
  database
    .collection("users")
    .findOne({
      username: req.query.username,
    })
    .then((user) => {
      if (!user || user.password !== req.query.password) {
        res.status(404).send({ message: "User not found!" });
      }
      res.status(200).send({
        message: "Success",
        id: user._id,
        email: user.email,
        username: user.username,
        isAdmin: user.isAdmin,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;

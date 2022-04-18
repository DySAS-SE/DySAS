const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  const database = req.app.locals.database;
  const userId = req.query.id;
  database
    .collections("classes")
    .find({ members: { $in: userId } })
    .then((classes) => {
      if (!classes) {
        res
          .status(404)
          .send({ message: "The user is enrolled in no classes!" });
      }
      console.log(classes);
      let response = {
        message: "Success!",
      };
    });
});

module.exports = router;

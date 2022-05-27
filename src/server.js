const express = require("express");
const mongoose = require("mongoose");

let database = "";

mongoose
  .connect(database, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((con) => {
    logger.info("DB connection Successfully!");
  });

const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(5001);

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

const port = 3000;

app.get("/", (req, res) => {
  var today = new Date();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  var day = today.toLocaleDateString("en-US", options);

  res.render("list", { 
    kindOfDay: day 
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

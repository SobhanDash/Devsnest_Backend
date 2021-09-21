const express = require("express");
const path = require("path");
const app = express();

let root = __dirname;

app.set("views", path.join(root, "/views"));
app.set("view engine", "jade");
app.use("/", (req, res) => {
  res.render("content", { name: "Neo" });
});

app.listen(5000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Listening at 5000 port");
  }
});

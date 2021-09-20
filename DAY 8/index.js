const express = require("express");
const app = express();

// we can have more than one middleware function.
app.get(
  "/",
  (req, res, next) => {
    console.log("call 1");
    next();
  },
  (req, res, next) => {
    console.log("call 2");
    next();
  },
  (req, res, next) => {
    console.log("call 3");
    res.sendStatus(200);
  }
);

// app.use()
function checkAdmin(req, res, next) {
  if (req.query.admin === "true") {
    next();
  } else {
    res.send("Admin rights nahi mila tereko(¬_¬ )");
  }
}

const adminDash = (req, res) => {
  res.send("Hello Admin sir");
};

app.get("/fakeAdmin", adminDash);
app.use(checkAdmin);
app.get("/adminDash", adminDash);

app.listen(5000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Listening at 5000 port");
  }
});

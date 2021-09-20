const express = require("express");
const app = express();

//get home route with /
app.get("/", (req, res) => {
  res.status(200).json({
    a: 20,
    b: 10,
  });
});

//only works with numbers for userId
app.get("/user/:userId(\\d+)", (req, res) => {
  console.log(req.params);
  res.json(req.params);
});

app.get("/g(e)?t", (req, res) => {
  res.send("responding to GET request. Works for both gt and get.");
});

/* 
?xyz="neo" -> xyz's value can be found by -> res.query [query parameter, contained in variables after ? and before &]

/:abc/products -> abc's value can be found by -> res.param [route parameter, contained in the URL]
*/
app.get("/test/:name", (req, res) => {
  console.log(req.params.name);
  res.json(req.params);
});

app.get("/api", (req, res) => {
  console.log(req.query);
  res.json(req.query);
});

// works for geeeeeeeet;
app.get("/ge+t", (req, res) => {
  res.status(200).send("works for geeeeeeeet");
});

// works for geRANDOMTEXTDOESNTMATTER;
app.get("/ge*t", (req, res) => {
  res.status(200).send("works for geRANDOMTEXTDOESNTMATTER");
});

app.post("/post", (req, res) => {
  res.send("Responding to a POST request made by the HTML POST Method");
});

app.put("/PUT", (req, res) => {
  res.send("Responding to an UPDATE request made by the HTML PUT Method");
});

app.delete("/delete", (req, res) => {
  res.send("Responding to a DELETE request made by the HTML DELETE Method");
});

// We can send anything using res.send(string/obj/array/a file)

//listening to a port and handling error while doing it
app.listen(5000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Listening at 5000 port");
  }
});

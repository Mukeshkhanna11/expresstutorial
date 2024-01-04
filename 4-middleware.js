const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");
app.use([authorize, logger]);
app.get("/", (req, res) => {
  res.send("home page");
});
app.get("/about", (req, res) => {
  res.send("about page");
});
app.get("/api/products", (req, res) => {
  console.log(req.user);
  res.send("products page");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});

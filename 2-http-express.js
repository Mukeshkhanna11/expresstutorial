const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("home page");
});
app.get("/about", (req, res) => {
  res.status(200).send("about page");
});
app.all("*", (req, res) => {
  res.status(404).end("page not found");
});
app.listen(5000, () => {
  console.log("this is the port 5000....");
});

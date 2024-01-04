const express = require("express");
const app = express();
let { people } = require("./data");
app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, date: people });
});

app.listen(5000, () => {
  console.log("this is port 5000");
});

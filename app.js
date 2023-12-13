const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("hello world");
    res.end();
  } else if (req.url === "/about") {
    res.write("about page");
    res.end();
  } else {
    res.write("there is no such page");
    res.end();
  }
});
server.listen(5000);

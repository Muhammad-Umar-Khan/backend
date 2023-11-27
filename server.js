const http = require("http"); //this module gives you networking capabilities;
const server = http.createServer((req, res) => {
  res.end("This is my first server!!");
});

server.listen(3001, () => {
  console.log("Listening on port 3000");
});

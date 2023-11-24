const http = require("http"); //this module gives you networking capabilities;
http.createServer((req, res) => {
  res.end("This is my first server!");
});

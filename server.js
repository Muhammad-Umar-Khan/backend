const http = require("http"); //this module gives you networking capabilities;
const server = http.createServer((req, res) => {
  res.end("This is my first server!!");
});

server.listen(3001, () => {
  console.log("Listening on port 3000");
});

//implementing different actions for different URLs is routing;
//http header is piece if information about the response we are sending back;

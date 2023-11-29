const http = require("http"); //this module gives you networking capabilities;
const fs = require("fs");
const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === "/" || pathName === "/product") {
    res.end("Product page");
  } else if (pathName === "/service") {
    res.end("Service page");
  } else if (pathName === "/api") {
    fs.readFile(`./dev-data/data.json`, "utf-8", (err, data) => {
      const response = JSON.parse(data);
      console.log(response);
      res.writeHead(200, {
        "Content-type": "application/json",
      });
      res.end(data);
    });
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
    });
    res.end("<h1>Page not found</h1>");
  }
});

server.listen(3001, () => {
  console.log("Listening on port 3000");
});

//implementing different actions for different URLs is routing;
//http header is piece if information about the response we are sending back;
//http headers passes addiotional contxt and metadata about the request or response;

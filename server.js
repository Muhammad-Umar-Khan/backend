const http = require("http"); //this module gives you networking capabilities;
const fs = require("fs"); //file system module;
const url = require("url");
const replaceTemplate = require("./modules/replaceTemplate");

const tempOverview = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  "utf-8"
);
const tempCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  "utf-8"
);
const tempProduct = fs.readFileSync(
  `${__dirname}/templates/template-product.html`,
  "utf-8"
);
const readData = fs.readFileSync("./dev-data/data.json", "utf-8");
const jsonData = JSON.parse(readData);
const server = http.createServer((req, res) => {
  // const pathname = req.url;
  const { query, pathname } = url.parse(req.url, true);
  console.log(query.id);
  console.log(pathname);
  if (pathname === "/" || pathname === "/overview") {
    const cardHtml = jsonData.map((ele) => replaceTemplate(tempCard, ele));
    res.writeHead(200, {
      "Content-type": "text/html",
    });
    const ouptput = tempOverview.replace("{%PRODUCT_CARDS%}", cardHtml);
    res.end(ouptput);
  } else if (pathname === "/product") {
    res.writeHead(200, {
      "Content-type": "text/html",
    });
    const product = jsonData[query.id];
    const outPut = replaceTemplate(tempProduct, product);
    res.end(outPut);
  } else if (pathname === "/service") {
    res.end("Service page");
  } else if (pathname === "/api") {
    res.writeHead(200, {
      "Content-type": "application/json",
    });
    res.end(JSON.stringify(jsonData));
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
    });
    res.end("<h1>Page Not found(404)</h1>");
  }
});

server.listen(3001, () => {
  console.log("Listening on port 3000");
});

//implementing different actions for different URLs is routing;
//http header is piece if information about the response we are sending back;
//http headers passes addiotional contxt and metadata about the request or response;
//JSON.stringify(object, (key, value) => {});

const http = require("http"); //this module gives you networking capabilities;
const fs = require("fs"); //file system module;

const replaceTemplate = (temp, ele) => {
  let output = temp.replace(/{%PRODUCTNAME%}/g, ele.productName);
  output = output.replace(/{%IMAGE%}/g, ele.image);
  output = output.replace(/{%PRICE%}/g, ele.price);
  output = output.replace(/{%FROM%}/g, ele.from);
  output = output.replace(/{%NUTRIENTS%}/g, ele.nutrients);
  output = output.replace(/{%QUANTITY%}/g, ele.quantity);
  output = output.replace(/{%DESCRIPTION%}/g, ele.description);
  output = output.replace(/{%ID%}/g, ele.id);
  if (!ele.organic) output = output.replace(/{%NOT_ORGANIC%}/g, "Not-Organic");
  return output;
};
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
  const pathName = req.url;
  if (pathName === "/" || pathName === "/overview") {
    const cardHtml = jsonData.map((ele) => replaceTemplate(tempCard, ele));
    res.writeHead(200, {
      "Content-type": "text/html",
    });
    const ouptput = tempOverview.replace("{%PRODUCT_CARDS%}", cardHtml);
    res.end(ouptput);
  } else if (pathName === "/product") {
    res.end("Product page");
  } else if (pathName === "/service") {
    res.end("Service page");
  } else if (pathName === "/api") {
    res.writeHead(200, {
      "Content-type": "application/json",
    });
    res.end(JSON.stringify(jsonData));
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
//JSON.stringify(object, (key, value) => {});

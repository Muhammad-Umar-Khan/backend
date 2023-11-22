const fs = require("fs");
const textIn = fs.readFileSync("./input.txt", "utf-8");
console.log(textIn);
const textIn02 = fs.readFile("./input.tsx", () =>
  console.log("Read file Async")
);
console.log(textIn02);

const fs = require("fs");
const textIn02 = fs.readFile("./input.tsx", () =>
  console.log("Read file Async")
);
const textIn = fs.readFileSync("./input.txt", "utf-8");
console.log(textIn02);
console.log(textIn);

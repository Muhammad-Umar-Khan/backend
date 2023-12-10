module.exports = (temp, ele) => {
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

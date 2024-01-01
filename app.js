const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
  res.send('<h1>home page</h1><a href="/api/products">products</a>');
});
app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, image, name } = product;
    return { id, image, name };
  });
  res.json(newProducts);
});
app.get("/api/products/:productID", (req, res) => {
  const { productID } = req.params;
  const singleProducts = products.find(
    (product) => product.id === Number(productID)
  );
  if (!singleProducts) {
    res.status(404).send("product not found");
  }
  res.json(singleProducts);
});

app.listen(5000, () => {
  console.log("port 5000 is on the show");
});

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

app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  console.log(req.params);
  res.send("hello world");
});
app.get("/api/products/query", (req, res) => {
  const { search, limit } = req.query;
  const sortedProducts = [...products];
  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    return res.send("product match not found");
  }
  res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
  console.log("port 5000 is on the show");
});

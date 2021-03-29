const express = require("express");
const cors = require("cors");
const fs = require("fs");
const articles = require("./articles.json");

let articlesDirectory = articles;

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});
app.get("/articles", function (req, res) {
  res.send(articlesDirectory);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

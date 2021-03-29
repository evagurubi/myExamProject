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

app.post("/articles", function (req, resp) {
  const {
    ref,
    title,
    keywords,
    warmer,
    content,
    photoURL,
    originalURL,
  } = req.body;
  const article = {
    ref,
    title,
    keywords,
    warmer,
    content,
    photoURL,
    originalURL,
  };
  articlesDirectory.push(article);
  fs.writeFileSync(
    "./articles.json",
    JSON.stringify(articlesDirectory),
    (err) => {
      if (err) console.log("Error writing file:", err);
    }
  );
  resp.send(articlesDirectory);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

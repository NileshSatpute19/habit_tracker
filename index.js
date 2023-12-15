const express = require("express");
const path = require("path");
const app = express();

const PORT = 5003;

// Set EJS as templating engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  return res.render("home", { title: "My Page dev by Nilesh " });
});

app.get("/playgroud", (req, res) => {
  const obj = {
    title: "EJS play groud",
  };
  return res.render("practice", obj);
});

app.listen(PORT, (err) => {
  if (err) {
    console.log("Error:", err);
  }
  console.log("Server staretd");
});

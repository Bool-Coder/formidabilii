const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;
app.use("/public", express.static(path.join(__dirname, "Static Files")));

app.get("/", (req, res) => {
  res.redirect("/acasa");
});

app.get("/contact", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/html/contact.html"));
});
app.get("/rezultate", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/html/results.html"));
});

app.get("/reguli", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/html/rules.html"));
});

app.get("/acasa", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/html/home.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

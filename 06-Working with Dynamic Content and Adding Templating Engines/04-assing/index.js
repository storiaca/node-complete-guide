const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const homePage = require("./routes/home");
const usersPage = require("./routes/users");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(usersPage.routes);
app.use(homePage);

app.use((req, res) => {
  res.status(404).render("404", { pageTitle: "404 Page Not Found" });
});

app.listen(4455);

const express = require("express");

const router = express.Router();

const users = [];

router.get("/users", (req, res) => {
  res.render("users", {
    pageTitle: "Add User Page",
    path: "/users"
  });
});

router.post("/users", (req, res) => {
  users.push({ name: req.body.name });
  res.redirect("/");
});

exports.routes = router;
exports.users = users;

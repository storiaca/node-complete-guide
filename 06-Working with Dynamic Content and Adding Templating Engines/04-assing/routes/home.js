const express = require("express");

const usersData = require("./users");

const router = express.Router();

router.get("/", (req, res) => {
  const users = usersData.users;
  res.render("index", {
    users,
    pageTitle: "Home",
    path: "/"
  });
});

module.exports = router;

const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "root123", {
  dialect: "mysql",
  host: "localhost"
});

module.exports = sequelize;
// host: 'localhost',
//   user: 'root',
//   database: 'node-complete',
//   password: 'kurs2019'

// pass: 'root123'

const Sequelize = require("sequelize");

const sequelize = new Sequelize("postgres", "postgres", "boomslang", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;

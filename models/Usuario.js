const Sequelize = require('sequelize');
const db = require("./db");

const Usuario = db.define("users", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },

  name: {
    type: Sequelize.STRING,
    allowNull: false,
    isEmpty: false,
  },


  email: {
    type: Sequelize.STRING,
    unique: true,
    isEmail: true,
  },
});
Usuario.sync;
module.exports = Usuario;
const Sequelize = require('sequelize');
const db = require("./db");

const Usuario = db.define("users", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
   
  },

  name: {
    type: Sequelize.STRING,
    allowNull: false,
    isEmpty: false,
  },


  email: {
    type: Sequelize.STRING,
    allowNull: false,
    isEmail: true,
  },

  password:{

    type: Sequelize.STRING,
    allowNull: false,
    isPassword: true,
  }
});

Usuario.sync({alter:true});
module.exports = Usuario;
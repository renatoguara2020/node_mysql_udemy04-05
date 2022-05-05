const Sequelize = require("sequelize");

const sequelize = new Sequelize("my_db_celke", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(function () {
    console.log("Conexão realizado com Sucesso ao Postgres SQL !!!!!");
  })
  .catch(function (error) {
    console.log("Não foi possível conectar ao banco de dados PostGreSQL", error);
  });
  // sequelize.sync({ force: true });
module.exports = sequelize;

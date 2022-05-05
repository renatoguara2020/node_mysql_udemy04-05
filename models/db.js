const Sequelize = require("sequelize");

const sequelize = new Sequelize("my_db_celke", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then( ()=> {
    console.log("Conexão realizado com Sucesso ao banco de dados SQL !!!!!");
  })
  .catch( (error)=> {
    console.log("Não foi possível conectar ao banco de dados", error);
  });
   //sequelize.sync({ force: true });
module.exports = sequelize;

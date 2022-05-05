const express = require("express");
const Usuario = require('./models/Usuario');
const app = express();

app.use(express.json());

app.get("/users", async (req, res) => {

    await Usuario.findAll({
        attributes: ['id', 'name', 'email','createdAt', 'updatedAt'], 
        order: [['id', 'ASC']]})
    .then((users) => {
        return res.json({
            erro: false,
            users
        });
    }).catch((error) => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Nenhum usuário encontrado!", error
        });
    });    
});

app.get("/users/:id",async (req, res) => {
    const { id } = req.params;

    // await Usuario.findAll({ where: {id: id }}).then((users)=>{
      await Usuario.findByPk(id).then((users)=>{
      return res.json({
        erro: false,
        users: users,
    });

    }).catch(()=>{
     
      return res.status(400).json({
        erro: true,
        mensagem: "Erro: Usuário não cadastrado com sucesso!"
    });

    })
    
});

app.post("/users", async (req, res) => {
    const { name, email } = req.body;   

    await Usuario.create(req.body)
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "Usuário cadastrado com sucesso!"
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Usuário não cadastrado com sucesso!"
        });
    });    
});

app.put("/usuario", (req, res) => {
    const { id, nome, email } = req.body;    
    return res.json({
        erro: false,
        id,
        nome,
        email
    });
});

app.delete("/usuario/:id", (req, res) => {
    const { id } = req.params;    
    return res.json({
        erro: false,
        id
    });
});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});
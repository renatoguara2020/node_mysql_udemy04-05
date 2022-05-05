const express = require('express')
const app = express()
const port = 8080
// const db = require('./models/db');
const Usuario = require('./models/Usuario');

app.use(express.json());
app.get('/usuario', (req, res) => {
 return  res.json({

    nome: "Nathan Barbosa Soares",
    email: "renatoguara2020@gmail.com",
    job: 'Analista de Sistemas Pleno em Desenvolvimento WEB com node Js e React JS',
    idade: 50
 });
});
// listar usuários
app.get('/usuario/:id', (req, res) => {
    const id1 = req.params.id;
     const nome1 = req.body.nome;
     const email1 = req.body.email;
    return res.json({
        erro:false,
        id: id1,
         nome: nome1,
         nome: nome1,
         email: email1,
    });

});

//cadastrar usuário no banco de dados MySQL
app.post("/users", async (req, res) => {
    const { name, email } = req.body;   

    await Usuario.create(req.body).
    then(() => {
        return res.status(200).json({
            erro: false,
            mensagem: "Usuário cadastrado com sucesso Status 200 OK!"
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Usuário não cadastrado com sucesso Status 404 not found!"
        });
    });    
});
//Atualizar os registros no banco de dados
app.put('/usuario/:id', (req, res)=>{
  const {id, nome, email} = req.body;

  return res.json({id:id, nome: nome, email: email});

});

// Apagar um usuário no banco de dados
app.delete('/usuario/:id', (req, res)=>{

    const {id} = req.params;

    return res.json({id:id});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
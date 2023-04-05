//index.js

var express = require('express');
var app = express();
var bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
var jsonParser = bodyParser.json()
require('dotenv').config()
var bp = require('body-parser')
var cors = require('cors')

const Influenciador = require('./model/influenciador')
const Empresa = require('./model/empresa')
const Proposta = require('./model/proposta')
const database = require("./db") 

// database.sync({force:true})

const pg = require('pg');
database.sync()

const bcrypt = require('bcrypt');

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))



// app.post('/login', async function(req, res){
//       console.log("estou pegando a senha", senha)
//      const userName = await Users.findOne({
//       where: {
//       senha: JSON.stringify(senha) 
//     } 
//   });
//    if (userName) {
//     const isSame = await bcrypt.compare(JSON.stringify(senha) , userName.senha);
//     return res.status(201).send(userName);
//   } else {
//     return res.status(401).send("Authentication failed");
//   }
// })
app.post('/createProposta', async function(req, res){

  try {
    const { mensagem_proposta, veiculo_midiatico, valor_divulgacao,influenciadorId , empresaId,status_proposta,tipo_remetente,id_remetente, id_destinatario} = req.body;
    const data = {
      mensagem_proposta,
      veiculo_midiatico,
      valor_divulgacao,
      influenciadorId,
      empresaId,
      status_proposta,
      tipo_remetente,
      id_remetente,
      id_destinatario
    };
    //saving the user
    const propostaEnvio = await Proposta.create(data);
    return res.status(201).send(propostaEnvio);
  }catch (error) {
    console.log(error);
  }

})
app.post('/createInfluencer', async function(req, res){

  try {
    const { nome, email, senha, cpf, tags, data_nascimento } = req.body;
    const data = {
      nome,
      email,
      senha: await bcrypt.hash(senha, 10),
      cpf, 
      tags,
      data_nascimento,
    };
    //saving the user
    const userName = await Influenciador.create(data);
    return res.status(201).send(userName);
  }catch (error) {
    console.log(error);
  }

})


app.post('/createEmpresa', async function(req, res){

  try {
    const { nome, email, senha, cnpj, tags } = req.body;
    const data = {
      nome,
      email,
      senha: await bcrypt.hash(senha, 10),
      cnpj, 
      tags,
    };
    //saving the user
    const userName = await Empresa.create(data);
    return res.status(201).send(userName);
  }catch (error) {
    console.log(error);
  }

})

app.get('/welcome', function(req, res){
  res.status(200).send("teste");
})



//--------------------> Porta de Produção
// app.listen(process.env.PORT ||3000, async function () {
//   console.log("teste ok")
//   return "servidor rodando"
// })


app.listen(4000, async function () {
  console.log("teste ok")
  return "servidor rodando"
})

var express = require('express');
var app = express();
var bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
var jsonParser = bodyParser.json()
require('dotenv').config()
var bp = require('body-parser')


const database = require("./db") 
const Users = require("./model/users")
const Agendas = require("./model/agendas")
const Salas = require("./model/salas")
// database.sync({force:true})

const pg = require('pg');
database.sync()

const bcrypt = require('bcrypt');


app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))





app.post('/login', async function(req, res){
try {
  const { nome, senha } = req.body;

     const userName = await Users.findOne({
      where: {
      senha: senha
    } 
  });

   if (userName) {
    const isSame = await bcrypt.compare(senha, userName.senha);
    return res.status(201).send(userName);
  
  
  } else {
    return res.status(401).send("Authentication failed");
  }
  
} catch (error) {
  console.log(error);
}
})

app.post('/createUser', async function(req, res){

  try {
    const { nome, email, senha } = req.body;
    const data = {
      nome,
      email,
      senha: await bcrypt.hash(senha, 10),
    };
    //saving the user
    const userName = await Users.create(data);
    return res.status(201).send(userName);
  }catch (error) {
    console.log(error);
  }

})

app.get('/welcome', function(req, res){
  res.status(200).send("VALEIiii");
})



//--------------------> Porta de Produção
// app.listen(process.env.PORT ||3000, async function () {
//   console.log("teste ok")
//   return "servidor rodando"
// })


app.listen(3000, async function () {
  console.log("teste ok")
  return "servidor rodando"
})



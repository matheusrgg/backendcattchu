
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


app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))



app.post('/auth', function(req, res){
  console.log("object", req.body.nome);
  res.send({ status: 'SUCCESS' });
  res.send(req.body.json)

})


app.post('/createUser', async function(req, res){
  const novaAgenda = await Users.create(req.body)
  res.send(novaAgenda)

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



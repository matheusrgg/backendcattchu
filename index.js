
var express = require('express');
var app = express();
var bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
var jsonParser = bodyParser.json()
require('dotenv').config()
var bp = require('body-parser')
var cors = require('cors')

const database = require("./db") 
const Users = require("./model/users")
const Agendas = require("./model/agendas")
const Salas = require("./model/salas")
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

// app.use(cors({
//   origin: 'https://localhost:3000',
//   methods: ['GET','POST'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
//   maxAge: 600
// }));



app.post('/login', async function(req, res){

 

  // res.set(      
  //   { key: 'Access-Control-Allow-Credentials', value: 'true' },
  //   { key: 'Access-Control-Allow-Origin', value: '*' },
  //   { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
  //   { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version,  Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization' },)
  const { nome, senha } = req.body;
      console.log("estou pegando a senha", senha)
     const userName = await Users.findOne({
      where: {
      senha: JSON.stringify(senha) 
    } 
  });

   if (userName) {
    const isSame = await bcrypt.compare(JSON.stringify(senha) , userName.senha);
    return res.status(201).send(userName);
  
  
  } else {
    return res.status(401).send("Authentication failed");
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
  res.set(      
  { key: 'Access-Control-Allow-Credentials', value: 'true' },
  { key: 'Access-Control-Allow-Origin', value: '*' },
  { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
  { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization' },)
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



var express = require('express');
var app = express();

require('dotenv').config()
var bp = require('body-parser')



const database = require("./db") 


database.sync()



const  EmpresaController = require('./controller/empresa.controller');
const InfluenciadorController = require('./controller/influenciador.controller');
const PropostaController = require('./controller/proposta.controller');

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
app.post('/createProposta', PropostaController.createProposta)
app.post('/createInfluenciador',InfluenciadorController.createInfluenciador)
app.post('/createEmpresa', EmpresaController.createEmpresa)
app.get('/welcome', function(req, res){res.status(200).send("teste");})


app.listen(4000, async function () {
  console.log("teste ok")
  return "servidor rodando"
  })





  //--------------------> Porta de Produção
  // app.listen(process.env.PORT ||3000, async function () {
  //   console.log("teste ok")
  //   return "servidor rodando"
  // })

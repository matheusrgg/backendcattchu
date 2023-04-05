var express = require('express');
var app = express();
require('dotenv').config()
var bp = require('body-parser')
const database = require("./db") 
database.sync()

const empresaRoutes = require ("./routes/empresa.routes")
const influenciadorRoutes = require("./routes/influenciador.routes")
const propostaRoutes = require("./routes/proposta.routes")

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.use("/empresa", empresaRoutes)
app.use("/influenciador", influenciadorRoutes)
app.use("/proposta", propostaRoutes)

// app.post('/login', async function(req, res){
//       console.log("estou pegando a senha", senha)
//      const userName = await Users.findOne({
//       where: {
//       senha: senha 
//     } 
//   });
//    if (userName) {
//     const isSame = await bcrypt.compare(senha , userName.senha);
//     return res.status(201).send(userName);
//   } else {
//     return res.status(401).send("Authentication failed");
//   }
// })


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

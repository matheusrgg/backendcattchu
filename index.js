var express = require('express');
var app = express();
require('dotenv').config()
var bp = require('body-parser')
const database = require("./db") 
// database.sync({ alter: true })
const Influenciador = require('./model/Influenciador');
const Proposta = require("./model/Proposta")

Influenciador.hasMany(Proposta, { foreignKey: 'id_influenciador' })
Proposta.belongsTo(Influenciador, { foreignKey: 'id_influenciador' })
database.sync()
const empresaRoutes = require ("./routes/empresa.routes")
const influenciadorRoutes = require("./routes/influenciador.routes")
const propostaRoutes = require("./routes/proposta.routes");

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
app.get('/welcome', function(req, res){res.status(200).send("teste");})






//--------------------> Porta de Desenvolvimento
app.listen(4030, async function () {
  console.log("teste ok")
  return "servidor rodando"
  })





  //--------------------> Porta de Produção
  // app.listen(process.env.PORT ||3000, async function () {
  //   console.log("teste ok")
  //   return "servidor rodando"
  // })

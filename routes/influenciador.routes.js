const express = require("express")

const router = express.Router()

const InfluenciadorController = require('../controller/influenciador.controller')
var app = express();
app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
router.get("/list", InfluenciadorController.listInfluenciador)
router.get("/list/:id", InfluenciadorController.idInfluenciador)
router.post("/create", InfluenciadorController.createInfluenciador)
router.post("/login", InfluenciadorController.loginInfluenciador)
router.put("/update/:id", InfluenciadorController.updateInfluenciador)
module.exports = router
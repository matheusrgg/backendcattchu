const express = require("express")

const router = express.Router()

const InfluenciadorController = require('../controller/influenciador.controller')


router.get("/list", InfluenciadorController.listInfluenciador)
router.get("/list/:id", InfluenciadorController.idInfluenciador)
router.post("/create", InfluenciadorController.createInfluenciador)
router.post("/login", InfluenciadorController.loginInfluenciador)
module.exports = router
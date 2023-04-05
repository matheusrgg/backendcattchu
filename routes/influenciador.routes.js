const express = require("express")

const router = express.Router()

const InfluenciadorController = require('../controller/influenciador.controller')


router.post("/create", InfluenciadorController.createInfluenciador)

module.exports = router
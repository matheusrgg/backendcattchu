const express = require("express")

const router = express.Router()

const PropostaController = require("../controller/proposta.controller")


router.post("/create", PropostaController.createProposta)

module.exports = router
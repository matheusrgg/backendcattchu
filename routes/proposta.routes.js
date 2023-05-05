const express = require("express")

const router = express.Router()

const PropostaController = require("../controller/proposta.controller")


router.post("/create", PropostaController.createProposta)
router.get("/list", PropostaController.listAllProposta)
router.get("/list/:id", PropostaController.listPropostaFromUser)
router.delete("/delete/:id", PropostaController.deleteProposal)
module.exports = router
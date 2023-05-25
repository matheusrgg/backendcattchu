const express = require("express")

const router = express.Router()

const PropostaController = require("../controller/proposta.controller")


router.post("/create", PropostaController.createProposta)
router.get("/list", PropostaController.listAllProposta)
router.get("/listPropostaFromInfluencerEnviadas/:id", PropostaController.listPropostaFromInfluencerEnviadas)
router.get("/listPropostaFromInfluencerRecebidas/:id", PropostaController.listPropostaFromInfluencerRecebidas)
router.get("/listEmpresa/:id", PropostaController.listPropostaFromEmpresa)
router.get("/listOne/:id", PropostaController.listIdProposta)
router.put("/update/:id", PropostaController.updateProposal)
router.get("/listOneName/:name", PropostaController.listProposalByName)


module.exports = router
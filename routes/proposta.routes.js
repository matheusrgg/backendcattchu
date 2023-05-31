const express = require("express")

const router = express.Router()

const PropostaController = require("../controller/proposta.controller")


router.post("/create", PropostaController.createProposta)
router.get("/list", PropostaController.listAllProposta)
router.get("/listOne/:id", PropostaController.listIdProposta)
router.put("/update/:id", PropostaController.updateProposal)
router.delete("/delete/:id", PropostaController.deleteProposal)

//---->Influenciador Envio e Recebimento

router.get("/listPropostaFromInfluencerEnviadas/:id", PropostaController.listPropostaFromInfluencerEnviadas)
router.get("/listPropostaFromInfluencerRecebidas/:id", PropostaController.listPropostaFromInfluencerRecebidas)


//---->Empresa Envio e Recebimento

router.get("/listPropostaFromEmpresaEnviadas/:id", PropostaController.listPropostaFromEmpresaEnviadas)
router.get("/listPropostaFromEmpresaRecebidas/:id", PropostaController.listPropostaFromEmpresaRecebidas)


module.exports = router
const express = require("express")

const router = express.Router()

const PropostaController = require("../controller/proposta.controller")
const PropostaComunicacaoController = require("../controller/propostaComunicacao.controller")


router.post("/create", PropostaController.createProposta)
router.get("/list", PropostaController.listAllProposta)
router.get("/listOne/:id", PropostaController.listIdProposta)
router.put("/update/:id", PropostaController.updateProposal)
router.delete("/delete/:id", PropostaController.deleteProposal)

//---->Influenciador Envio e Recebimento

router.get("/listPropostaFromInfluencerEnviadas/:id", PropostaComunicacaoController.listPropostaFromInfluencerEnviadas)
router.get("/listPropostaFromInfluencerRecebidas/:id", PropostaComunicacaoController.listPropostaFromInfluencerRecebidas)


//---->Empresa Envio e Recebimento

router.get("/listPropostaFromEmpresaEnviadas/:id", PropostaComunicacaoController.listPropostaFromEmpresaEnviadas)
router.get("/listPropostaFromEmpresaRecebidas/:id", PropostaComunicacaoController.listPropostaFromEmpresaRecebidas)


//---->InnerJoinTEste

// router.get("/innerJoinPropostaEmpresa", PropostaController.innerJoinPropostaEmpresa)

module.exports = router
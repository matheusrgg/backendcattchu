const express = require("express")

const router = express.Router()

const EmpresaController = require('../controller/empresa.controller')


router.post("/create", EmpresaController.createEmpresa)

module.exports = router
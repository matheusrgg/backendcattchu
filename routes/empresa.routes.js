const express = require("express")

const router = express.Router()

const EmpresaController = require('../controller/empresa.controller')


router.post("/create", EmpresaController.createEmpresa)
router.get("/list", EmpresaController.listEmpresa)
router.get("/list/:id", EmpresaController.idEmpresa)
router.post("/login", EmpresaController.loginEmpresa)

module.exports = router
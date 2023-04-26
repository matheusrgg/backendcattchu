const express = require("express")

const router = express.Router()

const EmpresaController = require('../controller/empresa.controller')
var app = express();
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

router.post("/create", EmpresaController.createEmpresa)
router.get("/list", EmpresaController.listEmpresa)
router.get("/list/:id", EmpresaController.idEmpresa)
router.post("/login", EmpresaController.loginEmpresa)
router.put("/update/:id", EmpresaController.updateEmpresa)

module.exports = router
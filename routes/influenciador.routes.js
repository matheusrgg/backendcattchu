const express = require("express")

const Influenciador = require('../model/Influenciador')
const router = express.Router()
const path = require('path')
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'images')
  },
  filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname))
  }
})
const upload = multer({ storage: storage });

const InfluenciadorController = require('../controller/influenciador.controller')
var app = express();
app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
router.get("/list", InfluenciadorController.listInfluenciador)
router.get("/list/:id", InfluenciadorController.idInfluenciador)
router.post("/create", InfluenciadorController.createInfluenciador)
router.post("/login", InfluenciadorController.loginInfluenciador)
router.put("/update/:id", InfluenciadorController.updateInfluenciador)
router.put("/uploadImage/:id", upload.single("image"), InfluenciadorController.uploadFiles);


module.exports = router
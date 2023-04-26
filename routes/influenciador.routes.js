const express = require("express")

const router = express.Router()

const multer = require("multer");
const upload = multer({ dest: "images/" });

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
router.post("/create", InfluenciadorController.UploadImageController, InfluenciadorController.createInfluenciador)
router.post("/login", InfluenciadorController.loginInfluenciador)
//router.post("/uploadImage", InfluenciadorController.UploadImageController, InfluenciadorController.createInfluenciador)

 router.post("/uploadImage", upload.single("image"), uploadFiles);

 function uploadFiles(req, res) {
     console.log(req.body);
     console.log(req.file);
     res.json({ message: "Successfully uploaded files" });
 }

router.put("/update/:id", InfluenciadorController.updateInfluenciador)
module.exports = router
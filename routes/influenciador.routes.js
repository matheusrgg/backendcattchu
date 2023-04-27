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
//router.post("/uploadImage", InfluenciadorController.UploadImageController, InfluenciadorController.createInfluenciador)

  router.put("/uploadImage/:id", upload.single("image"), uploadFiles);

  function uploadFiles(req, res) {
    try {
      console.log(req.body);
      console.log(req.file);

      var influenciador = Influenciador.findByPk(req.params.id)
      const image = req.file.filename;
      const data = {
        image: image
      }
      const where = {
        where: {
          id: req.params.id
        }
      }
      influenciador = Influenciador.update(data, where);
      return res.status(201).send(data)
    } catch (error) {
      console.log(error);
    }
      
  }

router.put("/update/:id", InfluenciadorController.UploadImageController, InfluenciadorController.updateInfluenciador)
module.exports = router
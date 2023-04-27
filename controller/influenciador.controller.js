
const bcrypt = require('bcryptjs');
const Influenciador = require('../model/Influenciador')
const jwt = require('jsonwebtoken');

const multer = require('multer')
const path = require('path')

class InfluenciadorController {
  constructor() { }


  static async listInfluenciador(req, res) {
    const influenciadores = await Influenciador.findAll()
    return res.status(201).send(influenciadores);
  }

  static async idInfluenciador(req, res) {
    const influenciador = await Influenciador.findByPk(req.params.id)
    return res.status(201).send(influenciador);
  }

  static async createInfluenciador(req, res) {
    try {
      const { nome, email, senha, descricao, cpf, tags, data_nascimento } = req.body;
      const image = req.file;
      const data = {
        nome,
        email,
        descricao,
        senha: await bcrypt.hash(senha, 10),
        cpf,
        tags,
        data_nascimento,
        image
      };
      //saving the user
      const userName = await Influenciador.create(data);
      return res.status(201).send(userName);
    } catch (error) {
      console.log(error);
    }
  }

  static async updateInfluenciador(req, res) {
    try {
      var influenciador = await Influenciador.findByPk(req.params.id)
      const { nome, email, cpf, descricao, tags, data_nascimento } = req.body;
      const image = req.file;
      const data = {
        nome: nome,
        email: email,
        cpf: cpf,
        descricao: descricao,
        tags: tags,
        data_nascimento: data_nascimento,
        image: image,
      };
      const where = {
        where: {
          id: req.params.id
        }
      }
      influenciador = await Influenciador.update(data, where);
      return res.status(201).send(data);
    }
    catch (error) {
      console.log(error);
    }
  }

  static async loginInfluenciador(req, res) {
    const { email, senha } = req.body
    console.log("senhaaaaaaaaa", senha);
    const influenciadorLogin = await Influenciador.findOne({
      where: {
        email: email
        // email: email
      }
    });

    if (influenciadorLogin) {
      console.log("estou entrando")
      if (await bcrypt.compare(senha, influenciadorLogin.senha)) {

        const token = jwt.sign({
          email: influenciadorLogin.email,
          nome: influenciadorLogin.nome,
          descricao: influenciadorLogin.descricao,
          cpf: influenciadorLogin.cpf,
          id: influenciadorLogin.id,
          perfil: 'influenciador'
        }, 'mysecretkey');
        return res.status(201).json(token)
      } else {
        res.status(401).send("Senhaa errada")
      }
    } else {
      return res.status(401).send("Authentication Failed")
    }
  }

  static async uploadFiles(req, res) {
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

}


module.exports = InfluenciadorController
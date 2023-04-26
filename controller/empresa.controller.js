const Empresa = require('../model/Empresa')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class EmpresaController {
  constructor() { }

  static async listEmpresa(req, res) {
    const empresa = await Empresa.findAll()
    console.log('query lis empresassss -------------------', empresa)
    return res.status(201).send(empresa);

  }

  static async idEmpresa(req, res) {
    const empresa = await Empresa.findByPk(req.params.id)
    return res.status(201).send(empresa);
  }

  static async createEmpresa(req, res) {
    try {
      const { nome, email, descricao, senha, cnpj, tags } = req.body;
      const data = {
        nome,
        email,
        descricao,
        senha: await bcrypt.hash(senha, 10),
        cnpj,
        tags,
      };
      //saving the user
      const userName = await Empresa.create(data);
      return res.status(201).send(userName);
    } catch (error) {
      console.log(error);
    }
  }

  static async updateEmpresa(req, res) {
    try {
      var empresa = await Empresa.findByPk(req.params.id)
      const { nome, email, cnpj, descricao, tags } = req.body;

      const data = {
        nome: nome,
        email: email,
        cnpj: cnpj,
        descricao: descricao,
        tags: tags,
      };
      const where = {
        where: {
          id: req.params.id
        }
      }
      empresa = await Empresa.update(data, where);
      return res.status(201).send(data);
    }
    catch (error) {
      console.log(error);
    }
  }

  static async loginEmpresa(req, res) {
    const { email, senha } = req.body
    console.log("senhaaaaaaaaa", senha);
    const empresaLogin = await Empresa.findOne({
      where: {
        email: email
        // email: email
      }
    });
    if (empresaLogin) {
      console.log("estou entrando")

      if (await bcrypt.compare(senha, empresaLogin.senha)) {
        const token = jwt.sign({
          email: empresaLogin.email,
          nome: empresaLogin.nome,
          descricao: empresaLogin.descricao,
          cnpj: empresaLogin.cnpj,
          id: empresaLogin.id,
          perfil: 'empreendedor'
        }, 'mysecretkey');

        return res.status(201).json(token)
      } else {
        res.status(401).send("Senhaa errada")
      }
    } else {
      return res.status(401).send("Authentication Failed")
    }
  }
}

module.exports = EmpresaController
const Empresa = require('../model/Empresa')
const bcrypt = require('bcrypt');

class EmpresaController {
  constructor() { }
  static async createEmpresa(req, res) {
    try {
      const { nome, email, senha, cnpj, tags } = req.body;
      const data = {
        nome,
        email,
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
}

module.exports = EmpresaController
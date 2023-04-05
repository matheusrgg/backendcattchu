
const bcrypt = require('bcrypt');
const Influenciador = require('../model/Influenciador')

class InfluenciadorController {
    constructor() { }
    static async createInfluenciador(req, res) {
     try {
    const { nome, email, senha, cpf, tags, data_nascimento } = req.body;
    const data = {
      nome,
      email,
      senha: await bcrypt.hash(senha, 10),
      cpf, 
      tags,
      data_nascimento,
    };
    //saving the user
    const userName = await Influenciador.create(data);
    return res.status(201).send(userName);
  }catch (error) {
    console.log(error);
  }
}
  }
  
  module.exports = InfluenciadorController
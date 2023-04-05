
const bcrypt = require('bcrypt');
const Influenciador = require('../model/Influenciador')

class InfluenciadorController {
  constructor() { }


  static async listInfluenciador(req, res){
    const influenciadores =await Influenciador.findAll()
    return res.status(201).send(influenciadores);
  }
  
  static async idInfluenciador(req, res){
    const influenciador  = await Influenciador.findByPk(req.params.id)
    return res.status(201).send(influenciador);
  }

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
    } catch (error) {
      console.log(error);
    }
  }

  static async loginInfluenciador(req, res){
    const {email, senha} = req.body
    console.log("senhaaaaaaaaa", senha);
    const influenciadorLogin = await Influenciador.findOne({
      where:{
        email: email
      }
    });
    if(influenciadorLogin){
      console.log("estou entrando")
      if(await bcrypt.compare(senha, influenciadorLogin.senha)){
        return res.status(201).send(influenciadorLogin)
      }else{
        res.status(401).send("Senhaa errada")
      }
    }else{
      return res.status(401).send("Authentication Failed")
    }
  }
}

module.exports = InfluenciadorController
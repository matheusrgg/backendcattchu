
const bcrypt = require('bcryptjs');
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

  static async updateInfluenciador(req, res){
    try{
      var influenciador  = await Influenciador.findByPk(req.params.id)
      const { nome, email, cpf, tags, data_nascimento } = req.body;
      
      const data = {
        nome: nome,
        email: email,
        cpf: cpf,
        tags: tags,
        data_nascimento: data_nascimento,
      };
      const where = {
        where: {
          id : req.params.id
        }
      }
      influenciador  = await Influenciador.update(data, where);
      return res.status(201).send(data);
    }
    catch(error){
      console.log(error);
    }
  }

  static async loginInfluenciador(req, res){
    const {email, senha} = req.body
    console.log("senhaaaaaaaaa", senha);
    const influenciadorLogin = await Influenciador.findOne({
      where:{
        email: email
        // email: email
      }
    });
    if(influenciadorLogin){
      console.log("estou entrando")
      // if(await bcrypt.compare(JSON.stringify(senha), influenciadorLogin.senha)){
      // if(await bcrypt.compare(senha, JSON.stringify(influenciadorLogin.senha))){
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
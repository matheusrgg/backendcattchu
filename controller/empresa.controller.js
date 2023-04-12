const Empresa = require('../model/Empresa')
const bcrypt = require('bcryptjs');

class EmpresaController {
  constructor() { }

  static async listEmpresa(req, res){
      const empresa =await Empresa.findAll()
      console.log('query lis empresassss -------------------', empresa)
      return res.status(201).send(empresa);
      
    }

  static async idEmpresa(req, res){
    const empresa  = await Empresa.findByPk(req.params.id)
    return res.status(201).send(empresa);
    }

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

  static async loginEmpresa(req, res){
    const {email, senha} = req.body
    console.log("senhaaaaaaaaa", senha);
    const empresaLogin = await Empresa.findOne({
      where:{
        email: email
        // email: email
      }
    });
    if(empresaLogin){
      console.log("estou entrando")
      // if(await bcrypt.compare(JSON.stringify(senha), empresaLogin.senha)){
      // if(await bcrypt.compare(senha, JSON.stringify(empresaLogin.senha))){
      if(await bcrypt.compare(senha, empresaLogin.senha)){
        return res.status(201).send(empresaLogin)
      }else{
        res.status(401).send("Senhaa errada")
      }
    }else{
      return res.status(401).send("Authentication Failed")
    }
  }
}

module.exports = EmpresaController
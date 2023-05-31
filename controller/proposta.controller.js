const Proposta = require('../model/Proposta')


class PropostaController {
  constructor() { }
  static async createProposta(req, res) {
    try {
      const {
        mensagem_proposta,
        veiculo_midiatico,
        valor_divulgacao,
        status_proposta,
        tipo_remetente,
        id_remetente,
        id_destinatario,
        influenciadorId,
        empresaId,
        data_envio
      } = req.body;
  //pegar o nome dessa marca
  //procurar o id dessa marca
  //se ela existir cria e senão abraço
      // const empresaExistsId = await Empresa.findOne({where:{email:email}})
      const data = {
        mensagem_proposta,
        veiculo_midiatico,
        valor_divulgacao,
        status_proposta,
        tipo_remetente,
        id_remetente,
        id_destinatario,
        influenciadorId,
        empresaId,
        data_envio
      };
      console.log("o que tem nesse bobdy", data);
      const propostaEnvio = await Proposta.create(data);
      return res.status(201).send(propostaEnvio);
    } catch (error) {
      console.log(error);
    }
  }

  static async listAllProposta(req, res) {
    const propostas = await Proposta.findAll()
    return res.status(201).send(propostas)
  }

 static async listIdProposta(req, res){
    const proposta = await Proposta.findByPk(req.params.id)
    return res.status(201).send(proposta);
  }

  static async updateProposal(req, res){
    try {
    var proposta = await Proposta.findByPk(req.params.id);
    const{
      mensagem_proposta,
      veiculo_midiatico,
      valor_divulgacao,
      status_proposta,
      tipo_remetente,
      id_remetente,
      id_destinatario,
      influenciadorId,
      empresaId,
      data_envio
    } = req.body;

    const data = {
      mensagem_proposta: mensagem_proposta,
      veiculo_midiatico :veiculo_midiatico,
      valor_divulgacao :valor_divulgacao,
      status_proposta:status_proposta,
      tipo_remetente :tipo_remetente,
      id_remetente:id_remetente,
      id_destinatario:id_destinatario,
      influenciadorId:influenciadorId,
      empresaId:empresaId,
      data_envio :data_envio
    }

    const where = {
      where: {
        id: req.params.id
      }
    }
    proposta = await Proposta.update(data, where);
    return res.status(201).send(data);
  }
   catch (error) {
      console.log(error);
    }
}

static async deleteProposal(req, res) {
  try {
    const id = req.params.id;
    var proposal = await Proposta.destroy({ where: {id} })
    var retornoDelete

    if (proposal === 1) {
      retornoDelete = { success: true, message: `A proposta com id: ${id} foi deletada.`};
      return res.status(200).send(retornoDelete);
    }
  } catch (error) {
    console.log(error);
  }
}

//---->Influenciador Envio e Recebimento

static async listPropostaFromInfluencerEnviadas(req, res){
  const idUser = req.params.id
  const propostas = await Proposta.findAll({
  where:{
    id_remetente: idUser,
    tipo_remetente:'influenciador'
  }})
  return res.status(201).send(propostas);
}


static async listPropostaFromInfluencerRecebidas(req, res){
  const idUser = req.params.id
  const propostas = await Proposta.findAll({
  where:{
    tipo_remetente:'marca',
    influenciadorId :idUser
  }})
  return res.status(201).send(propostas);
}

//---->Empresa Envio e Recebimento


static async listPropostaFromEmpresaEnviadas(req, res){
  const idUser = req.params.id
  const propostas = await Proposta.findAll({
  where:{
    id_remetente: idUser,
    tipo_remetente:'marca'
  }})
  return res.status(201).send(propostas);
}


static async listPropostaFromEmpresaRecebidas(req, res){
  const idUser = req.params.id
  const propostas = await Proposta.findAll({
  where:{
    tipo_remetente:'influenciador',
    empresaId :idUser
  }})
  return res.status(201).send(propostas);
}



}
module.exports = PropostaController
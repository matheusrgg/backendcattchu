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

  static async listPropostaFromUser(req, res){
    const idUser = req.params.id
    console.log("info do usurairoorirori", idUser)
    const propostas = await Proposta.findAll({
    where:{id_remetente: idUser}})
    return res.status(201).send(propostas);


    // const influenciador = await Proposta.findByPk(req.params.id)
    // return res.status(201).send(influenciador);
  }

  
}

module.exports = PropostaController
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
            empresaId
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
        };
        console.log("o que tem nesse bobdy", data);
        debugger
        const propostaEnvio = await Proposta.create(data);
        return res.status(201).send(propostaEnvio);
      }catch (error) {
        console.log(error);
      }
  }
}

module.exports = PropostaController
const Proposta = require('../model/Proposta')
const Empresa = require('../model/Empresa')
const { sequelize } = require('sequelize');
const Influenciador = require('../model/Influenciador')

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
        id_influenciador,
        id_empresa,
        data_envio,
        updated
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
        id_influenciador,
        id_empresa,
        data_envio,
        updated
      };
      console.log("o que tem nesse bobdy", data);
      const propostaEnvio = await Proposta.create(data);
      return res.status(201).send(propostaEnvio);
    } catch (error) {
      console.log(error);
    }
  }

  static async listAllProposta(req, res) {
    const propostas = await Proposta.findAll({

    })
    return res.status(201).send(propostas)

  }

  static async listIdProposta(req, res) {
    const proposta = await Proposta.findByPk(req.params.id)
    return res.status(201).send(proposta);
  }

  static async updateProposal(req, res) {
    try {
      var proposta = await Proposta.findByPk(req.params.id);
      const {
        status_proposta,
        updated
      } = req.body;

      const data = {
        status_proposta: status_proposta,
        updated: updated
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
      var proposal = await Proposta.destroy({ where: { id } })
      var retornoDelete

      if (proposal === 1) {
        retornoDelete = { success: true, message: `A proposta com id: ${id} foi deletada.` };
        return res.status(200).send(retornoDelete);
      }
    } catch (error) {
      console.log(error);
    }
  }

}
module.exports = PropostaController
const Proposta = require('../model/Proposta')
const Empresa = require('../model/Empresa')
const { sequelize } = require('sequelize');
const Influenciador = require('../model/Influenciador')

class PropostaComunicacaoController {
  constructor() { }


  //---->Influenciador Envio e Recebimento

  static async listPropostaFromInfluencerEnviadas(req, res) {
    const idUser = req.params.id
    const propostas = await Proposta.findAll({
      where: {
        id_remetente: idUser,
        tipo_remetente: 'influenciador'
      },

      include: {
        model: Empresa,
        required: true
      }


    })
    const propstaComNome = propostas.map(data => {
      return {
        id: data.id,
        status_proposta: data.status_proposta,
        mensagem_proposta: data.mensagem_proposta,
        tipo_remetente: data.tipo_remetente,
        updated: data.updated,
        id_remetente: data.id_remetente,
        id_destinatario: data.id_destinatario,
        id_empresa: data.id_empresa,
        data_envio: data.createdAt,
        nome: data.Empresa.nome
      }
    })
    return res.status(201).send(propstaComNome);
  }


  static async listPropostaFromInfluencerRecebidas(req, res) {
    const idUser = req.params.id
    const propostas = await Proposta.findAll({
      where: {
        id_influenciador: idUser,
        tipo_remetente: 'marca',
      },
      include: {
        model: Empresa,
        required: true
      }


    })
    const propstaComNome = propostas.map(data => {
      return {
        id: data.id,
        status_proposta: data.status_proposta,
        mensagem_proposta: data.mensagem_proposta,
        tipo_remetente: data.tipo_remetente,
        updated: data.updated,
        id_remetente: data.id_remetente,
        id_destinatario: data.id_destinatario,
        id_empresa: data.id_empresa,
        data_envio: data.createdAt,
        nome: data.Empresa.nome
      }
    })
    return res.status(201).send(propstaComNome);
  }


  //---->Empresa Envio e Recebimento


  static async listPropostaFromEmpresaEnviadas(req, res) {
    const idUser = req.params.id
    const propostas = await Proposta.findAll({
      where: {
        id_remetente: idUser,
        tipo_remetente: 'marca'
      },
      include: {
        model: Influenciador,
        required: true
      },



    })
    const propstaComNome = propostas.map(data => {
      return {
        id: data.id,
        status_proposta: data.status_proposta,
        mensagem_proposta: data.mensagem_proposta,
        tipo_remetente: data.tipo_remetente,
        updated: data.updated,
        id_remetente: data.id_remetente,
        id_destinatario: data.id_destinatario,
        id_influenciador: data.id_influenciador,
        data_envio: data.createdAt,
        nome: data.Influenciador.nome,

      }
    })
    return res.status(201).send(propstaComNome);
  }

  static async listPropostaFromEmpresaRecebidas(req, res) {
    const idUser = req.params.id
    const propostas = await Proposta.findAll({
      where: {
        id_empresa: idUser,
        tipo_remetente: 'influenciador',
      },
      include: {
        model: Influenciador,
        required: true
      },


    })
    const propstaComNome = propostas.map(data => {
      return {
        id: data.id,
        status_proposta: data.status_proposta,
        mensagem_proposta: data.mensagem_proposta,
        tipo_remetente: data.tipo_remetente,
        updated: data.updated,
        id_remetente: data.id_remetente,
        id_destinatario: data.id_destinatario,
        id_influenciador: data.id_influenciador,
        data_envio: data.createdAt,
        nome: data.Influenciador.nome,

      }
    })
    return res.status(201).send(propstaComNome);
  }




}
module.exports = PropostaComunicacaoController
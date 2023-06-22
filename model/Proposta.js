const { Sequelize  } = require('sequelize');

const database = require('../db');


const Proposta = database.define('Proposta', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    mensagem_proposta: {
        type: Sequelize.STRING,
        allowNull: false
    },
    veiculo_midiatico: {
        type: Sequelize.ENUM("instagram", "tiktok"),
        allowNull: false
    },
    valor_divulgacao: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    status_proposta: {
        type: Sequelize.ENUM("aceita", "pendente", "declinada"),
        defaultValue: "pendente",
        allowNull: false
    },
    tipo_remetente: {
        type: Sequelize.ENUM("marca", "influenciador"),
        allowNull: false
    },
    updated: {
        type: Sequelize.ENUM("true", "false"),
        allowNull: false
    },
    id_remetente: {
        type: Sequelize.STRING,
        allowNull: false
    },
    id_destinatario: {
        type: Sequelize.STRING,
        allowNull: false
    },
    data_envio:{
        type: Sequelize.DATE,
        allowNull: false
    },
}, { freezeTableName: true });
module.exports = Proposta;
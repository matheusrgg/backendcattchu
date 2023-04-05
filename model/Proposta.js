const { Sequelize, hasMany, belongsTo } = require('sequelize');

const database = require('../db');
const Influenciador = require('./influenciador');
const sequelize = require('../db');

const Proposta = database.define('proposta', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    mensagem_proposta:{
        type:Sequelize.STRING,
        allowNull: false
    },
    veiculo_midiatico:{
        type:Sequelize.ENUM("instagram", "tiktok"),
        allowNull: false
    },
    valor_divulgacao:{
        type:Sequelize.STRING,
        allowNull: false
    }, 
    status_proposta:{
        type:Sequelize.ENUM("aceita", "pendente", "declinada"),
        defaultValue: "pendente", 
        allowNull: false
    },   
    tipo_remetente:{
        type:Sequelize.ENUM("marca", "influenciador"),
        allowNull: false
    }, 
    id_remetente:{
        type:Sequelize.STRING,
        allowNull: false
    }, 
    id_destinatario:{
        type:Sequelize.STRING,
        allowNull: false
    }, 
}) 

module.exports = Proposta;
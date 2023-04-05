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
}) 

module.exports = Proposta;
const { Sequelize } = require('sequelize');

const database = require('../db')

const Proposta = database.define('proposta', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    mensagem:{
        type:Sequelize.STRING,
        allowNull: false
    },
    veiculo_midiatico:{
        type:Sequelize.STRING,
        allowNull: false
    },
    setor_atuação:{
        type:Sequelize.STRING,
        allowNull: false
    },
    valor_divulgação:{
        type: Sequelize.NUMBER,
        allowNull: false
    },

    
}) 

module.exports = Proposta;
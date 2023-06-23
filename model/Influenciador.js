const { Sequelize } = require('sequelize');

const database = require('../db')
const Proposta = require('../model/Proposta')

const Influenciador = database.define('Influenciador', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },

    senha: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false
    },


    tags: {
        type: Sequelize.ENUM("esporte", "moda", "carro"),
        allowNull: false
    },
    data_nascimento: {
        type: Sequelize.DATE,
        allowNull: false,

    },
    
    instagram: {
        type: Sequelize.STRING,
        allowNull: false
    },

    descricao: {
        type: Sequelize.STRING,
        allowNull: true
    },

} ,{ freezeTableName: true })


module.exports = Influenciador;
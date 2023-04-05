const { Sequelize } = require('sequelize');

const database = require('../db')
const Proposta = require('../model/proposta')

const Influenciador = database.define('influenciador', {
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

    }
    
})


Influenciador.hasMany(Proposta, {
    foreignKey: {
        allowNull: false
    },

})
Proposta.belongsTo(Influenciador);
module.exports = Influenciador;
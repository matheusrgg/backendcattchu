const { Sequelize } = require('sequelize');

const database = require('../db')
const Proposta = require('../model/proposta')
const Empresa = database.define('empresa', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    nome:{
        type:Sequelize.STRING,
        allowNull: false
    },
    email:{
        type:Sequelize.STRING,
        allowNull: false
    },
    cnpj:{
        type:Sequelize.STRING,
        allowNull: false
    },
    senha:{
        type:Sequelize.STRING,
        allowNull: false
    },
    tags:{
        type:Sequelize.ENUM("esporte", "moda", "carro"),
        allowNull: false
    }    
}) 


Empresa.hasMany(Proposta, {
    foreignKey: {
        allowNull: false
    },

})
Proposta.belongsTo(Empresa);

module.exports = Empresa;
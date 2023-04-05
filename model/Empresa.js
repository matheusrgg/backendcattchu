const { Sequelize } = require('sequelize');

const database = require('../db')

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
    senha:{
        type:Sequelize.STRING,
        allowNull: false
    },
    cnpj:{
        type: Sequelize.NUMBER,
        allowNull: false
    },
    tags:{
        type: Sequelize.ENUM,
        values: ['esporte', 'moda', 'carro','restaurante'],
        allowNull: false
    },
    instagram:{
        type:Sequelize.STRING,
        allowNull: false
    },
    
}) 

module.exports = Empresa;
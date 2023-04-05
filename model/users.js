const { Sequelize } = require('sequelize');

const database = require('../db')

const Users = database.define('users', {
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
    perfil:{
        type:Sequelize.ENUM('influenciador', 'empresa'),
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
    data_de_nascimento:{
        type:Sequelize.DATE,
        allowNull: false
    },
    
}) 

module.exports = Users;
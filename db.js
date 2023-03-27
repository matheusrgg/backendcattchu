const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bancoclina','postgres','123',{
    dialect:'postgres',
    host:'localhost',
    port:5432
    ,
    ssl: true
})

module.exports = sequelize
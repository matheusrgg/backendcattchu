const { Sequelize } = require('sequelize');
require('dotenv').config()
// const sequelize = new Sequelize('bancoclina','postgres','123',{
//     dialect:'postgres',
//     host:'localhost',
//     port:5432
//     ,
//     ssl: true
// })

const sequelize = new Sequelize(process.env.DATABASE_NAME,process.env.DATABSE_USER, process.env.DATABASE_PASSWORD,{
    dialect:process.env.dialect,
    host:process.env.host,
    port:process.env.port,
    ssl: process.env.ssl
})

module.exports = sequelize
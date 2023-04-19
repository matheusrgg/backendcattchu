const { Sequelize } = require('sequelize');
require('dotenv').config()

// -------------->Development
// const sequelize = new Sequelize('bancoclina','postgres','123',{
//     dialect:'postgres',
//     host:'localhost',
//     port:5432    ,
//     ssl: true
// })


// -------------->Producao
const sequelize = new Sequelize(process.env.DATABASE_URL,{
    dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false // <<<<<<< YOU NEED THIS
        }
      },
})

module.exports = sequelize
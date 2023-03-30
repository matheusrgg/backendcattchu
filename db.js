const { Sequelize } = require('sequelize');
require('dotenv').config()
// const sequelize = new Sequelize('bancoclina','postgres','123',{
//     dialect:'postgres',
//     host:'localhost',
//     port:5432
//     ,
//     ssl: true
// })

// const sequelize = new Sequelize(process.env.DATABASE_NAME,process.env.DATABSE_USER, process.env.DATABASE_PASSWORD,{
//     host:process.env.host,
//     dialect:process.env.dialect,
//     port:process.env.port,
//     ssl: process.env.ssl
// })

// module.exports = sequelize

const sequelize = new Sequelize(process.env.DATABASE_URL,{
  dialectOptions:{
      ssl: {
        rejectUnauthorized:process.env.ssl
  }
}
})

module.exports = sequelize
require('./config')
const { Sequelize } = require('sequelize')

console.log(
  process.env.TYPEDB,
  process.env.DB,
  process.env.USERDB,
  process.env.PASSWORDDB,
  process.env.HOSTDB,
  process.env.PORT
)
const sequelize = new Sequelize(
  process.env.DB,
  process.env.USERDB,
  process.env.PASSWORDDB,
  {
    host: process.env.HOSTDB,
    dialect: process.env.TYPEDB,
    logging: false,
    // timezone: "-05:00"
  }
)

module.exports = sequelize

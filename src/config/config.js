const dotenv = require('dotenv')
const colors = require('colors')
var result = {}

try {
  result = dotenv.config()
  if (result.error) throw result.error
  console.log('El archivo .env cargado correctamente.'.green)
} catch (err) {
  console.log('El archivo .env no se a cargado.'.red)
}

process.env.TYPEDB = process.env.TYPEDB

process.env.DB = process.env.DB

process.env.USERDB = process.env.USERDB

process.env.PASSDB = process.env.PASSWORDDB

process.env.HOSTDB = process.env.HOSTDB

process.env.PORT = process.env.PORT

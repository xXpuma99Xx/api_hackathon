const colors = require('colors')

const Broker = require('./tables/Broker')
const BrokerTitulo = require('./tables/BrokerTitulo')
const Cuestionario = require('./tables/Cuestionario')
const Instrumento = require('./tables/Instrumento')
const Perfil = require('./tables/Perfil')
const PerfilInstrumento = require('./tables/PerfilInstrumento')
const Titulo = require('./tables/Titulo')

const drop = async () => {
  console.log('\nPaso 1) Desinstalando la db.'.bold.blue)

  await BrokerTitulo.drop()
  console.log('La tabla BrokerTitulo se desinstalo correctamente.'.magenta)

  await PerfilInstrumento.drop()
  console.log('La tabla PerfilInstrumento se desinstalo correctamente.'.magenta)

  await Titulo.drop()
  console.log('La tabla Titulo se desinstalo correctamente.'.magenta)

  await Broker.drop()
  console.log('La tabla Broker se desinstalo correctamente.'.magenta)

  await Cuestionario.drop()
  console.log('La tabla Cuestionario se desinstalo correctamente.'.magenta)

  await Instrumento.drop()
  console.log('La tabla Instrumento se desinstalo correctamente.'.magenta)

  await Perfil.drop()
  console.log('La tabla Perfil se desinstalo correctamente.'.magenta)
}

const sync = async () => {
  console.log('\nPaso 2) Instalando la db'.bold.blue)

  await Broker.sync()
  console.log('La tabla Broker se instalo correctamente.'.magenta)

  await Cuestionario.sync()
  console.log('La tabla Cuestionario se instalo correctamente.'.magenta)

  await Instrumento.sync()
  console.log('La tabla Instrumento se instalo correctamente.'.magenta)

  await Perfil.sync()
  console.log('La tabla Perfil se instalo correctamente.'.magenta)

  Instrumento.hasMany(Titulo, {
    foreignKey: 'idInstrumento',
  })

  await Titulo.sync()
  console.log('La tabla Titulo se instalo correctamente.'.magenta)

  Broker.hasMany(BrokerTitulo, {
    foreignKey: 'idBroker',
  })

  Titulo.hasMany(BrokerTitulo, {
    foreignKey: 'idTitulo',
  })

  await BrokerTitulo.sync()
  console.log('La tabla BrokerTitulo se instalo correctamente.'.magenta)

  Perfil.hasMany(PerfilInstrumento, {
    foreignKey: 'idPerfil',
  })

  Instrumento.hasMany(PerfilInstrumento, {
    foreignKey: 'idInstrumento',
  })

  await PerfilInstrumento.sync()
  console.log('La tabla PerfilInstrumento se instalo correctamente.'.magenta)
}

const install = async () => {
  await drop()
  await sync()

  console.log(
    '\nSe ha instalado exitosamente la base de datos.\n'.underline.bold.green
  )
  process.exit()
}

install()

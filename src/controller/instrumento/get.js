const Broker = require('../../models/tables/Broker')
const BrokerTitulo = require('../../models/tables/BrokerTitulo')
const Instrumento = require('../../models/tables/Instrumento')
const Titulo = require('../../models/tables/Titulo')

BrokerTitulo.belongsTo(Broker, {
  foreignKey: 'idBroker',
})

// BrokerTitulo.belongsTo(Titulo, {
//   foreignKey: 'idTitulo',
// })

Titulo.hasMany(BrokerTitulo, {
  foreignKey: 'idTitulo',
})

Instrumento.hasMany(Titulo, {
  foreignKey: 'idInstrumento',
})

const get = async (query) => {
  if (!query.idInstrumento)
    throw new Error('No hay idInstrumento en la consulta')
  if (typeof query.calificacion === 'string')
    query.calificacion = Number(query.calificacion)

  return Instrumento.findOne({
    include: [
      {
        model: Titulo,
        include: [{ model: BrokerTitulo, include: { model: Broker } }],
      },
    ],
    where: { idInstrumento: query.idInstrumento },
  })
    .then((res) => {
      return res
    })
    .catch((err) => {
      console.log(err)
    })
}

module.exports = get

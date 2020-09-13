const Instrumento = require('../../models/tables/Instrumento')
const Perfil = require('../../models/tables/Perfil')
const PerfilInstrumento = require('../../models/tables/PerfilInstrumento')

PerfilInstrumento.belongsTo(Instrumento, {
  foreignKey: 'idInstrumento',
})

Perfil.hasMany(PerfilInstrumento, {
  foreignKey: 'idPerfil',
})

const get = async (query) => {
  if (!query.calificacion) throw new Error('No hay calificacion en la consulta')
  if (typeof query.calificacion === 'string')
    query.calificacion = Number(query.calificacion)

  let perfiles = await Perfil.findAll()
    .then((res) => {
      return res
    })
    .catch((err) => {
      throw new Error('Salio algo mal')
    })
  let index = 0
  let calificacion = Math.abs(perfiles[index].calificacion - query.calificacion)

  for (let i = 1; i < perfiles.length; i++) {
    let evaluar = Math.abs(perfiles[i].calificacion - query.calificacion)

    if (evaluar < calificacion) {
      index = i
      calificacion = evaluar
    }
  }

  return Perfil.findOne({
    include: [
      {
        model: PerfilInstrumento,
        include: [
          {
            model: Instrumento,
          },
        ],
      },
    ],
    where: { idPerfil: perfiles[index].idPerfil },
  })
    .then((res) => {
      return res
    })
    .catch((err) => {
      console.log(err)
    })
}

module.exports = get

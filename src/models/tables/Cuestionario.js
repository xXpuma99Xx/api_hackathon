const { DataTypes, Model } = require('sequelize')
const sequelize = require('../../config/sequelize.conf')

class Cuestionario extends Model {}
Cuestionario.init(
  {
    idCuestionario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      unique: true,
    },
    preguntaUno: {
      type: DataTypes.STRING(1),
      allowNull: false,
    },
    preguntaDos: {
      type: DataTypes.STRING(1),
      allowNull: false,
    },
    preguntaTres: {
      type: DataTypes.STRING(1),
      allowNull: false,
    },
    preguntaCuatro: {
      type: DataTypes.STRING(1),
      allowNull: false,
    },
    preguntaCinco: {
      type: DataTypes.STRING(1),
      allowNull: false,
    },
    preguntaSeis: {
      type: DataTypes.STRING(1),
      allowNull: false,
    },
    preguntaSiete: {
      type: DataTypes.STRING(1),
      allowNull: false,
    },
    preguntaOcho: {
      type: DataTypes.STRING(1),
      allowNull: false,
    },
    preguntaNueve: {
      type: DataTypes.STRING(1),
      allowNull: false,
    },
    preguntaDiez: {
      type: DataTypes.STRING(1),
      allowNull: false,
    },
    preguntaOnce: {
      type: DataTypes.STRING(1),
      allowNull: false,
    },
    preguntaDoce: {
      type: DataTypes.STRING(1),
      allowNull: false,
    },
    preguntaTrece: {
      type: DataTypes.STRING(13),
      allowNull: false,
    },
    preguntaCatorce: {
      type: DataTypes.STRING(11),
      allowNull: false,
    },
    preguntaQuince: {
      type: DataTypes.STRING(1),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Cuestionario',
    tableName: 'cuestionario',
  }
)

module.exports = Cuestionario

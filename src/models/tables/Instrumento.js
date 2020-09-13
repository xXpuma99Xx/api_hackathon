const { DataTypes, Model } = require('sequelize')
const sequelize = require('../../config/sequelize.conf')

class Instrumento extends Model {}
Instrumento.init(
  {
    idInstrumento: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      unique: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Instrumento',
    tableName: 'instrumento',
  }
)

module.exports = Instrumento

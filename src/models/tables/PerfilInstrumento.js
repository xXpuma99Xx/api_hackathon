const { DataTypes, Model } = require('sequelize')
const sequelize = require('../../config/sequelize.conf')

class PerfilInstrumento extends Model {}
PerfilInstrumento.init(
  {
    idPerfilInstrumento: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      unique: true,
    },
    porcentajeConFondo: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    porcentajeSinFondo: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'PerfilInstrumento',
    tableName: 'perfilInstrumento',
  }
)

module.exports = PerfilInstrumento

const { DataTypes, Model } = require('sequelize')
const sequelize = require('../../config/sequelize.conf')

class Titulo extends Model {}
Titulo.init(
  {
    idTitulo: {
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
    nombreTicket: {
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
    modelName: 'Titulo',
    tableName: 'titulo',
  }
)

module.exports = Titulo

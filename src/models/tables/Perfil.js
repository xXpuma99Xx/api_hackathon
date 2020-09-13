const { DataTypes, Model } = require('sequelize')
const sequelize = require('../../config/sequelize.conf')

class Perfil extends Model {}
Perfil.init(
  {
    Perfil: {
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
    foto: {
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
    modelName: 'Perfil',
    tableName: 'perfil',
  }
)

module.exports = Perfil

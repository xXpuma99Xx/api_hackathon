const { DataTypes, Model } = require('sequelize')
const sequelize = require('../../config/sequelize.conf')

class Broker extends Model {}
Broker.init(
  {
    idBroker: {
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
    link: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // logo: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Broker',
    tableName: 'broker',
  }
)

module.exports = Broker

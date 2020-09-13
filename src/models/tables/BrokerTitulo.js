const { DataTypes, Model } = require('sequelize')
const sequelize = require('../../config/sequelize.conf')

class BrokerTitulo extends Model {}
BrokerTitulo.init(
  {
    idBrokerTitulo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: 'BrokerTitulo',
    tableName: 'brokerTitulo',
  }
)

module.exports = BrokerTitulo

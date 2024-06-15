'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Aluguel extends Model {
      static associate(models) {
        this.belongsTo(models.Cliente, {
          as:"cliente",
          foreignKey:"clienteId"
        })
        this.belongsTo(models.Veiculo, {
          as:"veiculo",
          foreignKey:"veiculoId"
        })
      }
  }
  Aluguel.init({
    clienteId: DataTypes.INTEGER,
    veiculoId: DataTypes.INTEGER,
    data_inicio: DataTypes.DATE,
    data_fim: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Aluguel',
    tableName: 'aluguel'
  });
  return Aluguel;
};
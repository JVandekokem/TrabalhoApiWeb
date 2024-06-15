'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Veiculo extends Model {
    static associate(models) {
      this.belongsToMany(models.Cliente, {
        through: 'aluguel',
        foreignKey: 'veiculoId',
        as: 'veiculo'
      })
    }
  }
  Veiculo.init({
    marca: DataTypes.STRING,
    modelo: DataTypes.STRING,
    ano: DataTypes.INTEGER,
    placa: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Veiculo',
    tableName: 'veiculo'
  });
  return Veiculo;
};
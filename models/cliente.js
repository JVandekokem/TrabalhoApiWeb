'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    static associate(models) {
      this.belongsToMany(models.Veiculo, {
        through: 'aluguel',
        foreignKey: 'clienteId',
        as: 'veiculo'
      })
    }
  }
  Cliente.init({
    nome: DataTypes.STRING,
    telefone: DataTypes.STRING,
    cpf: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cliente',
    tableName: 'cliente'
  });
  return Cliente;
};
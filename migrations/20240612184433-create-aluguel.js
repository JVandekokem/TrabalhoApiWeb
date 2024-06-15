'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('aluguel', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      clienteId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'cliente'
          },
          key: 'id'
        },
        allowNull: false
      },
      veiculoId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'veiculo'
          },
          key: 'id'
        },
        allowNull: false
      },
      data_inicio: {
        type: Sequelize.DATE,
        allowNull: false
      },
      data_fim: {
        type: Sequelize.DATE
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('aluguel');
  }
};
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('veiculo', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      marca: {
        type: Sequelize.STRING,
        allowNull: false
      },
      modelo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ano: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      placa: {
        type: Sequelize.STRING,
        allowNull: false
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
    await queryInterface.dropTable('veiculo');
  }
};
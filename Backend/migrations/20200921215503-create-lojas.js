'use strict';

const orders = require("../models/orders");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Lojas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      lojaname: {
        type: Sequelize.INTEGER,
        references: {
          model: orders,
        }
       
      },
      category: {
        type: Sequelize.STRING
      },
      imagePath: {
        type: Sequelize.STRING
      },
      about: {
        type: Sequelize.STRING
      },
      hours: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Lojas');
  }
};
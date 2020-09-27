'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      emailConfirmation: {
        type: Sequelize.STRING,
        required:true
      },
      address: {
        type: Sequelize.STRING
      },
      number: {
        type: Sequelize.FLOAT
      },
      optionalAddress: {
        type: Sequelize.STRING
      },
      paymentOption: {
        type: Sequelize.STRING
      },
      orderItems: {
        type: Sequelize.INTEGER
      },
      orderId:  {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'products',
          key: 'id',
          as: 'productId'
        },
        
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
    await queryInterface.dropTable('Orders');
  }
};
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('orders', [
      {
        id: 1,
        name: 'Vestidos',
        email: 'Roupas feitas de a melhor qualidade',
        emailConfirmation: './png',
        address: '45',
        number:'',
        optionalAddress: '',
        paymentOption: '',
        orderItems: '',
        orderId: '1',
        created_at: new Date().toDateString(),
        updated_at: new Date().toDateString()
      },
    ]);
      
    },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('orders', null, {})
     
  }
};

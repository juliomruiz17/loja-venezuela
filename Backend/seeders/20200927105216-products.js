'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('products', [
    {
      id: 1,
      name: 'Vestidos',
      description: 'Roupas feitas de a melhor qualidade',
      imagePath: './png',
      price: '45',
      productId:'1' ,
      created_at: new Date().toDateString(),
      updated_at: new Date().toDateString()
    },
  ]);
    
  },
 
  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('products', null, {})
     
  }
};


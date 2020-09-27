'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
  await queryInterface.bulkInsert('lojas', [
    {
      id: 1,
      lojaname: 'Mirandina',
      category: 'Roupas',
      imagePath: './png',
      about: 'descripcion de la loja',
      hours:'de segunda a sexta',
      created_at: new Date().toDateString(),
      updated_at: new Date().toDateString()
    },
  ]);
    
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkDelete('Lojas', null, {})
     
  }
};

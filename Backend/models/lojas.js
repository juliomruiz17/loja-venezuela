'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lojas extends Model {
    
    static associate(models) {
     
     
    }
  };
  Lojas.init({
    lojaname: DataTypes.STRING,
    category: DataTypes.STRING,
    imagePath: DataTypes.STRING,
    about: DataTypes.STRING,
    hours: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Lojas',
    underscored: true,
  });
  Lojas.create({lojaname: "Mirandina"})
  return Lojas;
};
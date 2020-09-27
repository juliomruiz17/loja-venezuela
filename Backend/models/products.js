'use strict';
const {Model} = require('sequelize');
const orders = require('./orders');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
  
  static associate(models) {
    

  }
};
  Products.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    imagePath: DataTypes.STRING,
    price: DataTypes.FLOAT,
    productId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Products',
    underscored: true,
  });
  return Products;
};
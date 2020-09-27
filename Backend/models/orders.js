'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
  
    static associate(models) {
     
      Orders.hasMany(models.Products, {foreignKey: 'productId'});
      Orders.belongsTo(models.Lojas, {foreignKey: 'lojaname'})
    }
  }



  Orders.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    emailConfirmation: DataTypes.STRING,
    address: DataTypes.STRING,
    number: DataTypes.FLOAT,
    optionalAddress: DataTypes.STRING,
    paymentOption: DataTypes.STRING,
    orderId: DataTypes.INTEGER,
    orderItems: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Orders',
    underscored: true,
  });
  return Orders;
};
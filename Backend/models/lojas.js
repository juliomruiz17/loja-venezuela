'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lojas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
  return Lojas;
};
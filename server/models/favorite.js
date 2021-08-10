'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Favorite.init({
    animalId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Favorite',
  });
  Favorite.associate = function(models){
    Favorite.belongsTo(models.User, {foreignKey: 'userId'})
    Favorite.belongsTo(models.Animal, {foreignKey: 'animalId'})
  }
  return Favorite;
};
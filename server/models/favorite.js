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
      Favorite.belongsTo(models.User,{foreignKey:'userId'})
      Favorite.belongsTo(models.Animal,{foreignKey:'animalId'})
    }
  };
  Favorite.init({
    userId: {
      type: DataTypes.INTEGER,
      references:{
        model:'Users',
        key:'id'
      },
    },
    animalId:{
      type: DataTypes.INTEGER,
      references:{
        model: 'Animals',
        key:'id'
      },
    },
  }, {
    sequelize,
    modelName: 'Favorite',
  });
  return Favorite;
};
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class house extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      house.hasMany(models.character);
    }
  }
  house.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      sigil: { type: DataTypes.STRING, allowNull: false },
      head: { type: DataTypes.STRING, allowNull: false },
      extinct: { type: DataTypes.BOOLEAN, allowNull: false },
    },
    {
      sequelize,
      modelName: "house",
    }
  );
  return house;
};

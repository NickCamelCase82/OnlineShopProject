"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class BasketDevice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Basket, Device }) {
      this.belongsTo(Basket, {
        foreignKey: "basketId",
      });
      this.belongsTo(Device, {
        foreignKey: "deviceID",
      });
    }
  }
  BasketDevice.init(
    {
      id: DataTypes.INTEGER,
      basketId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "BasketDevice",
    }
  );
  return BasketDevice;
};

"use strict";
const { INTEGER } = require("sequelize");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Device extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Type, Brand, Rating, BasketDevice, DeviceInfo }) {
      this.belongsTo(Type, {
        foreignKey: "typeId",
      });
      this.belongsTo(Brand, {
        foreignKey: "brandId",
      });
      this.hasMany(Rating, {
        foreignKey: "deviceId",
      });
      this.hasMany(BasketDevice, {
        foreignKey: "deviceId",
      });
      this.hasMany(DeviceInfo, {
        foreignKey: "deviceId",
      });
    }
  }
  Device.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      rating: DataTypes.INTEGER,
      img: DataTypes.STRING,
      typeId: DataTypes.INTEGER,
      brandID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Device",
    }
  );
  return Device;
};

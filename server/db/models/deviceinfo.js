"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DeviceInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Device }) {
      this.belongsTo(Device, {
        foreignKey: "deviceId",
      });
    }
  }
  DeviceInfo.init(
    {
      title: DataTypes.STRING,
      deviceId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "DeviceInfo",
    }
  );
  return DeviceInfo;
};

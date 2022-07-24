"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Device }) {
      this.belongsTo(User, {
        foreignKey: "userId",
      });
      this.belongsTo(Device, {
        foreignKey: "deviceId",
      });
    }
  }
  Rating.init(
    {
      rate: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      deviceID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Rating",
    }
  );
  return Rating;
};

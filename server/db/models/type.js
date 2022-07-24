"use strict";
const { Model } = require("sequelize");
const typebrand = require("./typebrand");
module.exports = (sequelize, DataTypes) => {
  class Type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Device, Brand, TypeBrand }) {
      this.hasMany(Device, {
        foreignKey: "typeId",
      });
      this.belongsToMany(Brand, {
        through: TypeBrand,
        foreignKey: "brandId",
      });
    }
  }
  Type.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Type",
    }
  );
  return Type;
};

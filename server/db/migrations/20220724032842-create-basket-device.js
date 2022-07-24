"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("BasketDevices", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      basketId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Baskets",
          },
          key: "id",
        },
      },
      deviceId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Devices",
          },
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("BasketDevices");
  },
};

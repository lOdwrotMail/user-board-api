'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('colors', 'created_at', {
      defaultValue: Sequelize.fn('now'),
      type: DataTypes.DATE,
      allowNull: false,
    });
    await queryInterface.addColumn('colors', 'updated_at', {
      defaultValue: Sequelize.fn('now'),
      type: DataTypes.DATE,
      allowNull: false,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('colors', 'created_at');
    await queryInterface.removeColumn('colors', 'updated_at');
  }
};

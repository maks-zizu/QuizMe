'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    static associate({ Question }) {
      // связь - один ко многим
      this.hasMany(Question, { foreignKey: 'themeId' });
    }
  }
  Theme.init(
    {
      theme: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Theme',
    },
  );
  return Theme;
};

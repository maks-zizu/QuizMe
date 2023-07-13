'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate({ Theme }) {
      // this - это Question
      this.belongsTo(Theme, { foreignKey: 'themeId' });
    }
  }
  Question.init({
    themeId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        key: 'id',
        model: 'Themes',
      },
      onDelete: 'CASCADE',
    },
    question: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    answer: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};

/** @type {import('sequelize-cli').Migration} */
const data = require('../themesArr');

module.exports = {
  async up(queryInterface) {
    const themesArr = data.map((el) => ({
      ...el,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Themes', themesArr, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Themes', null, {});
  },
};

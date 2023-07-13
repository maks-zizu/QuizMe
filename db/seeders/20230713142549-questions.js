/** @type {import('sequelize-cli').Migration} */
const data = require('../questionArr');

module.exports = {
  async up(queryInterface) {
    const questionArr = data.map((el) => ({
      ...el,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Questions', questionArr, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Questions', null, {});
  },
};

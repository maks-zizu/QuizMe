/** @type {import('sequelize-cli').Migration} */
const data = require("../themesArr");

module.exports = {
  async up(queryInterface) {
    const arrProducts = data.map((el) => ({
      ...el,
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert("Products", arrProducts, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};

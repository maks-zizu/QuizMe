/** @type {import('sequelize-cli').Migration} */
const { User } = require('../models');

module.exports = {
  async up() {
    await User.bulkCreate(
      [
        {
          name: 'Василий',
          score: 100,
        },
        {
          name: 'Петя',
          score: 0,
        },
      ],
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};

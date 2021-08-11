'use strict';
const fs = require('fs')

let data = JSON.parse(fs.readFileSync('./databases/animals.json',{encoding:'utf-8'})).map(el => {
  return {
    ...el,
    createdAt: new Date(),
    updatedAt: new Date()
  }
})
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Animals', data, {})
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Animals', {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

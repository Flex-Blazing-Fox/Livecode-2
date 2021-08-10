'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('Animals', [
      {
        id: 1,
        name: 'Koala',
        imageUrl:
          'https://asset.kompas.com/crops/hCsl_4aqNq0wTSM25eLta8dsGPU=/5x4:1000x667/750x500/data/photo/2020/11/21/5fb8e8551ad37.jpg',
        description: 'Spends up to 80% of the time sleeping or resting!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: 'Red Panda',
        imageUrl:
          'https://asset.kompas.com/crops/SpX-ulM8I_KXO7IHz2BrVtyjnA0=/0x0:1000x667/750x500/data/photo/2018/03/23/2501395188.jpg',
        description: 'There are less than 3,000 left in the wild!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: 'Artic Fox',
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNLvD0jU1zq7uvPP1qGdlpg9sq19G1mn7ADmO0WiKUMjeh7y5Ms4Yg885BYSEqfqfpg2A&usqp=CAU',
        description: 'Extremely thick winter fur!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Animals', null, {})
  },
}

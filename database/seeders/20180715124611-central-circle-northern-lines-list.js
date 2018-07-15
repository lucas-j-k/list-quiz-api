'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('lists', [
      {
        "id": 5,
        "name": "Tube Stations - Central Line"
      },
      {
        "id": 6,
        "name": "Tube Stations - Circle Line"
      },
      {
        "id": 7,
        "name": "Tube Stations - Northern Line"
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};

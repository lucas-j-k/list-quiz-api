'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('entries', [
      {
        "text": "Hammersmith",
        "list_id": 6
      },
      {
        "text": "Goldhawk Road",
        "list_id": 6
      },
      {
        "text": "Shepherd's Bush Market",
        "list_id": 6
      },
      {
        "text": "Wood Lane",
        "list_id": 6
      },
      {
        "text": "Latimer Road",
        "list_id": 6
      },
      {
        "text": "Ladbroke Grove",
        "list_id": 6
      },
      {
        "text": "Westbourne Park",
        "list_id": 6
      },
      {
        "text": "Royal Oak",
        "list_id": 6
      },
      {
        "text": "Paddington",
        "list_id": 6
      },
      {
        "text": "Edgware Road",
        "list_id": 6
      },
      {
        "text": "Baker Street",
        "list_id": 6
      },
      {
        "text": "Great Portland Street",
        "list_id": 6
      },
      {
        "text": "Euston Square",
        "list_id": 6
      },
      {
        "text": "King's Cross St. Pancras",
        "list_id": 6
      },
      {
        "text": "Farringdon",
        "list_id": 6
      },
      {
        "text": "Barbican",
        "list_id": 6
      },
      {
        "text": "Moorgate",
        "list_id": 6
      },
      {
        "text": "Liverpool Street",
        "list_id": 6
      },
      {
        "text": "Aldgate",
        "list_id": 6
      },
      {
        "text": "Tower Hill",
        "list_id": 6
      },
      {
        "text": "Monument",
        "list_id": 6
      },
      {
        "text": "Cannon Street",
        "list_id": 6
      },
      {
        "text": "Mansion House",
        "list_id": 6
      },
      {
        "text": "Blackfriars",
        "list_id": 6
      },
      {
        "text": "Temple",
        "list_id": 6
      },
      {
        "text": "Embankment",
        "list_id": 6
      },
      {
        "text": "Westminster",
        "list_id": 6
      },
      {
        "text": "St. James's Park",
        "list_id": 6
      },
      {
        "text": "Victoria",
        "list_id": 6
      },
      {
        "text": "Sloane Square",
        "list_id": 6
      },
      {
        "text": "South Kensington",
        "list_id": 6
      },
      {
        "text": "Gloucester Road",
        "list_id": 6
      },
      {
        "text": "High Street Kensington",
        "list_id": 6
      },
      {
        "text": "Notting Hill Gate",
        "list_id": 6
      },
      {
        "text": "Bayswater",
        "list_id": 6
      },
      {
        "text": "Paddington",
        "list_id": 6
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

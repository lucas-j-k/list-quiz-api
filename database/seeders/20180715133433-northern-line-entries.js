'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('entries', [
      {
        "text": "Morden",
        "list_id": 7
      },
      {
        "text": "South Wimbledon",
        "list_id": 7
      },
      {
        "text": "Colliers Wood",
        "list_id": 7
      },
      {
        "text": "Tooting Broadway",
        "list_id": 7
      },
      {
        "text": "Tooting Bec",
        "list_id": 7
      },
      {
        "text": "Balham",
        "list_id": 7
      },
      {
        "text": "Clapham South",
        "list_id": 7
      },
      {
        "text": "Clapham Common",
        "list_id": 7
      },
      {
        "text": "Clapham North",
        "list_id": 7
      },
      {
        "text": "Stockwell",
        "list_id": 7
      },
      {
        "text": "Oval",
        "list_id": 7
      },
      {
        "text": "Kennington",
        "list_id": 7
      },
      {
        "text": "Elephant & Castle",
        "list_id": 7
      },
      {
        "text": "Waterloo",
        "list_id": 7
      },
      {
        "text": "Embankment",
        "list_id": 7
      },
      {
        "text": "Charing Cross",
        "list_id": 7
      },
      {
        "text": "Leicester Square",
        "list_id": 7
      },
      {
        "text": "Tottenham Court Road",
        "list_id": 7
      },
      {
        "text": "Goodge Street",
        "list_id": 7
      },
      {
        "text": "Warren Street",
        "list_id": 7
      },
      {
        "text": "Borough",
        "list_id": 7
      },
      {
        "text": "London Bridge",
        "list_id": 7
      },
      {
        "text": "Bank",
        "list_id": 7
      },
      {
        "text": "Moorgate",
        "list_id": 7
      },
      {
        "text": "Old Street",
        "list_id": 7
      },
      {
        "text": "Angel",
        "list_id": 7
      },
      {
        "text": "King's Cross St. Pancras",
        "list_id": 7
      },
      {
        "text": "Euston",
        "list_id": 7
      },
      {
        "text": "Mornington Crescent",
        "list_id": 7
      },
      {
        "text": "Camden Town",
        "list_id": 7
      },
      {
        "text": "Kentish Town",
        "list_id": 7
      },
      {
        "text": "Tufnell Park",
        "list_id": 7
      },
      {
        "text": "Archway",
        "list_id": 7
      },
      {
        "text": "Highgate",
        "list_id": 7
      },
      {
        "text": "East Finchley",
        "list_id": 7
      },
      {
        "text": "Finchley Central",
        "list_id": 7
      },
      {
        "text": "Mill Hill East",
        "list_id": 7
      },
      {
        "text": "West Finchley",
        "list_id": 7
      },
      {
        "text": "Woodside Park",
        "list_id": 7
      },
      {
        "text": "Totteridge & Whetstone",
        "list_id": 7
      },
      {
        "text": "High Barnet",
        "list_id": 7
      },
      {
        "text": "Chalk Farm",
        "list_id": 7
      },
      {
        "text": "Belsize Park",
        "list_id": 7
      },
      {
        "text": "Hampstead",
        "list_id": 7
      },
      {
        "text": "Golders Green",
        "list_id": 7
      },
      {
        "text": "Brent Cross",
        "list_id": 7
      },
      {
        "text": "Hendon Central",
        "list_id": 7
      },
      {
        "text": "Colindale",
        "list_id": 7
      },
      {
        "text": "Burnt Oak",
        "list_id": 7
      },
      {
        "text": "Edgware",
        "list_id": 7
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

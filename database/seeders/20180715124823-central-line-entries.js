'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('entries', [
      {
        "text": "West Ruislip",
        "list_id": 5
      },
      {
        "text": "Ruislip Gardens",
        "list_id": 5
      },
      {
        "text": "South Ruislip",
        "list_id": 5
      },
      {
        "text": "Northolt",
        "list_id": 5
      },
      {
        "text": "Greenford",
        "list_id": 5
      },
      {
        "text": "Perivale",
        "list_id": 5
      },
      {
        "text": "Hanger Lane",
        "list_id": 5
      },
      {
        "text": "Ealing Broadway",
        "list_id": 5
      },
      {
        "text": "West Acton",
        "list_id": 5
      },
      {
        "text": "North Acton",
        "list_id": 5
      },
      {
        "text": "East Acton",
        "list_id": 5
      },
      {
        "text": "White City",
        "list_id": 5
      },
      {
        "text": "Shepherd's Bush",
        "list_id": 5
      },
      {
        "text": "Holland Park",
        "list_id": 5
      },
      {
        "text": "Notting Hill Gate",
        "list_id": 5
      },
      {
        "text": "Queensway",
        "list_id": 5
      },
      {
        "text": "Lancaster Gate",
        "list_id": 5
      },
      {
        "text": "Marble Arch",
        "list_id": 5
      },
      {
        "text": "Bond Street",
        "list_id": 5
      },
      {
        "text": "Oxford Circus",
        "list_id": 5
      },
      {
        "text": "Tottenham Court Road",
        "list_id": 5
      },
      {
        "text": "Holborn",
        "list_id": 5
      },
      {
        "text": "Chancery Lane",
        "list_id": 5
      },
      {
        "text": "St. Paul's",
        "list_id": 5
      },
      {
        "text": "Bank",
        "list_id": 5
      },
      {
        "text": "Liverpool Street",
        "list_id": 5
      },
      {
        "text": "Bethnal Green",
        "list_id": 5
      },
      {
        "text": "Mile End",
        "list_id": 5
      },
      {
        "text": "Stratford",
        "list_id": 5
      },
      {
        "text": "Leyton",
        "list_id": 5
      },
      {
        "text": "Leytonstone",
        "list_id": 5
      },
      {
        "text": "Wanstead",
        "list_id": 5
      },
      {
        "text": "Redbridge",
        "list_id": 5
      },
      {
        "text": "Gants Hill",
        "list_id": 5
      },
      {
        "text": "Newbury Park",
        "list_id": 5
      },
      {
        "text": "Barkingside",
        "list_id": 5
      },
      {
        "text": "Fairlop",
        "list_id": 5
      },
      {
        "text": "Hainault",
        "list_id": 5
      },
      {
        "text": "Grange Hill",
        "list_id": 5
      },
      {
        "text": "Chigwell",
        "list_id": 5
      },
      {
        "text": "Roding Valley",
        "list_id": 5
      },
      {
        "text": "Snaresbrook",
        "list_id": 5
      },
      {
        "text": "South Woodford",
        "list_id": 5
      },
      {
        "text": "Woodford",
        "list_id": 5
      },
      {
        "text": "Buckhurst Hill",
        "list_id": 5
      },
      {
        "text": "Loughton",
        "list_id": 5
      },
      {
        "text": "Debden",
        "list_id": 5
      },
      {
        "text": "Theydon Bois",
        "list_id": 5
      },
      {
        "text": "Epping",
        "list_id": 5
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

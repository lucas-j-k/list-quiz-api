'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('entries', [
      {
        text: 'Sir Robert Walpole',
        list_id: 4
      },
      {
        text: 'Spencer Compton, 1st Earl of Wilmington',
        list_id: 4
      },
      {
        text: 'Henry Pelham',
        list_id: 4
      },
      {
        text: 'Thomas Pelham-Holles 1st Duke of Newcastle',
        list_id: 4
      },
      {
        text: 'William Cavendish Duke of Devonshire',
        list_id: 4
      },
      {
        text: 'John Stuart, 3rd Earl of Bute',
        list_id: 4
      },
      {
        text: 'George Grenville',
        list_id: 4
      },
      {
        text: 'Charles Watson-Wentworth, 2nd Marquess of Rockingham',
        list_id: 4
      },
      {
        text: 'William Pitt The Elder',
        list_id: 4
      },
      {
        text: 'Augustus Henry Fitzroy, 3rd Duke of Grafton',
        list_id: 4
      },
      {
        text: 'Lord Frederick North',
        list_id: 4
      },
      {
        text: 'William Petty, 2nd Earl of Shelburne',
        list_id: 4
      },
      {
        text: 'William Cavendish-Bentinck Duke of Portland',
        list_id: 4
      },
      {
        text: 'William Pitt The Younger',
        list_id: 4
      },
      {
        text: 'Henry Addington 1st Viscount Sidmouth',
        list_id: 4
      },
      {
        text: 'William Pitt The Younger',
        list_id: 4
      },
      {
        text: 'William Wyndham Grenville, 1st Baron Grenville',
        list_id: 4
      },
      {
        text: 'Spencer Perceval',
        list_id: 4
      },
      {
        text: 'Robert Banks Jenkinson Earl of Liverpool',
        list_id: 4
      },
      {
        text: 'George Canning',
        list_id: 4
      },
      {
        text: 'Frederick Robinson, Viscount Goderich',
        list_id: 4
      },
      {
        text: 'Arthur Wellesley, 1st Duke of Wellington',
        list_id: 4
      },
      {
        text: 'Charles Grey, 2nd Earl Grey',
        list_id: 4
      },
      {
        text: 'William Lamb, 2nd Viscount Melbourne',
        list_id: 4
      },
      {
        text: 'Arthur Wellesley, 1st Duke of Wellington',
        list_id: 4
      },
      {
        text: 'Sir Robert Peel 2nd Baronet',
        list_id: 4
      },
      {
        text: 'Lord John Russell, 1st Earl Russell',
        list_id: 4
      },
      {
        text: 'Edward Smith Stanley, 14th Earl of Derby',
        list_id: 4
      },
      {
        text: 'George Hamilton Gordon Earl of Aberdeen',
        list_id: 4
      },
      {
        text: 'Henry John Temple, 3rd Viscount Palmerston',
        list_id: 4
      },
      {
        text: 'Edward Smith Stanley, 14th Earl of Derby',
        list_id: 4
      },
      {
        text: 'Lord John Russell, 1st Earl Russell',
        list_id: 4
      },
      {
        text: 'Edward Smith Stanley, 14th Earl of Derby',
        list_id: 4
      },
      {
        text: 'Benjamin Disraeli, the Earl of Beaconsfield',
        list_id: 4
      },
      {
        text: 'William Ewart Gladstone',
        list_id: 4
      },
      {
        text: 'Robert Gascoyne-Cecil, 3rd Marquess of Salisbury',
        list_id: 4
      },
      {
        text: 'Archibald Primrose, 5th Earl of Rosebery',
        list_id: 4
      },
      {
        text: 'Arthur James Balfour',
        list_id: 4
      },
      {
        text: 'Sir Henry Campbell-Bannerman',
        list_id: 4
      },
      {
        text: 'Herbert Henry Asquith',
        list_id: 4
      },
      {
        text: 'David Lloyd George',
        list_id: 4
      },
      {
        text: 'Andrew Bonar Law',
        list_id: 4
      },
      {
        text: 'Stanley Baldwin',
        list_id: 4
      },
      {
        text: 'James Ramsay MacDonald',
        list_id: 4
      },
      {
        text: 'Neville Chamberlain',
        list_id: 4
      },
      {
        text: 'Sir Winston Churchill',
        list_id: 4
      },
      {
        text: 'Clement Attlee',
        list_id: 4
      },
      {
        text: 'Sir Anthony Eden',
        list_id: 4
      },
      {
        text: 'Harold Macmillan',
        list_id: 4
      },
      {
        text: 'Sir Alec Douglas-Home',
        list_id: 4
      },
      {
        text: 'Harold Wilson',
        list_id: 4
      },
      {
        text: 'Sir Edward Heath',
        list_id: 4
      },
      {
        text: 'James Callaghan',
        list_id: 4
      },
      {
        text: 'Margaret Thatcher',
        list_id: 4
      },
      {
        text: 'John Major',
        list_id: 4
      },
      {
        text: 'Tony Blair',
        list_id: 4
      },
      {
        text: 'Gordon Brown',
        list_id: 4
      },
      {
        text: 'David Cameron',
        list_id: 4
      },
      {
        text: 'Theresa May',
        list_id: 4
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

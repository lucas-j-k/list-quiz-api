'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('entries', [
      {
        text: 'George Washington',
        list_id: 3
      },
      {
        text: 'John Adams',
        list_id: 3
      },
      {
        text: 'Thomas Jefferson',
        list_id: 3
      },
      {
        text: 'James Madison',
        list_id: 3
      },
      {
        text: 'James Monroe',
        list_id: 3
      },
      {
        text: 'John Quincy Adams',
        list_id: 3
      },
      {
        text: 'Andrew Jackson',
        list_id: 3
      },
      {
        text: 'Martin Van Buren',
        list_id: 3
      },
      {
        text: 'William Henry Harrison',
        list_id: 3
      },
      {
        text: 'John Tyler',
        list_id: 3
      },
      {
        text: 'James Polk',
        list_id: 3
      },
      {
        text: 'Zachary Taylor',
        list_id: 3
      },
      {
        text: 'Millard Fillmore',
        list_id: 3
      },
      {
        text: 'Franklin Pierce',
        list_id: 3
      },
      {
        text: 'James Buchanan',
        list_id: 3
      },
      {
        text: 'Abraham Lincoln',
        list_id: 3
      },
      {
        text: 'Andrew Johnson',
        list_id: 3
      },
      {
        text: 'Ulysses S. Grant',
        list_id: 3
      },
      {
        text: 'Rutherford B. Hayes',
        list_id: 3
      },
      {
        text: 'James Garfield',
        list_id: 3
      },
      {
        text: 'Chester Arthur',
        list_id: 3
      },
      {
        text: 'Grover Cleveland',
        list_id: 3
      },
      {
        text: 'William McKinley',
        list_id: 3
      },
      {
        text: 'Theodore Roosevelt',
        list_id: 3
      },
      {
        text: 'William H. Taft',
        list_id: 3
      },
      {
        text: 'Woodrow Wilson',
        list_id: 3
      },
      {
        text: 'Warren Harding',
        list_id: 3
      },
      {
        text: 'Calvin Coolidge',
        list_id: 3
      },
      {
        text: 'Herbert Hoover',
        list_id: 3
      },
      {
        text: 'Franklin D. Roosevelt',
        list_id: 3
      },
      {
        text: 'Harry S. Truman',
        list_id: 3
      },
      {
        text: 'Dwight Eisenhower',
        list_id: 3
      },
      {
        text: 'John F. Kennedy',
        list_id: 3
      },
      {
        text: 'Lyndon Johnson',
        list_id: 3
      },
      {
        text: 'Richard Nixon',
        list_id: 3
      },
      {
        text: 'Gerald Ford',
        list_id: 3
      },
      {
        text: 'Jimmy Carter',
        list_id: 3
      },
      {
        text: 'Ronald Reagan',
        list_id: 3
      },
      {
        text: 'George H. W. Bush',
        list_id: 3
      },
      {
        text: 'Bill Clinton',
        list_id: 3
      },
      {
        text: 'George W. Bush',
        list_id: 3
      },
      {
        text: 'Barack Obama',
        list_id: 3
      },
      {
        text: 'Donald Trump',
        list_id: 3
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

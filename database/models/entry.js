'use strict';
module.exports = (sequelize, DataTypes) => {
  var Entry = sequelize.define('Entry', {
    text: DataTypes.STRING
  }, {});

  Entry.associate = function(models){
  Entry.belongsTo(models.List, { as : 'list', foreignKey: 'list_id' });
  }

  return Entry;
};

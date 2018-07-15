'use strict';
module.exports = (sequelize, DataTypes) => {
  var List = sequelize.define('List', {
    name: DataTypes.STRING
  }, {});

  List.associate = function(models){
    List.hasMany(models.Entry, {as: 'entries', foreignKey: 'list_id'})
  }

  return List;
};

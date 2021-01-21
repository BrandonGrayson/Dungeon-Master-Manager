/* eslint-disable no-var */
//GAME SCHEMEA GOES HERE
module.exports = function(sequelize, DataTypes) {
  var Game = sequelize.define("Game", {
    // id: { type: DataTypes.INTEGER, primaryKey: true },
    // eslint-disable-next-line camelcase
    name_of_game: DataTypes.STRING,
    // eslint-disable-next-line camelcase
    story_line: DataTypes.STRING,
    map_id: DataTypes.STRING
  });
  Game.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Game.hasMany(models.Characters, {
      onDelete: "cascade"
    });
  };
  return Game;
};

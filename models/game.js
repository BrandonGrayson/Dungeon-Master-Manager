//GAME SCHEMEA GOES HERE
module.exports = function(sequelize, DataTypes) {
  const game = sequelize.define("games", {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    // eslint-disable-next-line camelcase
    name_of_game: DataTypes.STRING,
    // eslint-disable-next-line camelcase
    story_line: DataTypes.STRING
  });
  return game;
};

// game.associate = function(models) {
//   // Associating Author with Posts
//   // When an Author is deleted, also delete any associated Posts
//   game.hasMany(models.character, {
//     onDelete: "cascade"
//   });
// };

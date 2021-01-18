//GAME SCHEMEA GOES HERE
module.exports = function(sequelize, DataTypes) {
  const Games = sequelize.define("games", {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name_of_game: DataTypes.STRING,
    story_line: DataTypes.STRING
  });
  return Games;
};
// Games.associate = function(models) {
//   // Associating Author with Posts
//   // When an Author is deleted, also delete any associated Posts
//   Games.hasMany(models.character, {
//     onDelete: "cascade"
//   });
// };s

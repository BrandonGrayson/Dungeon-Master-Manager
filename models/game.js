module.exports = function(sequelize, DataTypes) {
  const Game = sequelize.define("Game", {
    // Giving the Author model a name of type STRING
    name: DataTypes.STRING
  });

  Game.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Game.hasMany(models.Character, {
      onDelete: "cascade"
    });
  };

  return Game;
};

module.exports = function(sequelize, DataTypes) {
  //CHARACTER SCHEMA GOES HERE
  const characters = sequelize.define("Characters", {
    //COLUMNS ARE MADE HERE
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: { type: DataTypes.STRING },
    race: { type: DataTypes.STRING, allowNull: false },
    class: { type: DataTypes.TEXT, allowNull: false },
    alignment: { type: DataTypes.STRING },
    strength: { type: DataTypes.INTEGER },
    dexterity: { type: DataTypes.INTEGER },
    constitution: { type: DataTypes.INTEGER },
    intelligence: { type: DataTypes.INTEGER },
    wisdom: { type: DataTypes.INTEGER },
    charisma: { type: DataTypes.INTEGER },
    weapons: { type: DataTypes.STRING }
  });

  characters.associate = function(models) {
    characters.belongsTo(models.games, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return characters;
};

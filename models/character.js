/* eslint-disable no-var */
module.exports = function(sequelize, DataTypes) {
  //CHARACTER SCHEMA GOES HERE
  var Characters = sequelize.define("Characters", {
    //COLUMNS ARE MADE HERE
    // id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
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

  Characters.associate = function(models) {
    Characters.belongsTo(models.Game, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Characters;
};

module.exports = function(sequelize, DataTypes) {
  const characters = sequelize.define("Characters", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

  characters.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    characters.belongsTo(models.Game, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return character;
};

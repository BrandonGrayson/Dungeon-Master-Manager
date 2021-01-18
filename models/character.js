module.exports = function(sequelize, DataTypes) {
  //CHARACTER SCHEMA GOES HERE
  const characters = sequelize.define("Characters", {
    //COLUMNS ARE MADE HERE
    race: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    class: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    
  });

  // characters.associate = function(models) {
  //   // We're saying that a Post should belong to an Author
  //   // A Post can't be created without an Author due to the foreign key constraint
  //   characters.belongsTo(models.Games, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  return characters;
};

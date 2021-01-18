/* eslint-disable camelcase */
class Character {
  constructor(
    race,
    character_class,
    name,
    strength,
    dexterity,
    constitution,
    intelligence,
    wisdom,
    charisma,
    weapons
  ) {
    this.race = race;
    this.character_class = character_class;
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.constitution = constitution;
    this.intelligence = intelligence;
    this.wisdom = wisdom;
    this.charisma = charisma;
    this.weapons = weapons;
  }
}

module.exports = Character;

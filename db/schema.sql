CREATE DATABASE DMM_DB;
USE DMM_DB;

CREATE TABLE games (
    id int NOT NULL AUTO_INCREMENT,
    name_of_game varchar(40) NOT NULL,
    story_line varchar(40) NOT NULL,
    t1  TIMESTAMP,
    PRIMARY KEY (id)
);

CREATE TABLE characters (
	id int NOT NULL AUTO_INCREMENT,
    game_id int NOT NULL,
    race varchar(40) NOT NULL,
    alignment VARCHAR(40) NOT NULL,
    class varchar(40) NOT NULL,
	name varchar(40) NOT NULL,
    strength INT NOT NULL,
	dexterity INT NOT NULL,
    constitution INT NOT NULL,
    intelligence INT NOT NULL,
    wisdom INT NOT NULL,
    charisma INT NOT NULL,
    weapons VARCHAR(50),
    PRIMARY KEY (id),
    FOREIGN KEY (game_id) REFERENCES games(id)
);

INSERT INTO games(name_of_game, story_line)
VALUES ("testing", "this story line")
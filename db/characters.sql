### Schema

CREATE DATABASE DMM_DB;
USE DMM_DB;

CREATE TABLE characters
(
	id int NOT NULL AUTO_INCREMENT,
    game_id int NOT NULL FORAUTO_INCREMENT,
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
    FOREIGN KEY (game_id),
);
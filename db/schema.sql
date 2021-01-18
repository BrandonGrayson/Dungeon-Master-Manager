CREATE DATABASE DMM_DB;
USE DMM_DB;

-- CREATE TABLE games (
--     id int NOT NULL AUTO_INCREMENT,
--     name_of_game varchar(40) NOT NULL,
--     story_line varchar(40) NOT NULL,
--     t1  TIMESTAMP,
--     PRIMARY KEY (id)
-- );

-- CREATE TABLE characters (
-- 	id int NOT NULL AUTO_INCREMENT,
--     game_id int NOT NULL,
--     race varchar(40) NOT NULL,
--     alignment VARCHAR(40) NOT NULL,
--     class varchar(40) NOT NULL,
-- 	name varchar(40) NOT NULL,
--     strength INT NOT NULL,
-- 	dexterity INT NOT NULL,
--     constitution INT NOT NULL,
--     intelligence INT NOT NULL,
--     wisdom INT NOT NULL,
--     charisma INT NOT NULL,
--     weapons VARCHAR(50),
--     PRIMARY KEY (id)
-- );

INSERT INTO games(id, name_of_game, story_line, createdAt, updatedAt)
VALUES (1,"testing", "this story line", "1992-03-23", "1002-04-04")
-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE `country_master` (
    `ISO_code` INT  NOT NULL ,
    `country_name` TEXT  NOT NULL ,
    `population` INT  NOT NULL ,
    `gdp` FLOAT  NOT NULL ,
    PRIMARY KEY (
        `ISO_code`
    )
);

CREATE TABLE `vaccination_table` (
    `country_name` TEXT  NOT NULL ,
    `ISO_code` INT  NOT NULL ,
    `date` DATE  NOT NULL ,
    `total_vaccinations` INT  NOT NULL ,
    `people_vaccinated` INT  NOT NULL ,
    `daily_vaccinations` INT  NOT NULL ,
    `total_vaccinations_per_hund` FLOAT  NOT NULL ,
    `people_vaccinated_per_hund` FLOAT  NOT NULL ,
    PRIMARY KEY (
        `ISO_code`,`date`
    )
);

ALTER TABLE `vaccination_table` ADD CONSTRAINT `fk_vaccination_table_ISO_code` FOREIGN KEY(`ISO_code`)
REFERENCES `country_master` (`ISO_code`);


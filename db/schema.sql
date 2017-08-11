

create database burgers_db;
use burgers_db;

create table burgers (
    id INTEGER(100) AUTO_INCREMENT NOT NULL,
    burger_name varchar(30) not null,
    devoured bool default false,
    date timestamp default current_timestamp,
    PRIMARY KEY (id)
);


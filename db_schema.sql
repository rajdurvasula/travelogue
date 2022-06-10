create database if not exists traveldb;
use traveldb;
create table travelentry(id int not null auto_increment primary key, title varchar(50), description varchar(100), place varchar(50), country varchar(30));

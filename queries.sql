create table employees (empid int primary key, empname varchar(15), name varchar(35), password varchar(16), email varchar(30));
create table empsessions(sessionid varchar(256),empid int);

alter table address add foreign key (idaddress) references customer(idaddress) ;

select * from empsessions;
select * from customer

desc empsessions;

insert into employees values(1, "admin", "adminName", "adminPassword", "admin@thenewabacus.com");
 alter table empsessions add ipaddress varchar(60);





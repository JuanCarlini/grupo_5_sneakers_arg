	create database if not exists sneakers_db;
    create database sneakers_db;
    use sneakers_db;
    
    create table usuarios(
    id int(10) auto_increment,
    primary key (id),
    name varchar(50) not null,
    surname varchar(50) not null,
    email varchar(50) not null,
	user varchar(50) not null,
    pass varchar(250) not null,
    avatar varchar(250));
    
   create table productos(
    id int(10) not null,
    name varchar(150) not null,
    description varchar(1500) not null,
    image varchar(50) not null,
    category varchar(50) not null,
    color varchar(50) not null,
	price varchar(50) not null)
    
    
    
    
    
    
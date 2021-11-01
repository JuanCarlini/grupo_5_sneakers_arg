DROP DATABASE IF EXISTS sneakers_db;

CREATE DATABASE sneakers_db;

use sneakers_db;

CREATE TABLE IF NOT EXISTS USUARIOS (
    USUARIO_ID int(11) NOT NULL AUTO_INCREMENT,
    userName varchar(50) NOT NULL,
    userName varchar(50) NOT NULL,
    country varchar(20) NOT NULL,
    email varchar(250) NOT NULL,
    password varchar(150) NOT NULL,
    address varchar(250) NOT NULL,
    avatar varchar(250) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (USUARIO_ID),
    FOREIGN KEY (PRODUCTO_ID) REFERENCES PRODUCTOS(PRODUCTO_ID)
);
)
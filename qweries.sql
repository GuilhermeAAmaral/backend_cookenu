CREATE TABLE user_cookenu (
id VARCHAR (255) PRIMARY KEY,
name VARCHAR (255) NOT NULL,
email VARCHAR (255) UNIQUE NOT NULL,
password VARCHAR (255) NOT NULL
);

CREATE TABLE recipes_cookenu (
id VARCHAR (255) PRIMARY KEY,
title VARCHAR (255) NOT NULL,
description VARCHAR (1500) NOT NULL,
date DATE NOT NULL
);
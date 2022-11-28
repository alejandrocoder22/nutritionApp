CREATE DATABASE calories_app;

CREATE TABLE users (
    userId SMALLSERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(300) NOT NULL,
    weight NUMERIC(5,2) DEFAULT 'null',
    height NUMERIC(5,2) DEFAULT 'null',
    age SMALLINT DEFAULT 'null',
    isAdmin BOOLEAN DEFAULT 'false'
);

CREATE TABLE users_food_register (
    userFoodId SMALLSERIAL PRIMARY KEY,
    foodName VARCHAR(50) NOT NULL,
    grams NUMERIC(6,2),
    eatTime VARCHAR(25) NOT NULL,
    userId SMALLSERIAL REFERENCES users(userId) NOT NULL,
    createdAt DATE NOT NULL
)

CREATE TABLE public_food (
    foodId SMALLSERIAL PRIMARY KEY,
    foodName VARCHAR(50) NOT NULL UNIQUE,
    proteins NUMERIC(4,2) NOT NULL,
    carbs NUMERIC(4,2) NOT NULL,
    fats NUMERIC(4,2) NOT NULL
);

CREATE TABLE private_food (
    userId SMALLINT REFERENCES users(userId),
)
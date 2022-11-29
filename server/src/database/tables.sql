CREATE DATABASE calories_app;

CREATE TABLE users (
    user_id SMALLSERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(300) NOT NULL,
    weight NUMERIC(5,2),
    height NUMERIC(5,2),
    age SMALLINT,
    is_admin BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE food (
    food_id SMALLSERIAL PRIMARY KEY,
    food_name VARCHAR(50) NOT NULL UNIQUE,
    proteins NUMERIC(4,2) NOT NULL,
    carbs NUMERIC(4,2) NOT NULL,
    fats NUMERIC(4,2) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    is_verified BOOLEAN DEFAULT false,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE users_food_dairy (
    dairy_id SMALLSERIAL PRIMARY KEY,
    grams NUMERIC(6,2),
    eat_time VARCHAR(25) NOT NULL,
    user_id SMALLSERIAL REFERENCES users(user_id) NOT NULL,
    food_id SMALLINT REFERENCES food(food_id) NOT NULL,
    date_added DATE NOT NULL
);

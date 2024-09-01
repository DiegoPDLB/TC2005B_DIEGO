CREATE DATABASE videojuegos_db;

USE videojuegos_db;

CREATE TABLE videojuegos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    plataforma VARCHAR(255) NOT NULL
);

INSERT INTO videojuegos (nombre, plataforma) VALUES 
('The Legend of Zelda', 'Nintendo Switch'),
('Halo Infinite', 'Xbox One'),
('God of War', 'PlayStation 4');

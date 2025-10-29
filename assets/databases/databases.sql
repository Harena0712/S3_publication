CREATE DATABASE publication;
USE publication;

CREATE  TABLE publication_membre(
    id_membre INT PRIMARY KEY AUTO_INCREMENT,
    Nom VARCHAR(50),
    email VARCHAR(50),
    mdp VARCHAR(50)
);

INSERT INTO publication_membre (Nom, email, mdp) VALUES 
('Harena', 'harena@gmail.com', '1234567h');
DROP TABLE IF EXISTS ARTISAN;
DROP TABLE IF EXISTS SPECIALITE;
DROP TABLE IF EXISTS CATEGORIE;

CREATE TABLE CATEGORIE(
   id_categorie INT AUTO_INCREMENT,
   nom_categorie VARCHAR(50)  NOT NULL,
   PRIMARY KEY(id_categorie),
   UNIQUE(nom_categorie)
);

CREATE TABLE SPECIALITE(
   id_specialite INT AUTO_INCREMENT,
   nom_specialite VARCHAR(50)  NOT NULL,
   id_categorie INT NOT NULL,
   PRIMARY KEY(id_specialite),
   UNIQUE(nom_specialite),
   FOREIGN KEY(id_categorie) REFERENCES CATEGORIE(id_categorie)
);

CREATE TABLE ARTISAN(
   id_artisan INT AUTO_INCREMENT,
   nom_artisan VARCHAR(100)  NOT NULL,
   note DECIMAL(2,1)   NOT NULL,
   a_propos TEXT NOT NULL,
   email VARCHAR(100)  NOT NULL,
   site_web VARCHAR(255) ,
   top_mois BOOLEAN NOT NULL,
   id_specialite INT NOT NULL,
   PRIMARY KEY(id_artisan),
   FOREIGN KEY(id_specialite) REFERENCES SPECIALITE(id_specialite)
);
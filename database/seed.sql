-- Alimentation de la base de données 'Trouve ton artisan'

-- Insertion des catégories
INSERT INTO CATEGORIE (nom_categorie) VALUES
('Alimentation'),
('Bâtiment'),
('Fabrication'),
('Services');

-- Insertion des spécialités
INSERT INTO SPECIALITE (nom_specialite, id_categorie) VALUES
('Boucher', (SELECT id_categorie FROM CATEGORIE WHERE nom_categorie = 'Alimentation')),
('Boulanger', (SELECT id_categorie FROM CATEGORIE WHERE nom_categorie = 'Alimentation')),
('Chocolatier', (SELECT id_categorie FROM CATEGORIE WHERE nom_categorie = 'Alimentation')),
('Traiteur', (SELECT id_categorie FROM CATEGORIE WHERE nom_categorie = 'Alimentation')),
('Chauffagiste', (SELECT id_categorie FROM CATEGORIE WHERE nom_categorie = 'Bâtiment')),
('Electricien', (SELECT id_categorie FROM CATEGORIE WHERE nom_categorie = 'Bâtiment')),
('Menuisier', (SELECT id_categorie FROM CATEGORIE WHERE nom_categorie = 'Bâtiment')),
('Plombier', (SELECT id_categorie FROM CATEGORIE WHERE nom_categorie = 'Bâtiment')),
('Bijoutier', (SELECT id_categorie FROM CATEGORIE WHERE nom_categorie = 'Fabrication')),
('Couturier', (SELECT id_categorie FROM CATEGORIE WHERE nom_categorie = 'Fabrication')),
('Ferronier', (SELECT id_categorie FROM CATEGORIE WHERE nom_categorie = 'Fabrication')),
('Coiffeur', (SELECT id_categorie FROM CATEGORIE WHERE nom_categorie = 'Services')),
('Fleuriste', (SELECT id_categorie FROM CATEGORIE WHERE nom_categorie = 'Services')),
('Toiletteur', (SELECT id_categorie FROM CATEGORIE WHERE nom_categorie = 'Services')),
('Webdesign', (SELECT id_categorie FROM CATEGORIE WHERE nom_categorie = 'Services'));

-- Insertion des artisans
INSERT INTO ARTISAN (nom_artisan, note, a_propos, email, site_web, top_mois, ville, id_specialite) VALUES
('Boucherie Dumont', 4.5, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'boucherie.dumond@gmail.com', NULL, FALSE, 'Lyon', (SELECT id_specialite FROM SPECIALITE WHERE nom_specialite = 'Boucher')),
('Au pain chaud', 4.8, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'aupainchaud@hotmail.com', NULL, TRUE, 'Montélimar', (SELECT id_specialite FROM SPECIALITE WHERE nom_specialite = 'Boulanger')),
('Chocolaterie Labbé', 4.9, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'chocolaterie-labbe@gmail.com', 'https://chocolaterie-labbe.fr', TRUE, 'Lyon', (SELECT id_specialite FROM SPECIALITE WHERE nom_specialite = 'Chocolatier')),
('Traiteur Truchon', 4.1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'contact@truchon-traiteur.fr', 'https://truchon-traiteur.fr', FALSE, 'Lyon', (SELECT id_specialite FROM SPECIALITE WHERE nom_specialite = 'Traiteur')),
('Orville Salmons', 5, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'o-salmons@live.com', NULL, TRUE, 'Evian', (SELECT id_specialite FROM SPECIALITE WHERE nom_specialite = 'Chauffagiste')),
('Mont Blanc Eléctricité', 4.5, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'contact@mont-blanc-electricite.com', 'https://mont-blanc-electricite.com', FALSE, 'Chamonix', (SELECT id_specialite FROM SPECIALITE WHERE nom_specialite = 'Electricien')),
('Boutot & fils', 4.7, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'boutot-menuiserie@gmail.com', 'https://boutot-menuiserie.com', FALSE, 'Bourg-en-bresse', (SELECT id_specialite FROM SPECIALITE WHERE nom_specialite = 'Menuisier')),
('Vallis Bellemare', 4, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'v.bellemare@gmail.com', 'https://plomberie-bellemare.com', FALSE, 'Vienne', (SELECT id_specialite FROM SPECIALITE WHERE nom_specialite = 'Plombier')),
('Claude Quinn', 4.2, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'claude.quinn@gmail.com', NULL, FALSE, 'Aix-les-bains', (SELECT id_specialite FROM SPECIALITE WHERE nom_specialite = 'Bijoutier')),
('Amitee Lécuyer', 4.5, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'a.amitee@hotmail.com', 'https://lecuyer-couture.com', FALSE, 'Annecy', (SELECT id_specialite FROM SPECIALITE WHERE nom_specialite = 'Couturier')),
('Ernest Carignan', 5, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'e-carigan@hotmail.com', NULL, FALSE, 'Le Puy-en-Velay', (SELECT id_specialite FROM SPECIALITE WHERE nom_specialite = 'Ferronier')),
('Royden Charbonneau', 3.8, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'r.charbonneau@gmail.com', NULL, FALSE, 'Saint-Priest', (SELECT id_specialite FROM SPECIALITE WHERE nom_specialite = 'Coiffeur')),
('Leala Dennis', 3.8, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'l.dennos@hotmail.fr', 'https://coiffure-leala-chambery.fr', FALSE, 'Chambéry', (SELECT id_specialite FROM SPECIALITE WHERE nom_specialite = 'Coiffeur')),
('C''est sup''hair', 4.1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'sup-hair@gmail.com', 'https://sup-hair.fr', FALSE, 'Romans-sur-Isère', (SELECT id_specialite FROM SPECIALITE WHERE nom_specialite = 'Coiffeur')),
('Le monde des fleurs', 4.6, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'contact@le-monde-des-fleurs-annonay.fr', 'https://le-monde-des-fleurs-annonay.fr', FALSE, 'Annonay', (SELECT id_specialite FROM SPECIALITE WHERE nom_specialite = 'Fleuriste')),
('Valérie Laderoute', 4.5, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'v-laredoute@gmail.com', NULL, FALSE, 'Valence', (SELECT id_specialite FROM SPECIALITE WHERE nom_specialite = 'Toiletteur')),
('CM Graphisme', 4.4, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'contact@cm-graphisme.com', 'https://cm-graphisme.com', FALSE, 'Valence', (SELECT id_specialite FROM SPECIALITE WHERE nom_specialite = 'Webdesign'));
USE stocky_db;

INSERT INTO Clients 
(name, phone, email, website, contact_person, client_type, address, city, region)
VALUES
('Jean Dupont', '5145551001', 'jean.dupont@gmail.com', NULL, 'Jean Dupont', 'particulier', '123 Rue Sherbrooke', 'Montréal', 'QC'),
('Marie Tremblay', '5145551002', 'marie.tremblay@gmail.com', NULL, 'Marie Tremblay', 'particulier', '45 Avenue Papineau', 'Montréal', 'QC'),
('Paul Martin', '4185551003', 'paul.martin@gmail.com', NULL, 'Paul Martin', 'particulier', '78 Rue Saint-Jean', 'Québec', 'QC'),
('Sophie Gagnon', '8195551004', 'sophie.gagnon@gmail.com', NULL, 'Sophie Gagnon', 'particulier', '12 Boulevard des Allumettières', 'Gatineau', 'QC'),

('Épicerie du Coin', '5145552001', 'contact@epicerieducoin.ca', 'https://epicerieducoin.ca', 'Ahmed Benali', 'epicerie', '201 Rue Ontario', 'Montréal', 'QC'),
('Marché Central', '5145552002', 'info@marchecentral.ca', 'https://marchecentral.ca', 'Luc Moreau', 'epicerie', '3500 Boulevard Crémazie', 'Montréal', 'QC'),
('Super Épicerie Laval', '4505552003', 'service@superlaval.ca', NULL, 'Nadia El Amrani', 'epicerie', '89 Rue Cartier', 'Laval', 'QC'),
('Épicerie Bio Nature', '4185552004', 'bio@bionature.ca', 'https://bionature.ca', 'Claire Bouchard', 'epicerie', '67 Rue Maguire', 'Québec', 'QC'),
('Marché Frais Plus', '8195552005', 'contact@fraisplus.ca', NULL, 'Youssef Haddad', 'epicerie', '10 Rue King Ouest', 'Sherbrooke', 'QC'),

('Restaurant Le Gourmet', '5145553001', 'reservation@legourmet.ca', 'https://legourmet.ca', 'Michel Roy', 'restaurant', '500 Rue Peel', 'Montréal', 'QC'),
('Pizza Bella', '5145553002', 'info@pizzabella.ca', 'https://pizzabella.ca', 'Antonio Russo', 'restaurant', '120 Rue Jean-Talon', 'Montréal', 'QC'),
('Bistro Chez Louise', '4185553003', 'chezlouise@gmail.com', NULL, 'Louise Pelletier', 'restaurant', '33 Rue Saint-Paul', 'Québec', 'QC'),
('Sushi Zen', '4505553004', 'contact@sushizen.ca', 'https://sushizen.ca', 'Kenji Tanaka', 'restaurant', '88 Boulevard Curé-Labelle', 'Laval', 'QC'),
('Restaurant Atlas', '5145553005', 'atlas@restaurantatlas.ca', NULL, 'Hassan El Idrissi', 'restaurant', '410 Rue Jean-Talon Est', 'Montréal', 'QC'),
('Burger Factory', '8195553006', 'info@burgerfactory.ca', 'https://burgerfactory.ca', 'Jason Miller', 'restaurant', '75 Rue Wellington', 'Gatineau', 'QC'),

('Client Test A', '5145554001', 'clienta@test.com', NULL, 'Client A', 'particulier', '1 Rue Test', 'Montréal', 'QC'),
('Client Test B', '5145554002', 'clientb@test.com', NULL, 'Client B', 'particulier', '2 Rue Test', 'Montréal', 'QC'),
('Client Test C', '5145554003', 'clientc@test.com', NULL, 'Client C', 'particulier', '3 Rue Test', 'Montréal', 'QC'),
('Client Test D', '5145554004', 'clientd@test.com', NULL, 'Client D', 'particulier', '4 Rue Test', 'Montréal', 'QC');

USE stocky_db;

-- =========================
-- INSERT 120 RAW PRODUCTS
-- =========================

-- Légumes (1-25)
INSERT INTO RawProducts (name, stock_quantity, unit_of_measure) VALUES
('Tomates', 500, 'kg'),
('Oignons', 350, 'kg'),
('Carottes', 200, 'kg'),
('Pommes de terre', 150, 'kg'),
('Poivrons rouges', 100, 'kg'),
('Poivrons verts', 120, 'kg'),
('Aubergines', 80, 'kg'),
('Courgettes', 90, 'kg'),
('Brocolis', 60, 'kg'),
('Choux-fleurs', 70, 'kg'),
('Laitue', 200, 'kg'),
('Épinards', 150, 'kg'),
('Champignons', 40, 'kg'),
('Asperges', 30, 'kg'),
('Haricots verts', 100, 'kg'),
('Petits pois', 80, 'kg'),
('Maïs', 60, 'kg'),
('Céleri', 45, 'kg'),
('Concombres', 55, 'kg'),
('Radis', 75, 'kg'),
('Navets', 65, 'kg'),
('Betteraves', 85, 'kg'),
('Artichauts', 35, 'kg'),
('Fenouil', 25, 'kg'),
('Poireaux', 110, 'kg');


-- Fruits (26-45)
INSERT INTO RawProducts (name, stock_quantity, unit_of_measure) VALUES
('Pommes', 300, 'kg'),
('Oranges', 250, 'kg'),
('Bananes', 180, 'kg'),
('Fraises', 120, 'kg'),
('Framboises', 90, 'kg'),
('Bleuets', 80, 'kg'),
('Raisins', 150, 'kg'),
('Pêches', 60, 'kg'),
('Poires', 70, 'kg'),
('Cerises', 50, 'kg'),
('Abricots', 40, 'kg'),
('Citrons', 100, 'kg'),
('Limes', 110, 'kg'),
('Mangues', 95, 'kg'),
('Ananas', 45, 'kg'),
('Kiwis', 55, 'kg'),
('Melons', 65, 'kg'),
('Pastèques', 75, 'kg'),
('Papayes', 30, 'kg'),
('Grenades', 35, 'kg');


-- Viandes (46-60)
INSERT INTO RawProducts (name, stock_quantity, unit_of_measure) VALUES
('Bœuf haché', 200, 'kg'),
('Poitrine de poulet', 150, 'kg'),
('Cuisses de poulet', 100, 'kg'),
('Côtelettes de porc', 80, 'kg'),
('Filet de porc', 120, 'kg'),
('Agneau', 60, 'kg'),
('Veau', 90, 'kg'),
('Saucisses', 70, 'kg'),
('Bacon', 50, 'kg'),
('Jambon', 40, 'kg'),
('Canard', 30, 'kg'),
('Dinde', 45, 'kg'),
('Lapin', 25, 'kg'),
('Foie de volaille', 35, 'kg'),
('Merguez', 55, 'kg');

-- Poissons et fruits de mer (61-75)
INSERT INTO RawProducts (name, stock_quantity, unit_of_measure) VALUES
('Saumon', 80, 'kg'),
('Thon', 60, 'kg'),
('Crevettes', 70, 'kg'),
('Moules', 40, 'kg'),
('Calamars', 50, 'kg'),
('Homard', 30, 'kg'),
('Crabe', 35, 'kg'),
('Morue', 45, 'kg'),
('Truite', 55, 'kg'),
('Dorade', 25, 'kg'),
('Bar', 20, 'kg'),
('Tilapia', 65, 'kg'),
('Sardines', 75, 'kg'),
('Huîtres', 15, 'kg'),
('Pétoncles', 22, 'kg');


-- Produits laitiers (76-90)
INSERT INTO RawProducts (name, stock_quantity, unit_of_measure) VALUES
('Lait entier', 500, 'L'),
('Lait écrémé', 400, 'L'),
('Crème fraîche', 200, 'L'),
('Beurre', 150, 'kg'),
('Fromage cheddar', 100, 'kg'),
('Fromage mozzarella', 80, 'kg'),
('Fromage parmesan', 60, 'kg'),
('Fromage feta', 90, 'kg'),
('Fromage brie', 70, 'kg'),
('Crème sure', 50, 'kg'),
('Yogourt nature', 120, 'L'),
('Fromage cottage', 40, 'kg'),
('Fromage ricotta', 30, 'kg'),
('Fromage gouda', 45, 'kg'),
('Fromage bleu', 55, 'kg');


-- Céréales et légumineuses (91-105)
INSERT INTO RawProducts (name, stock_quantity, unit_of_measure) VALUES
('Farine de blé', 300, 'kg'),
('Riz blanc', 200, 'kg'),
('Riz brun', 150, 'kg'),
('Pâtes spaghetti', 100, 'kg'),
('Pâtes penne', 120, 'kg'),
('Quinoa', 80, 'kg'),
('Avoine', 90, 'kg'),
('Lentilles', 70, 'kg'),
('Pois chiches', 60, 'kg'),
('Haricots noirs', 50, 'kg'),
('Haricots rouges', 45, 'kg'),
('Couscous', 55, 'kg'),
('Boulgour', 65, 'kg'),
('Orge', 40, 'kg'),
('Semoule', 35, 'kg');


-- Épices et condiments (106-120)
INSERT INTO RawProducts (name, stock_quantity, unit_of_measure) VALUES
('Sel', 20, 'kg'),
('Poivre noir', 15, 'kg'),
('Paprika', 10, 'kg'),
('Cumin', 8, 'kg'),
('Coriandre', 12, 'kg'),
('Curcuma', 6, 'kg'),
('Cannelle', 5, 'kg'),
('Gingembre', 7, 'kg'),
('Ail en poudre', 9, 'kg'),
('Oignon en poudre', 11, 'kg'),
('Huile d''olive', 50, 'L'),
('Huile végétale', 40, 'L'),
('Vinaigre balsamique', 30, 'L'),
('Sauce soya', 25, 'L'),
('Miel', 35, 'L');


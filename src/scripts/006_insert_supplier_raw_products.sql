USE stocky_db;

-- =========================
-- INSERT SUPPLIER RAW PRODUCTS RELATIONSHIPS
-- =========================

-- Supplier 1: Ferme Bio Québec (Légumes bio)
INSERT INTO SupplierRawProducts (supplier_id, raw_product_id, unit_price, unit_of_measure) VALUES
(1, 1, 3.50, 'kg'),   -- Tomates
(1, 2, 1.80, 'kg'),   -- Oignons
(1, 3, 1.50, 'kg'),   -- Carottes
(1, 4, 1.20, 'kg'),   -- Pommes de terre
(1, 11, 4.00, 'kg'),  -- Laitue
(1, 12, 5.50, 'kg'),  -- Épinards
(1, 18, 2.50, 'kg'),  -- Céleri
(1, 19, 2.00, 'kg');  -- Concombres

-- Supplier 2: Distribution Alimentaire MTL (Divers)
INSERT INTO SupplierRawProducts (supplier_id, raw_product_id, unit_price, unit_of_measure) VALUES
(2, 91, 1.20, 'kg'),  -- Farine de blé
(2, 92, 2.50, 'kg'),  -- Riz blanc
(2, 94, 2.80, 'kg'),  -- Pâtes spaghetti
(2, 95, 2.80, 'kg'),  -- Pâtes penne
(2, 106, 0.80, 'kg'), -- Sel
(2, 116, 12.00, 'L'), -- Huile d'olive
(2, 117, 4.50, 'L');  -- Huile végétale

-- Supplier 3: Les Produits du Terroir (Légumes et fruits locaux)
INSERT INTO SupplierRawProducts (supplier_id, raw_product_id, unit_price, unit_of_measure) VALUES
(3, 5, 5.00, 'kg'),   -- Poivrons rouges
(3, 6, 4.00, 'kg'),   -- Poivrons verts
(3, 7, 3.50, 'kg'),   -- Aubergines
(3, 8, 3.00, 'kg'),   -- Courgettes
(3, 26, 2.50, 'kg'),  -- Pommes
(3, 29, 8.00, 'kg'),  -- Fraises
(3, 30, 12.00, 'kg'), -- Framboises
(3, 31, 14.00, 'kg'); -- Bleuets

-- Supplier 4: Grossiste Fruits Légumes Inc
INSERT INTO SupplierRawProducts (supplier_id, raw_product_id, unit_price, unit_of_measure) VALUES
(4, 1, 3.20, 'kg'),   -- Tomates
(4, 2, 1.60, 'kg'),   -- Oignons
(4, 27, 3.00, 'kg'),  -- Oranges
(4, 28, 1.80, 'kg'),  -- Bananes
(4, 32, 4.50, 'kg'),  -- Raisins
(4, 37, 3.50, 'kg'),  -- Citrons
(4, 38, 4.00, 'kg'),  -- Limes
(4, 40, 5.50, 'kg');  -- Ananas

-- Supplier 5: Boucherie Gros Volume
INSERT INTO SupplierRawProducts (supplier_id, raw_product_id, unit_price, unit_of_measure) VALUES
(5, 46, 12.00, 'kg'), -- Bœuf haché
(5, 47, 14.00, 'kg'), -- Poitrine de poulet
(5, 48, 8.00, 'kg'),  -- Cuisses de poulet
(5, 49, 15.00, 'kg'), -- Côtelettes de porc
(5, 50, 16.00, 'kg'), -- Filet de porc
(5, 53, 8.50, 'kg'),  -- Saucisses
(5, 54, 18.00, 'kg'), -- Bacon
(5, 55, 14.00, 'kg'); -- Jambon

-- Supplier 6: Laiterie du Nord
INSERT INTO SupplierRawProducts (supplier_id, raw_product_id, unit_price, unit_of_measure) VALUES
(6, 76, 1.80, 'L'),   -- Lait entier
(6, 77, 1.60, 'L'),   -- Lait écrémé
(6, 78, 5.00, 'L'),   -- Crème fraîche
(6, 79, 8.00, 'kg'),  -- Beurre
(6, 85, 4.50, 'kg'),  -- Crème sure
(6, 86, 3.50, 'L');   -- Yogourt nature

-- Supplier 7: Épices & Saveurs Monde
INSERT INTO SupplierRawProducts (supplier_id, raw_product_id, unit_price, unit_of_measure) VALUES
(7, 107, 25.00, 'kg'), -- Poivre noir
(7, 108, 18.00, 'kg'), -- Paprika
(7, 109, 22.00, 'kg'), -- Cumin
(7, 110, 20.00, 'kg'), -- Coriandre
(7, 111, 30.00, 'kg'), -- Curcuma
(7, 112, 35.00, 'kg'), -- Cannelle
(7, 113, 28.00, 'kg'), -- Gingembre
(7, 114, 15.00, 'kg'), -- Ail en poudre
(7, 115, 14.00, 'kg'); -- Oignon en poudre

-- Supplier 8: Céréales Canada
INSERT INTO SupplierRawProducts (supplier_id, raw_product_id, unit_price, unit_of_measure) VALUES
(8, 91, 1.10, 'kg'),  -- Farine de blé
(8, 93, 3.50, 'kg'),  -- Riz brun
(8, 96, 8.00, 'kg'),  -- Quinoa
(8, 97, 3.00, 'kg'),  -- Avoine
(8, 102, 4.00, 'kg'), -- Couscous
(8, 103, 4.50, 'kg'), -- Boulgour
(8, 104, 2.80, 'kg'), -- Orge
(8, 105, 2.50, 'kg'); -- Semoule

-- Supplier 9: Poissonnerie Atlantique
INSERT INTO SupplierRawProducts (supplier_id, raw_product_id, unit_price, unit_of_measure) VALUES
(9, 61, 28.00, 'kg'), -- Saumon
(9, 62, 32.00, 'kg'), -- Thon
(9, 63, 25.00, 'kg'), -- Crevettes
(9, 64, 12.00, 'kg'), -- Moules
(9, 65, 18.00, 'kg'), -- Calamars
(9, 68, 22.00, 'kg'), -- Morue
(9, 69, 24.00, 'kg'), -- Truite
(9, 72, 16.00, 'kg'), -- Tilapia
(9, 73, 8.00, 'kg');  -- Sardines

-- Supplier 10: Huiles & Vinaigres Fin
INSERT INTO SupplierRawProducts (supplier_id, raw_product_id, unit_price, unit_of_measure) VALUES
(10, 116, 14.00, 'L'), -- Huile d'olive
(10, 117, 5.00, 'L'),  -- Huile végétale
(10, 118, 18.00, 'L'), -- Vinaigre balsamique
(10, 119, 8.00, 'L'),  -- Sauce soya
(10, 120, 12.00, 'L'); -- Miel

-- Supplier 11: Produits Surgelés Express
INSERT INTO SupplierRawProducts (supplier_id, raw_product_id, unit_price, unit_of_measure) VALUES
(11, 15, 4.00, 'kg'),  -- Haricots verts
(11, 16, 3.50, 'kg'),  -- Petits pois
(11, 17, 3.00, 'kg'),  -- Maïs
(11, 29, 7.00, 'kg'),  -- Fraises (surgelées)
(11, 30, 10.00, 'kg'), -- Framboises (surgelées)
(11, 31, 12.00, 'kg'); -- Bleuets (surgelés)

-- Supplier 12: Ferme Avicole Laurentides
INSERT INTO SupplierRawProducts (supplier_id, raw_product_id, unit_price, unit_of_measure) VALUES
(12, 47, 13.00, 'kg'), -- Poitrine de poulet
(12, 48, 7.50, 'kg'),  -- Cuisses de poulet
(12, 56, 35.00, 'kg'), -- Canard
(12, 57, 18.00, 'kg'), -- Dinde
(12, 59, 12.00, 'kg'); -- Foie de volaille

-- Supplier 13: Import Export Asia
INSERT INTO SupplierRawProducts (supplier_id, raw_product_id, unit_price, unit_of_measure) VALUES
(13, 92, 2.20, 'kg'),  -- Riz blanc
(13, 93, 3.20, 'kg'),  -- Riz brun
(13, 119, 6.00, 'L'),  -- Sauce soya
(13, 113, 25.00, 'kg'), -- Gingembre
(13, 39, 6.00, 'kg'),  -- Mangues
(13, 44, 5.00, 'kg');  -- Papayes

-- Supplier 14: Boulangerie Industrielle QC
INSERT INTO SupplierRawProducts (supplier_id, raw_product_id, unit_price, unit_of_measure) VALUES
(14, 91, 1.00, 'kg'),  -- Farine de blé
(14, 79, 7.50, 'kg'),  -- Beurre
(14, 97, 2.80, 'kg');  -- Avoine

-- Supplier 15: Conserves Méditerranée
INSERT INTO SupplierRawProducts (supplier_id, raw_product_id, unit_price, unit_of_measure) VALUES
(15, 1, 2.80, 'kg'),   -- Tomates (en conserve)
(15, 99, 3.50, 'kg'),  -- Pois chiches
(15, 100, 3.20, 'kg'), -- Haricots noirs
(15, 101, 3.20, 'kg'), -- Haricots rouges
(15, 116, 11.00, 'L'); -- Huile d'olive

-- Supplier 16: Sucre & Chocolat Pro
INSERT INTO SupplierRawProducts (supplier_id, raw_product_id, unit_price, unit_of_measure) VALUES
(16, 120, 10.00, 'L'); -- Miel

-- Supplier 17: Légumineuses du Monde
INSERT INTO SupplierRawProducts (supplier_id, raw_product_id, unit_price, unit_of_measure) VALUES
(17, 98, 4.00, 'kg'),  -- Lentilles
(17, 99, 3.00, 'kg'),  -- Pois chiches
(17, 100, 2.80, 'kg'), -- Haricots noirs
(17, 101, 2.80, 'kg'); -- Haricots rouges

-- Supplier 18: Fromages Fins Québec
INSERT INTO SupplierRawProducts (supplier_id, raw_product_id, unit_price, unit_of_measure) VALUES
(18, 80, 18.00, 'kg'), -- Fromage cheddar
(18, 81, 16.00, 'kg'), -- Fromage mozzarella
(18, 82, 35.00, 'kg'), -- Fromage parmesan
(18, 83, 22.00, 'kg'), -- Fromage feta
(18, 84, 28.00, 'kg'), -- Fromage brie
(18, 87, 12.00, 'kg'), -- Fromage cottage
(18, 88, 14.00, 'kg'), -- Fromage ricotta
(18, 89, 24.00, 'kg'), -- Fromage gouda
(18, 90, 30.00, 'kg'); -- Fromage bleu

-- Supplier 19: Viandes Premium Select
INSERT INTO SupplierRawProducts (supplier_id, raw_product_id, unit_price, unit_of_measure) VALUES
(19, 46, 14.00, 'kg'), -- Bœuf haché premium
(19, 51, 45.00, 'kg'), -- Agneau
(19, 52, 38.00, 'kg'), -- Veau
(19, 58, 28.00, 'kg'), -- Lapin
(19, 66, 85.00, 'kg'), -- Homard
(19, 67, 65.00, 'kg'); -- Crabe

-- Supplier 20: Produits Bio Certifiés
INSERT INTO SupplierRawProducts (supplier_id, raw_product_id, unit_price, unit_of_measure) VALUES
(20, 1, 4.50, 'kg'),   -- Tomates bio
(20, 2, 2.50, 'kg'),   -- Oignons bio
(20, 3, 2.20, 'kg'),   -- Carottes bio
(20, 11, 5.50, 'kg'),  -- Laitue bio
(20, 12, 7.00, 'kg'),  -- Épinards bio
(20, 26, 3.50, 'kg'),  -- Pommes bio
(20, 76, 2.50, 'L'),   -- Lait entier bio
(20, 79, 10.00, 'kg'); -- Beurre bio

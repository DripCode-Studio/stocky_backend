USE stocky_db;

-- =========================
-- INSERT RECIPE ITEMS (Ingredients for Finished Products)
-- =========================

-- Product 1: Lasagne bolognaise
INSERT INTO RecipeItems (finished_product_id, raw_product_id, quantity_required, unit_of_measure) VALUES
(1, 46, 200, 'g'),    -- Bœuf haché
(1, 1, 150, 'g'),     -- Tomates
(1, 2, 50, 'g'),      -- Oignons
(1, 81, 100, 'g'),    -- Mozzarella
(1, 82, 30, 'g'),     -- Parmesan
(1, 76, 200, 'ml'),   -- Lait
(1, 91, 50, 'g');     -- Farine

-- Product 2: Poulet rôti aux herbes
INSERT INTO RecipeItems (finished_product_id, raw_product_id, quantity_required, unit_of_measure) VALUES
(2, 47, 1500, 'g'),   -- Poitrine de poulet (poulet entier)
(2, 79, 50, 'g'),     -- Beurre
(2, 114, 10, 'g'),    -- Ail en poudre
(2, 106, 15, 'g');    -- Sel

-- Product 3: Soupe aux légumes maison
INSERT INTO RecipeItems (finished_product_id, raw_product_id, quantity_required, unit_of_measure) VALUES
(3, 3, 100, 'g'),     -- Carottes
(3, 4, 150, 'g'),     -- Pommes de terre
(3, 18, 50, 'g'),     -- Céleri
(3, 2, 50, 'g'),      -- Oignons
(3, 1, 100, 'g'),     -- Tomates
(3, 106, 10, 'g');    -- Sel

-- Product 4: Chili con carne
INSERT INTO RecipeItems (finished_product_id, raw_product_id, quantity_required, unit_of_measure) VALUES
(4, 46, 300, 'g'),    -- Bœuf haché
(4, 101, 200, 'g'),   -- Haricots rouges
(4, 1, 200, 'g'),     -- Tomates
(4, 2, 80, 'g'),      -- Oignons
(4, 5, 50, 'g'),      -- Poivrons rouges
(4, 109, 15, 'g'),    -- Cumin
(4, 108, 10, 'g');    -- Paprika

-- Product 5: Quiche lorraine
INSERT INTO RecipeItems (finished_product_id, raw_product_id, quantity_required, unit_of_measure) VALUES
(5, 91, 200, 'g'),    -- Farine
(5, 79, 100, 'g'),    -- Beurre
(5, 54, 150, 'g'),    -- Bacon
(5, 78, 200, 'ml'),   -- Crème fraîche
(5, 80, 100, 'g');    -- Cheddar

-- Product 6: Tourte au poulet
INSERT INTO RecipeItems (finished_product_id, raw_product_id, quantity_required, unit_of_measure) VALUES
(6, 47, 400, 'g'),    -- Poitrine de poulet
(6, 3, 100, 'g'),     -- Carottes
(6, 16, 80, 'g'),     -- Petits pois
(6, 91, 250, 'g'),    -- Farine
(6, 79, 120, 'g'),    -- Beurre
(6, 78, 150, 'ml');   -- Crème fraîche

-- Product 7: Ratatouille provençale
INSERT INTO RecipeItems (finished_product_id, raw_product_id, quantity_required, unit_of_measure) VALUES
(7, 7, 200, 'g'),     -- Aubergines
(7, 8, 200, 'g'),     -- Courgettes
(7, 5, 150, 'g'),     -- Poivrons rouges
(7, 6, 150, 'g'),     -- Poivrons verts
(7, 1, 300, 'g'),     -- Tomates
(7, 2, 100, 'g'),     -- Oignons
(7, 116, 50, 'ml');   -- Huile d'olive

-- Product 8: Curry de légumes
INSERT INTO RecipeItems (finished_product_id, raw_product_id, quantity_required, unit_of_measure) VALUES
(8, 4, 200, 'g'),     -- Pommes de terre
(8, 3, 150, 'g'),     -- Carottes
(8, 99, 150, 'g'),    -- Pois chiches
(8, 111, 20, 'g'),    -- Curcuma
(8, 113, 15, 'g'),    -- Gingembre
(8, 2, 80, 'g');      -- Oignons

-- Product 9: Bœuf bourguignon
INSERT INTO RecipeItems (finished_product_id, raw_product_id, quantity_required, unit_of_measure) VALUES
(9, 46, 500, 'g'),    -- Bœuf
(9, 13, 150, 'g'),    -- Champignons
(9, 3, 100, 'g'),     -- Carottes
(9, 2, 100, 'g'),     -- Oignons
(9, 54, 80, 'g');     -- Bacon

-- Product 10: Coq au vin
INSERT INTO RecipeItems (finished_product_id, raw_product_id, quantity_required, unit_of_measure) VALUES
(10, 48, 600, 'g'),   -- Cuisses de poulet
(10, 13, 200, 'g'),   -- Champignons
(10, 2, 150, 'g'),    -- Oignons
(10, 54, 100, 'g');   -- Bacon

-- Product 11: Pad thaï
INSERT INTO RecipeItems (finished_product_id, raw_product_id, quantity_required, unit_of_measure) VALUES
(11, 63, 150, 'g'),   -- Crevettes
(11, 94, 200, 'g'),   -- Pâtes (nouilles)
(11, 119, 30, 'ml'),  -- Sauce soya
(11, 37, 20, 'ml');   -- Citron

-- Product 12: Risotto aux champignons
INSERT INTO RecipeItems (finished_product_id, raw_product_id, quantity_required, unit_of_measure) VALUES
(12, 92, 200, 'g'),   -- Riz
(12, 13, 200, 'g'),   -- Champignons
(12, 79, 50, 'g'),    -- Beurre
(12, 82, 50, 'g'),    -- Parmesan
(12, 2, 50, 'g');     -- Oignons

-- Product 13: Paella valenciana
INSERT INTO RecipeItems (finished_product_id, raw_product_id, quantity_required, unit_of_measure) VALUES
(13, 92, 300, 'g'),   -- Riz
(13, 63, 200, 'g'),   -- Crevettes
(13, 47, 200, 'g'),   -- Poulet
(13, 64, 150, 'g'),   -- Moules
(13, 5, 100, 'g'),    -- Poivrons rouges
(13, 111, 5, 'g');    -- Curcuma (safran substitute)

-- Product 14: Shepherd's pie
INSERT INTO RecipeItems (finished_product_id, raw_product_id, quantity_required, unit_of_measure) VALUES
(14, 46, 400, 'g'),   -- Bœuf haché
(14, 4, 500, 'g'),    -- Pommes de terre
(14, 3, 100, 'g'),    -- Carottes
(14, 16, 80, 'g'),    -- Petits pois
(14, 2, 80, 'g'),     -- Oignons
(14, 79, 80, 'g');    -- Beurre

-- Product 15: Moussaka
INSERT INTO RecipeItems (finished_product_id, raw_product_id, quantity_required, unit_of_measure) VALUES
(15, 7, 400, 'g'),    -- Aubergines
(15, 46, 300, 'g'),   -- Bœuf haché
(15, 1, 200, 'g'),    -- Tomates
(15, 76, 300, 'ml'),  -- Lait
(15, 83, 100, 'g');   -- Feta

-- Product 16: Sauce tomate maison
INSERT INTO RecipeItems (finished_product_id, raw_product_id, quantity_required, unit_of_measure) VALUES
(16, 1, 1000, 'g'),   -- Tomates
(16, 2, 100, 'g'),    -- Oignons
(16, 114, 20, 'g'),   -- Ail
(16, 116, 50, 'ml'),  -- Huile d'olive
(16, 106, 15, 'g');   -- Sel

-- Product 17: Pesto au basilic
INSERT INTO RecipeItems (finished_product_id, raw_product_id, quantity_required, unit_of_measure) VALUES
(17, 116, 150, 'ml'), -- Huile d'olive
(17, 82, 80, 'g');    -- Parmesan

-- Product 18: Sauce béchamel
INSERT INTO RecipeItems (finished_product_id, raw_product_id, quantity_required, unit_of_measure) VALUES
(18, 76, 500, 'ml'),  -- Lait
(18, 79, 50, 'g'),    -- Beurre
(18, 91, 50, 'g'),    -- Farine
(18, 106, 5, 'g');    -- Sel

-- Product 19: Vinaigrette balsamique
INSERT INTO RecipeItems (finished_product_id, raw_product_id, quantity_required, unit_of_measure) VALUES
(19, 116, 200, 'ml'), -- Huile d'olive
(19, 118, 100, 'ml'), -- Vinaigre balsamique
(19, 120, 30, 'ml');  -- Miel

-- Product 20: Mayonnaise maison
INSERT INTO RecipeItems (finished_product_id, raw_product_id, quantity_required, unit_of_measure) VALUES
(20, 117, 300, 'ml'), -- Huile végétale
(20, 37, 20, 'ml'),   -- Citron
(20, 106, 5, 'g');    -- Sel

-- Product 21: Guacamole frais
INSERT INTO RecipeItems (finished_product_id, raw_product_id, quantity_required, unit_of_measure) VALUES
(21, 1, 50, 'g'),     -- Tomates
(21, 2, 30, 'g'),     -- Oignons
(21, 37, 15, 'ml'),   -- Citron
(21, 106, 5, 'g');    -- Sel

-- Product 22: Hummus
INSERT INTO RecipeItems (finished_product_id, raw_product_id, quantity_required, unit_of_measure) VALUES
(22, 99, 400, 'g'),   -- Pois chiches
(22, 116, 80, 'ml'),  -- Huile d'olive
(22, 37, 30, 'ml'),   -- Citron
(22, 109, 10, 'g'),   -- Cumin
(22, 114, 10, 'g');   -- Ail

-- Product 23: Tzatziki
INSERT INTO RecipeItems (finished_product_id, raw_product_id, quantity_required, unit_of_measure) VALUES
(23, 86, 300, 'ml'),  -- Yogourt
(23, 19, 150, 'g'),   -- Concombres
(23, 114, 10, 'g'),   -- Ail
(23, 116, 20, 'ml');  -- Huile d'olive

-- Product 24: Salsa mexicaine
INSERT INTO RecipeItems (finished_product_id, raw_product_id, quantity_required, unit_of_measure) VALUES
(24, 1, 400, 'g'),    -- Tomates
(24, 2, 80, 'g'),     -- Oignons
(24, 37, 30, 'ml'),   -- Citron
(24, 110, 10, 'g');   -- Coriandre

-- Product 25: Sauce BBQ fumée
INSERT INTO RecipeItems (finished_product_id, raw_product_id, quantity_required, unit_of_measure) VALUES
(25, 1, 300, 'g'),    -- Tomates
(25, 118, 50, 'ml'),  -- Vinaigre
(25, 120, 80, 'ml'),  -- Miel
(25, 108, 15, 'g');   -- Paprika

-- Product 26-35: Boulangerie (simplified - just flour and butter)
INSERT INTO RecipeItems (finished_product_id, raw_product_id, quantity_required, unit_of_measure) VALUES
(26, 91, 400, 'g'),   -- Pain: Farine
(26, 106, 10, 'g'),   -- Pain: Sel
(27, 91, 250, 'g'),   -- Baguette: Farine
(27, 106, 8, 'g'),    -- Baguette: Sel
(28, 91, 200, 'g'),   -- Croissants: Farine
(28, 79, 150, 'g'),   -- Croissants: Beurre
(29, 91, 350, 'g'),   -- Pain aux noix: Farine
(30, 91, 300, 'g'),   -- Focaccia: Farine
(30, 116, 50, 'ml'),  -- Focaccia: Huile d'olive
(31, 91, 250, 'g'),   -- Brioche: Farine
(31, 79, 100, 'g'),   -- Brioche: Beurre
(32, 91, 400, 'g'),   -- Pain complet: Farine
(32, 97, 100, 'g'),   -- Pain complet: Avoine
(33, 91, 150, 'g'),   -- Muffins: Farine
(33, 31, 80, 'g'),    -- Muffins: Bleuets
(34, 91, 180, 'g'),   -- Scones: Farine
(34, 32, 60, 'g'),    -- Scones: Raisins
(35, 91, 200, 'g'),   -- Pain bananes: Farine
(35, 28, 300, 'g');   -- Pain bananes: Bananes

-- Product 36-45: Desserts
INSERT INTO RecipeItems (finished_product_id, raw_product_id, quantity_required, unit_of_measure) VALUES
(36, 91, 200, 'g'),   -- Tarte pommes: Farine
(36, 79, 100, 'g'),   -- Tarte pommes: Beurre
(36, 26, 500, 'g'),   -- Tarte pommes: Pommes
(37, 91, 150, 'g'),   -- Gâteau chocolat: Farine
(37, 79, 150, 'g'),   -- Gâteau chocolat: Beurre
(38, 78, 300, 'ml'),  -- Crème brûlée: Crème
(39, 81, 250, 'g'),   -- Tiramisu: Mascarpone (mozzarella substitute)
(39, 78, 200, 'ml'),  -- Tiramisu: Crème
(40, 87, 500, 'g'),   -- Cheesecake: Fromage cottage
(40, 78, 200, 'ml'),  -- Cheesecake: Crème
(41, 78, 400, 'ml'),  -- Mousse chocolat: Crème
(42, 78, 300, 'ml'),  -- Panna cotta: Crème
(42, 76, 100, 'ml'),  -- Panna cotta: Lait
(43, 91, 150, 'g'),   -- Tarte citron: Farine
(43, 79, 80, 'g'),    -- Tarte citron: Beurre
(43, 37, 200, 'ml'),  -- Tarte citron: Citrons
(44, 91, 100, 'g'),   -- Brownies: Farine
(44, 79, 120, 'g'),   -- Brownies: Beurre
(45, 91, 120, 'g'),   -- Profiteroles: Farine
(45, 79, 80, 'g'),    -- Profiteroles: Beurre
(45, 78, 200, 'ml');  -- Profiteroles: Crème

-- Product 46-50: Boissons
INSERT INTO RecipeItems (finished_product_id, raw_product_id, quantity_required, unit_of_measure) VALUES
(46, 27, 500, 'g'),   -- Jus orange: Oranges
(47, 29, 150, 'g'),   -- Smoothie: Fraises
(47, 30, 100, 'g'),   -- Smoothie: Framboises
(47, 31, 100, 'g'),   -- Smoothie: Bleuets
(48, 37, 300, 'g'),   -- Limonade: Citrons
(48, 120, 50, 'ml'),  -- Limonade: Miel
(49, 33, 200, 'g'),   -- Thé pêche: Pêches
(49, 120, 30, 'ml');  -- Thé pêche: Miel

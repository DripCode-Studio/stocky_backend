CREATE DATABASE stocky_db
    DEFAULT CHARACTER SET = 'utf8mb4';

-- =========================
-- PARENT TABLES
-- =========================

CREATE TABLE IF NOT EXISTS RawProducts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    stock_quantity INT NOT NULL,
    unit_of_measure VARCHAR(5) NOT NULL
);

CREATE TABLE IF NOT EXISTS Suppliers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(12) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    website VARCHAR(255),
    contact_person VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS FinishedProducts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    stock_quantity INT NOT NULL,
    unit_of_measure VARCHAR(5) NOT NULL,
    comments TEXT
);

CREATE TABLE IF NOT EXISTS Clients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(12) NOT NULL,
    email VARCHAR(100),
    website VARCHAR(255),
    contact_person VARCHAR(255) NOT NULL,
    client_type ENUM('particulier', 'epicerie', 'restaurant') NOT NULL,
    address VARCHAR(100) NOT NULL,
    city VARCHAR(100) NOT NULL,
    region VARCHAR(100) NOT NULL
);

-- =========================
-- JUNCTION TABLES
-- =========================

CREATE TABLE IF NOT EXISTS SupplierRawProducts (
    supplier_id INT NOT NULL,
    raw_product_id INT NOT NULL,
    unit_price DECIMAL(10,2) NOT NULL,
    unit_of_measure VARCHAR(10) NOT NULL,

    PRIMARY KEY (supplier_id, raw_product_id),
    FOREIGN KEY (supplier_id) REFERENCES Suppliers(id)
        ON DELETE CASCADE,
    FOREIGN KEY (raw_product_id) REFERENCES RawProducts(id)
        ON DELETE CASCADE
);

-- =========================
-- DEPENDENT TABLES
-- =========================

CREATE TABLE IF NOT EXISTS RawProductOrders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    raw_product_id INT NOT NULL,
    supplier_id INT NOT NULL,
    quantity INT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    ordered_at DATETIME NOT NULL,
    expected_delivery_date DATE NOT NULL,
    status ENUM('commande', 'expedie', 'recu', 'rupture_de_stock') NOT NULL DEFAULT 'commande',

    FOREIGN KEY (raw_product_id) REFERENCES RawProducts(id)
        ON DELETE CASCADE,
    FOREIGN KEY (supplier_id) REFERENCES Suppliers(id)
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS RecipeItems (
    finished_product_id INT NOT NULL,
    raw_product_id INT NOT NULL,
    quantity_required INT NOT NULL,
    unit_of_measure VARCHAR(50) NOT NULL,

    PRIMARY KEY (finished_product_id, raw_product_id),
    FOREIGN KEY (finished_product_id) REFERENCES FinishedProducts(id)
        ON DELETE CASCADE,
    FOREIGN KEY (raw_product_id) REFERENCES RawProducts(id)
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS ProductionPlans (
    id INT AUTO_INCREMENT PRIMARY KEY,
    finished_product_id INT NOT NULL,
    planned_quantity INT NOT NULL,
    unit_of_measure VARCHAR(50) NOT NULL,
    planned_production_date DATETIME NOT NULL,
    planned_duration DECIMAL(10,2) NOT NULL,
    actual_duration DECIMAL(10,2),
    hourly_rate DECIMAL(10,2) NOT NULL,

    FOREIGN KEY (finished_product_id) REFERENCES FinishedProducts(id)
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS FinishedProductOrders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    finished_product_id INT NOT NULL,
    client_id INT NOT NULL,
    quantity INT NOT NULL,
    sale_price DECIMAL(10,2) NOT NULL,
    ordered_at DATETIME NOT NULL,
    expected_delivery_date DATETIME NOT NULL,
    status ENUM('commande', 'expedie', 'recu', 'rupture_de_stock') DEFAULT 'commande',

    FOREIGN KEY (finished_product_id) REFERENCES FinishedProducts(id)
        ON DELETE CASCADE,
    FOREIGN KEY (client_id) REFERENCES Clients(id)
        ON DELETE CASCADE
);

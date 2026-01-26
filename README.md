# Stocky backend

Stocky — Track. Manage. Grow.

## 📊 Entity Relationship Diagram (ERD)

The following diagram represents the database structure and relationships
between suppliers, raw products, transformed products, clients, orders,
and production planning.

```mermaid
erDiagram

    %% =========================
    %% RELATIONSHIPS
    %% =========================

    Suppliers ||--o{ SupplierRawProducts : supplies
    RawProducts ||--o{ SupplierRawProducts : sourced_from

    RawProducts ||--o{ RawProductOrders : ordered_in
    Suppliers ||--o{ RawProductOrders : receives_orders

    FinishedProducts ||--o{ FinishedProductOrders : ordered_in
    Clients ||--o{ FinishedProductOrders : places

    FinishedProducts ||--o{ ProductionPlans : planned_for

    FinishedProducts ||--o{ RecipeItems : composed_of
    RawProducts ||--o{ RecipeItems : used_in

    %% =========================
    %% TABLES
    %% =========================

    Suppliers {
        INTEGER id NOT NULL
        VARCHAR name NOT NULL
        VARCHAR phone
        VARCHAR email
        VARCHAR website
        VARCHAR contact_person
    }

    RawProducts {
        INTEGER id NOT NULL
        VARCHAR name NOT NULL
        INTEGER stock_quantity NOT NULL
        VARCHAR unit_of_measure NOT NULL
    }

    SupplierRawProducts {
        INTEGER supplier_id NOT NULL
        INTEGER raw_product_id NOT NULL
        DECIMAL unit_price NOT NULL
        VARCHAR unit_of_measure NOT NULL
    }

    RawProductOrders {
        INTEGER id NOT NULL
        INTEGER raw_product_id NOT NULL
        INTEGER supplier_id NOT NULL
        INTEGER quantity NOT NULL
        DECIMAL price NOT NULL
        DATETIME ordered_at NOT NULL
        DATE expected_delivery_date
        ENUM status NOT NULL
    }

    FinishedProducts {
        INTEGER id NOT NULL
        VARCHAR name NOT NULL
        INTEGER stock_quantity NOT NULL
        VARCHAR unit_of_measure NOT NULL
        TEXT comments
    }

    RecipeItems {
        INTEGER finished_product_id NOT NULL
        INTEGER raw_product_id NOT NULL
        INTEGER quantity_required NOT NULL
        VARCHAR unit_of_measure NOT NULL
    }

    Clients {
        INTEGER id NOT NULL
        VARCHAR name NOT NULL
        VARCHAR phone
        VARCHAR email
        VARCHAR website
        VARCHAR contact_person
        ENUM client_type NOT NULL
        VARCHAR address
        VARCHAR city
        VARCHAR region
    }

    FinishedProductOrders {
        INTEGER id NOT NULL
        INTEGER finished_product_id NOT NULL
        INTEGER client_id NOT NULL
        INTEGER quantity NOT NULL
        DECIMAL sale_price NOT NULL
        DATETIME ordered_at NOT NULL
        DATE expected_delivery_date
        ENUM status NOT NULL
    }

    ProductionPlans {
        INTEGER id NOT NULL
        INTEGER finished_product_id NOT NULL
        INTEGER planned_quantity NOT NULL
        VARCHAR unit_of_measure NOT NULL
        DATETIME planned_production_date NOT NULL
        DECIMAL planned_duration
        DECIMAL actual_duration
        DECIMAL hourly_rate
    }


```

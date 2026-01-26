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
        INTEGER id
        VARCHAR name
        VARCHAR phone
        VARCHAR email
        VARCHAR website
        VARCHAR contact_person
    }

    RawProducts {
        INTEGER id
        VARCHAR name
        INTEGER stock_quantity
        VARCHAR unit_of_measure
    }

    SupplierRawProducts {
        INTEGER supplier_id
        INTEGER raw_product_id
        DECIMAL unit_price
        VARCHAR unit_of_measure
    }

    RawProductOrders {
        INTEGER id
        INTEGER raw_product_id
        INTEGER supplier_id
        INTEGER quantity
        DECIMAL price N
        DATETIME ordered_at
        DATE expected_delivery_date
        ENUM status
    }

    FinishedProducts {
        INTEGER id
        VARCHAR name
        INTEGER stock_quantity
        VARCHAR unit_of_measure
        TEXT comments
    }

    RecipeItems {
        INTEGER finished_product_id
        INTEGER raw_product_id
        INTEGER quantity_required
        VARCHAR unit_of_measure
    }

    Clients {
        INTEGER id
        VARCHAR name
        VARCHAR phone
        VARCHAR email
        VARCHAR website
        VARCHAR contact_person
        ENUM client_type
        VARCHAR address
        VARCHAR city
        VARCHAR region
    }

    FinishedProductOrders {
        INTEGER id
        INTEGER finished_product_id
        INTEGER client_id
        INTEGER quantity
        DECIMAL sale_price
        DATETIME ordered_at
        DATE expected_delivery_date
        ENUM status
    }

    ProductionPlans {
        INTEGER id
        INTEGER finished_product_id
        INTEGER planned_quantity
        VARCHAR unit_of_measure
        DATETIME planned_production_date
        DECIMAL planned_duration
        DECIMAL actual_duration
        DECIMAL hourly_rate
    }


```

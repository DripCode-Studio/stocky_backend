# Stocky backend

Stocky — Track. Manage. Grow.

## 📊 Entity Relationship Diagram (ERD)

The following diagram represents the database structure and relationships
between suppliers, raw products, transformed products, clients, orders,
and production planning.

```mermaid
erDiagram
    Fournisseurs ||--o{ ProduitBruts : fournit
    ProduitBruts ||--o{ CommandesProduitBrut : concerne
    CommandesProduitBrut }o--|| Fournisseurs : passe_a

    ProduitTransform ||--o{ CommandesProduitTransformer : concerne
    Clients ||--o{ CommandesProduitTransformer : passe

    ProduitBruts ||--o{ PlanProduction : utilise

    ProduitTransform ||--|| RecettesProduit : a

    ProduitBruts {
        INTEGER id
        INTEGER stock_quantity
        VARCHAR unite_of_measure
        FLOAT unite_price
        INTEGER id_fournisseur
    }

    Fournisseurs {
        INTEGER id
        VARCHAR name
        VARCHAR tel
        VARCHAR email
        VARCHAR web_site
        VARCHAR person_to_contact
    }

    CommandesProduitBrut {
        INTEGER id
        INTEGER id_produit
        INTEGER id_fournisseur
        DECIMAL prix
        DATETIME created_at
        DATE receive_at
        ENUM status
        INTEGER quantite
    }

    ProduitTransform {
        INTEGER id
        VARCHAR nom
        INTEGER stock_quantity
        VARCHAR unite_of_measure
        TEXT commentaires
    }

    RecettesProduit {
        INTEGER id
        JSON composition
        INTEGER quantite_produit_trans
    }

    Clients {
        INTEGER id
        VARCHAR name
        VARCHAR tel
        VARCHAR email
        VARCHAR web_site
        VARCHAR person_to_contact
        ENUM client_type
        VARCHAR adress
        VARCHAR ville
        VARCHAR region
    }

    CommandesProduitTransformer {
        INTEGER id
        INTEGER id_produit
        INTEGER id_client
        INTEGER quantite
        DECIMAL prix
        DATETIME created_at
        DATETIME delivered_at
        ENUM status
    }

    PlanProduction {
        INTEGER id
        INTEGER id_produit
        INTEGER quantite_plan
        DATETIME date_plan
        DECIMAL plan_duration
        DECIMAL real_duration
        DECIMAL hourly_rate
    }
```

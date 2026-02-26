# Stocky API Testing Guide

Complete list of all API endpoints with full URLs and test data.

**Base URL:** `http://localhost:3000/api/v1`

---

## Root Endpoint

### Get API Info

```
GET http://localhost:3000/api/v1/
```

---

## Raw Products

### Get All Raw Products

```
GET http://localhost:3000/api/v1/raw-products
```

### Get Raw Product by ID

```
GET http://localhost:3000/api/v1/raw-products/1
```

### Create Raw Product

```
POST http://localhost:3000/api/v1/raw-products
Content-Type: application/json

{
  "name": "Flour",
  "stock_quantity": 500,
  "unit_of_measure": "kg"
}
```

### Update Raw Product

```
PUT http://localhost:3000/api/v1/raw-products/1
Content-Type: application/json

{
  "name": "Wheat Flour",
  "stock_quantity": 600,
  "unit_of_measure": "kg"
}
```

### Delete Raw Product

```
DELETE http://localhost:3000/api/v1/raw-products/1
```

---

## Suppliers

### Get All Suppliers

```
GET http://localhost:3000/api/v1/suppliers
```

### Get Supplier by ID

```
GET http://localhost:3000/api/v1/suppliers/1
```

### Get Supplier's Raw Products

```
GET http://localhost:3000/api/v1/suppliers/1/raw-products
```

### Create Supplier

```
POST http://localhost:3000/api/v1/suppliers
Content-Type: application/json

{
  "name": "ABC Supplies Co.",
  "phone": "+221771234567",
  "email": "contact@abcsupplies.com",
  "website": "https://abcsupplies.com",
  "contact_person": "Amadou Diallo"
}
```

### Update Supplier

```
PUT http://localhost:3000/api/v1/suppliers/1
Content-Type: application/json

{
  "name": "ABC Supplies International",
  "phone": "+221771234568",
  "email": "info@abcsupplies.com",
  "website": "https://abcsupplies.com",
  "contact_person": "Amadou Diallo"
}
```

### Delete Supplier

```
DELETE http://localhost:3000/api/v1/suppliers/1
```

---

## Finished Products

### Get All Finished Products

```
GET http://localhost:3000/api/v1/finished-products
```

### Get Finished Product by ID

```
GET http://localhost:3000/api/v1/finished-products/1
```

### Get Finished Product Recipe

```
GET http://localhost:3000/api/v1/finished-products/1/recipe
```

### Create Finished Product

```
POST http://localhost:3000/api/v1/finished-products
Content-Type: application/json

{
  "name": "Chocolate Cake",
  "stock_quantity": 25,
  "unit_of_measure": "unit",
  "comments": "Premium chocolate cake, serves 8"
}
```

### Update Finished Product

```
PUT http://localhost:3000/api/v1/finished-products/1
Content-Type: application/json

{
  "name": "Dark Chocolate Cake",
  "stock_quantity": 30,
  "unit_of_measure": "unit",
  "comments": "Premium dark chocolate cake, serves 10"
}
```

### Delete Finished Product

```
DELETE http://localhost:3000/api/v1/finished-products/1
```

---

## Clients

### Get All Clients

```
GET http://localhost:3000/api/v1/clients
```

### Get Client by ID

```
GET http://localhost:3000/api/v1/clients/1
```

### Get Client's Orders

```
GET http://localhost:3000/api/v1/clients/1/orders
```

### Create Client

```
POST http://localhost:3000/api/v1/clients
Content-Type: application/json

{
  "name": "Restaurant Le Soleil",
  "phone": "+221779876543",
  "email": "contact@lesoleil.sn",
  "website": "https://lesoleil.sn",
  "contact_person": "Fatou Ndiaye",
  "client_type": "restaurant",
  "address": "123 Avenue Cheikh Anta Diop",
  "city": "Dakar",
  "region": "Dakar"
}
```

### Create Client (Particulier)

```
POST http://localhost:3000/api/v1/clients
Content-Type: application/json

{
  "name": "Moussa Sow",
  "phone": "+221771112233",
  "email": "moussa.sow@email.com",
  "contact_person": "Moussa Sow",
  "client_type": "particulier",
  "address": "456 Rue Faidherbe",
  "city": "Saint-Louis",
  "region": "Saint-Louis"
}
```

### Create Client (Epicerie)

```
POST http://localhost:3000/api/v1/clients
Content-Type: application/json

{
  "name": "Epicerie Chez Mamadou",
  "phone": "+221774445566",
  "email": "mamadou.epicerie@email.com",
  "contact_person": "Mamadou Ba",
  "client_type": "epicerie",
  "address": "789 Marché Sandaga",
  "city": "Dakar",
  "region": "Dakar"
}
```

### Update Client

```
PUT http://localhost:3000/api/v1/clients/1
Content-Type: application/json

{
  "name": "Restaurant Le Grand Soleil",
  "phone": "+221779876544",
  "email": "info@legrandsoleil.sn",
  "website": "https://legrandsoleil.sn",
  "contact_person": "Fatou Ndiaye",
  "client_type": "restaurant",
  "address": "123 Avenue Cheikh Anta Diop",
  "city": "Dakar",
  "region": "Dakar"
}
```

### Delete Client

```
DELETE http://localhost:3000/api/v1/clients/1
```

---

## Supplier Raw Products

### Get All Supplier Raw Products

```
GET http://localhost:3000/api/v1/supplier-raw-products
```

### Get Supplier Raw Product by IDs

```
GET http://localhost:3000/api/v1/supplier-raw-products/1/1
```

_Parameters: supplierId/rawProductId_

### Create Supplier Raw Product

```
POST http://localhost:3000/api/v1/supplier-raw-products
Content-Type: application/json

{
  "supplier_id": 1,
  "raw_product_id": 1,
  "unit_price": 2500.00,
  "unit_of_measure": "kg"
}
```

### Update Supplier Raw Product

```
PUT http://localhost:3000/api/v1/supplier-raw-products/1/1
Content-Type: application/json

{
  "unit_price": 2750.00,
  "unit_of_measure": "kg"
}
```

### Delete Supplier Raw Product

```
DELETE http://localhost:3000/api/v1/supplier-raw-products/1/1
```

---

## Raw Product Orders

### Get All Raw Product Orders

```
GET http://localhost:3000/api/v1/raw-product-orders
```

### Get Raw Product Order by ID

```
GET http://localhost:3000/api/v1/raw-product-orders/1
```

### Create Raw Product Order

```
POST http://localhost:3000/api/v1/raw-product-orders
Content-Type: application/json

{
  "raw_product_id": 1,
  "supplier_id": 1,
  "quantity": 100,
  "price": 250000.00,
  "ordered_at": "2026-02-26T10:00:00Z",
  "expected_delivery_date": "2026-03-05",
  "status": "commande"
}
```

### Update Raw Product Order

```
PUT http://localhost:3000/api/v1/raw-product-orders/1
Content-Type: application/json

{
  "raw_product_id": 1,
  "supplier_id": 1,
  "quantity": 150,
  "price": 375000.00,
  "ordered_at": "2026-02-26T10:00:00Z",
  "expected_delivery_date": "2026-03-07",
  "status": "expedie"
}
```

### Update Raw Product Order Status

```
PATCH http://localhost:3000/api/v1/raw-product-orders/1/status
Content-Type: application/json

{
  "status": "recu"
}
```

**Available Status Values:**

- `commande` - Order placed
- `expedie` - Shipped
- `recu` - Received
- `rupture_de_stock` - Out of stock

### Delete Raw Product Order

```
DELETE http://localhost:3000/api/v1/raw-product-orders/1
```

---

## Recipe Items

### Get All Recipe Items

```
GET http://localhost:3000/api/v1/recipe-items
```

### Get Recipe Items by Finished Product

```
GET http://localhost:3000/api/v1/recipe-items/product/1
```

### Get Recipe Item by IDs

```
GET http://localhost:3000/api/v1/recipe-items/1/1
```

_Parameters: finishedProductId/rawProductId_

### Create Recipe Item

```
POST http://localhost:3000/api/v1/recipe-items
Content-Type: application/json

{
  "finished_product_id": 1,
  "raw_product_id": 1,
  "quantity_required": 2,
  "unit_of_measure": "kg"
}
```

### Update Recipe Item

```
PUT http://localhost:3000/api/v1/recipe-items/1/1
Content-Type: application/json

{
  "quantity_required": 3,
  "unit_of_measure": "kg"
}
```

### Delete Recipe Item

```
DELETE http://localhost:3000/api/v1/recipe-items/1/1
```

---

## Production Plans

### Get All Production Plans

```
GET http://localhost:3000/api/v1/production-plans
```

### Get Production Plan by ID

```
GET http://localhost:3000/api/v1/production-plans/1
```

### Create Production Plan

```
POST http://localhost:3000/api/v1/production-plans
Content-Type: application/json

{
  "finished_product_id": 1,
  "planned_quantity": 50,
  "unit_of_measure": "unit",
  "planned_production_date": "2026-03-01T08:00:00Z",
  "planned_duration": 8,
  "actual_duration": null,
  "hourly_rate": 5000.00
}
```

### Update Production Plan

```
PUT http://localhost:3000/api/v1/production-plans/1
Content-Type: application/json

{
  "finished_product_id": 1,
  "planned_quantity": 75,
  "unit_of_measure": "unit",
  "planned_production_date": "2026-03-01T08:00:00Z",
  "planned_duration": 10,
  "actual_duration": 9.5,
  "hourly_rate": 5000.00
}
```

### Delete Production Plan

```
DELETE http://localhost:3000/api/v1/production-plans/1
```

---

## Finished Product Orders

### Get All Finished Product Orders

```
GET http://localhost:3000/api/v1/finished-product-orders
```

### Get Finished Product Order by ID

```
GET http://localhost:3000/api/v1/finished-product-orders/1
```

### Create Finished Product Order

```
POST http://localhost:3000/api/v1/finished-product-orders
Content-Type: application/json

{
  "finished_product_id": 1,
  "client_id": 1,
  "quantity": 10,
  "sale_price": 150000.00,
  "ordered_at": "2026-02-26T14:00:00Z",
  "expected_delivery_date": "2026-03-01T10:00:00Z",
  "status": "commande"
}
```

### Update Finished Product Order

```
PUT http://localhost:3000/api/v1/finished-product-orders/1
Content-Type: application/json

{
  "finished_product_id": 1,
  "client_id": 1,
  "quantity": 15,
  "sale_price": 225000.00,
  "ordered_at": "2026-02-26T14:00:00Z",
  "expected_delivery_date": "2026-03-02T10:00:00Z",
  "status": "expedie"
}
```

### Update Finished Product Order Status

```
PATCH http://localhost:3000/api/v1/finished-product-orders/1/status
Content-Type: application/json

{
  "status": "recu"
}
```

**Available Status Values:**

- `commande` - Order placed
- `expedie` - Shipped
- `recu` - Received
- `rupture_de_stock` - Out of stock

### Delete Finished Product Order

```
DELETE http://localhost:3000/api/v1/finished-product-orders/1
```

---

## Testing with cURL

### Example: Create a Raw Product

```bash
curl -X POST http://localhost:3000/api/v1/raw-products \
  -H "Content-Type: application/json" \
  -d '{"name": "Sugar", "stock_quantity": 200, "unit_of_measure": "kg"}'
```

### Example: Get All Suppliers

```bash
curl http://localhost:3000/api/v1/suppliers
```

### Example: Update Order Status

```bash
curl -X PATCH http://localhost:3000/api/v1/raw-product-orders/1/status \
  -H "Content-Type: application/json" \
  -d '{"status": "expedie"}'
```

---

## Response Format

### Success Response

```json
{
  "success": true,
  "message": "Operation completed successfully",
  "data": { ... }
}
```

### Error Response

```json
{
  "success": false,
  "message": "Error description",
  "statusCode": 400
}
```

---

## HTTP Status Codes

| Code | Description           |
| ---- | --------------------- |
| 200  | Success               |
| 201  | Created               |
| 400  | Bad Request           |
| 404  | Not Found             |
| 500  | Internal Server Error |

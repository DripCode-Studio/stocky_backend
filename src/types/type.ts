export interface RawProduct {
  id?: number;
  name: string;
  stock_quantity: number;
  unit_of_measure: string;
}

export interface Supplier {
  id?: number;
  name: string;
  phone: string;
  email: string;
  website?: string;
  contact_person: string;
}

export interface FinishedProduct {
  id?: number;
  name: string;
  stocke_quantity: number;
  unit_of_measure: string;
  comments?: string;
}

export interface Client {
  id?: number;
  name: string;
  phone: string;
  email?: string;
  website?: string;
  contact_person: string;
  client_type: "particulier" | "epicerie" | "restaurant";
  address: string;
  city: string;
  region: string;
}

export interface SupplierRawProduct {
  supplier_id: number;
  raw_product_id: number;
  unit_price: number;
  unit_of_measure: string;
}

export interface RawProductOrder {
  id?: number;
  raw_product_id: number;
  supplier_id: number;
  quantity: number;
  price: number;
  order_at: Date;
  expected_delivery_date: Date;
  status: "commande" | "expedie" | "recu" | "rupture_de_stock";
}

export interface RecipeItem {
  finished_product_id: number;
  raw_product_id: number;
  quantity_required: number;
  unit_of_measure: string;
}

export interface ProductionPlan {
  id?: number;
  finished_product_id: number;
  planned_quantity: number;
  unit_of_measure: string;
  planned_production_date: Date;
  planned_duration: number; // in hours
  actual_duration?: number; // in hours
  hourly_rate: number;
}

export interface FinishedProductOrder {
  id?: number;
  finished_product_id: number;
  client_id: number;
  quantity: number;
  sale_price: number;
  order_at: Date;
  expected_delivery_date: Date;
  status: "commande" | "expedie" | "recu" | "rupture_de_stock";
}

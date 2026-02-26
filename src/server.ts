import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { errorHandler } from "./middlewares/error.middleware";
import type { Request, Response } from "express";
import RawProductsRoutes from "./routes/v1/raw-products.routes";
import SuppliersRoutes from "./routes/v1/suppliers.routes";
import FinishedProductsRoutes from "./routes/v1/finished-products.routes";
import ClientsRoutes from "./routes/v1/client.routes";
import SupplierRawProductsRoutes from "./routes/v1/supplier-raw-products.routes";
import RawProductOrdersRoutes from "./routes/v1/raw-product-orders.routes";
import RecipeItemsRoutes from "./routes/v1/recipe-items.routes";
import ProductionPlansRoutes from "./routes/v1/production-plan.routes";
import FinishedProductOrdersRoutes from "./routes/v1/finished-product-orders.routes";

dotenv.config();

const PORT = process.env["PORT"];

const app = express();
const corsOption = {
  // origin: process.env["FRONTEND_URL"],
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"], // Specify allowed HTTP methods
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  optionsSuccessStatus: 200, // Some legacy browsers choke on 204
};

// middlewares
app.use(express.json());
app.use(cors(corsOption));
app.options(/.*/, cors(corsOption));

// API Routes
app.use("/api/v1/raw-products", RawProductsRoutes);
app.use("/api/v1/suppliers", SuppliersRoutes);
app.use("/api/v1/finished-products", FinishedProductsRoutes);
app.use("/api/v1/clients", ClientsRoutes);
app.use("/api/v1/supplier-raw-products", SupplierRawProductsRoutes);
app.use("/api/v1/raw-product-orders", RawProductOrdersRoutes);
app.use("/api/v1/recipe-items", RecipeItemsRoutes);
app.use("/api/v1/production-plans", ProductionPlansRoutes);
app.use("/api/v1/finished-product-orders", FinishedProductOrdersRoutes);

// Root endpoint
app.get("/api/v1/", (_req: Request, res: Response) => {
  res.json({
    message: "Welcome to Stocky REST API v1.0",
    description: "An inventory management REST API for any stock client.",
    author: {
      name: "DripCode Studio",
      link: "https://dripcodestudio.com/",
    },
    endpoints: {
      rawProducts: "/api/v1/raw-products",
      suppliers: "/api/v1/suppliers",
      finishedProducts: "/api/v1/finished-products",
      clients: "/api/v1/clients",
      supplierRawProducts: "/api/v1/supplier-raw-products",
      rawProductOrders: "/api/v1/raw-product-orders",
      recipeItems: "/api/v1/recipe-items",
      productionPlans: "/api/v1/production-plans",
      finishedProductOrders: "/api/v1/finished-product-orders",
    },
  });
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🚀 Stocky API running on port ${PORT}`);
  console.log(`📝 API Docs: http://localhost:${PORT}/api/v1/`);
});

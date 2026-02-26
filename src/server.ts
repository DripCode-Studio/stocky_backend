import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { errorHandler } from "./middlewares/error.middleware";
import type { Request, Response } from "express";
import RawProductsRoutes from "./routes/v1/raw-products.routes";

dotenv.config();

const PORT = process.env["PORT"];

const app = express();
const corsOption = {
  // origin: process.env["FRONTEND_URL"],
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed HTTP methods
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  optionsSuccessStatus: 200, // Some legacy browsers choke on 204
};

// middleswares
app.use(express.json());
app.use(cors(corsOption));
app.options(/.*/, cors(corsOption));

// API Routes
app.use("/api/v1/raw-products", RawProductsRoutes);
app.use("/api/v1/suppliers", suppliersRoutes);
app.use("/api/v1/finished-products", finishedProductsRoutes);
app.use("/api/v1/clients", clientsRoutes);
app.use("/api/v1/supplier-raw-products", supplierRawProductsRoutes);
app.use("/api/v1/raw-product-orders", rawProductOrdersRoutes);
app.use("/api/v1/recipe-items", recipeItemsRoutes);
app.use("/api/v1/production-plans", productionPlansRoutes);
app.use("/api/v1/finished-product-orders", finishedProductOrdersRoutes);

// Root endpoint
app.get("/api/v1/", (req: Request, res: Response) => {
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

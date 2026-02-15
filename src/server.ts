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
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed HTTP methods
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  optionsSuccessStatus: 200, // Some legacy browsers choke on 204
};

// middleswares
app.use(express.json());
app.use(cors(corsOption));
app.options(/.*/, cors(corsOption));

// routes
app.use("/api/v1/raw-products", RawProductsRoutes);

app.get("/api/v1/", (req: Request, res: Response) => {
  res.json({
    message: "Welcome to Stocky REST API v1.0",
    description: "An inventory management rest api for any stock client.",
    author: {
      name: "DripCode Studio",
      link: "https://dripcodestudio.com/",
    },
  });
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

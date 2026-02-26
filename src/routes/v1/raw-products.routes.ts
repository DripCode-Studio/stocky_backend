import express from "express";
import asyncHandler from "../../helpers/asyncHandler";
import { getAllRawProducts } from "../../controllers/v1/raw-products.controller";

const RawProductsRoutes = express.Router();

rawProductsRoutes.get("/", asyncHandler(rawProductsController.getAll));
rawProductsRoutes.get("/:id", asyncHandler(rawProductsController.getById));
rawProductsRoutes.post("/", asyncHandler(rawProductsController.create));
rawProductsRoutes.put("/:id", asyncHandler(rawProductsController.update));
rawProductsRoutes.delete("/:id", asyncHandler(rawProductsController.delete));

export default RawProductsRoutes;

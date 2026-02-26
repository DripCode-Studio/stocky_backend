import express from "express";
import asyncHandler from "../../helpers/asyncHandler";
import { rawProductsController } from "../../controllers/v1/raw-products.controller";

const RawProductsRoutes = express.Router();

RawProductsRoutes.get("/", asyncHandler(rawProductsController.getAll));
RawProductsRoutes.get("/:id", asyncHandler(rawProductsController.getById));
RawProductsRoutes.post("/", asyncHandler(rawProductsController.create));
RawProductsRoutes.put("/:id", asyncHandler(rawProductsController.update));
RawProductsRoutes.delete("/:id", asyncHandler(rawProductsController.del));

export default RawProductsRoutes;

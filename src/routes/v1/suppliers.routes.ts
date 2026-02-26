import express from "express";
import asyncHandler from "../../helpers/asyncHandler";
import { suppliersController } from "../../controllers/v1/suppliers.controller";

const SuppliersRoutes = express.Router();

SuppliersRoutes.get("/", asyncHandler(suppliersController.getAll));
SuppliersRoutes.get("/:id", asyncHandler(suppliersController.getById));
SuppliersRoutes.get(
  "/:id/raw-products",
  asyncHandler(suppliersController.getRawProducts),
);
SuppliersRoutes.post("/", asyncHandler(suppliersController.create));
SuppliersRoutes.put("/:id", asyncHandler(suppliersController.update));
SuppliersRoutes.delete("/:id", asyncHandler(suppliersController.del));

export default SuppliersRoutes;

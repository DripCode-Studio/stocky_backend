import express from "express";
import asyncHandler from "../../helpers/asyncHandler";
import { supplierRawProductsController } from "../../controllers/v1/supplier-raw-product.controller";

const SupplierRawProductsRoutes = express.Router();

SupplierRawProductsRoutes.get(
  "/",
  asyncHandler(supplierRawProductsController.getAll),
);
SupplierRawProductsRoutes.get(
  "/:supplierId/:rawProductId",
  asyncHandler(supplierRawProductsController.getByIds),
);
SupplierRawProductsRoutes.post(
  "/",
  asyncHandler(supplierRawProductsController.create),
);
SupplierRawProductsRoutes.put(
  "/:supplierId/:rawProductId",
  asyncHandler(supplierRawProductsController.update),
);
SupplierRawProductsRoutes.delete(
  "/:supplierId/:rawProductId",
  asyncHandler(supplierRawProductsController.del),
);

export default SupplierRawProductsRoutes;

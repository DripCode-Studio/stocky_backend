import express from "express";
import asyncHandler from "../../helpers/asyncHandler";
import { productionPlanController } from "../../controllers/v1/production-plan.controller";

const ProductionPlansRoutes = express.Router();

ProductionPlansRoutes.get("/", asyncHandler(productionPlanController.getAll));
ProductionPlansRoutes.get(
  "/:id",
  asyncHandler(productionPlanController.getById),
);
ProductionPlansRoutes.post("/", asyncHandler(productionPlanController.create));
ProductionPlansRoutes.put(
  "/:id",
  asyncHandler(productionPlanController.update),
);
ProductionPlansRoutes.delete(
  "/:id",
  asyncHandler(productionPlanController.del),
);

export default ProductionPlansRoutes;

import express from "express";
import asyncHandler from "../../helpers/asyncHandler";
import { finishedProductsController } from "../../controllers/v1/finished-product.controller";

const FinishedProductsRoutes = express.Router();

FinishedProductsRoutes.get(
  "/",
  asyncHandler(finishedProductsController.getAll),
);
FinishedProductsRoutes.get(
  "/:id",
  asyncHandler(finishedProductsController.getById),
);
FinishedProductsRoutes.get(
  "/:id/recipe",
  asyncHandler(finishedProductsController.getRecipe),
);
FinishedProductsRoutes.post(
  "/",
  asyncHandler(finishedProductsController.create),
);
FinishedProductsRoutes.put(
  "/:id",
  asyncHandler(finishedProductsController.update),
);
FinishedProductsRoutes.delete(
  "/:id",
  asyncHandler(finishedProductsController.del),
);

export default FinishedProductsRoutes;

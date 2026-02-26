import express from "express";
import asyncHandler from "../../helpers/asyncHandler";
import { recipeItemsController } from "../../controllers/v1/recipe-item.controller";

const RecipeItemsRoutes = express.Router();

RecipeItemsRoutes.get("/", asyncHandler(recipeItemsController.getAll));
RecipeItemsRoutes.get(
  "/product/:finishedProductId",
  asyncHandler(recipeItemsController.getByFinishedProduct),
);
RecipeItemsRoutes.get(
  "/:finishedProductId/:rawProductId",
  asyncHandler(recipeItemsController.getByIds),
);
RecipeItemsRoutes.post("/", asyncHandler(recipeItemsController.create));
RecipeItemsRoutes.put(
  "/:finishedProductId/:rawProductId",
  asyncHandler(recipeItemsController.update),
);
RecipeItemsRoutes.delete(
  "/:finishedProductId/:rawProductId",
  asyncHandler(recipeItemsController.del),
);

export default RecipeItemsRoutes;

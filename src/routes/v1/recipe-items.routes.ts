const recipeItemsRoutes = express.Router();
recipeItemsRoutes.get("/", asyncHandler(recipeItemsController.getAll));
recipeItemsRoutes.get(
  "/product/:finishedProductId",
  asyncHandler(recipeItemsController.getByFinishedProduct),
);
recipeItemsRoutes.get(
  "/:finishedProductId/:rawProductId",
  asyncHandler(recipeItemsController.getByIds),
);
recipeItemsRoutes.post("/", asyncHandler(recipeItemsController.create));
recipeItemsRoutes.put(
  "/:finishedProductId/:rawProductId",
  asyncHandler(recipeItemsController.update),
);
recipeItemsRoutes.delete(
  "/:finishedProductId/:rawProductId",
  asyncHandler(recipeItemsController.delete),
);

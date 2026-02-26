const productionPlansRoutes = express.Router();
productionPlansRoutes.get("/", asyncHandler(productionPlansController.getAll));
productionPlansRoutes.get(
  "/:id",
  asyncHandler(productionPlansController.getById),
);
productionPlansRoutes.post("/", asyncHandler(productionPlansController.create));
productionPlansRoutes.put(
  "/:id",
  asyncHandler(productionPlansController.update),
);
productionPlansRoutes.delete(
  "/:id",
  asyncHandler(productionPlansController.delete),
);

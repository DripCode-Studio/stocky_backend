const suppliersRoutes = express.Router();
suppliersRoutes.get("/", asyncHandler(suppliersController.getAll));
suppliersRoutes.get("/:id", asyncHandler(suppliersController.getById));
suppliersRoutes.get(
  "/:id/raw-products",
  asyncHandler(suppliersController.getRawProducts),
);
suppliersRoutes.post("/", asyncHandler(suppliersController.create));
suppliersRoutes.put("/:id", asyncHandler(suppliersController.update));
suppliersRoutes.delete("/:id", asyncHandler(suppliersController.delete));

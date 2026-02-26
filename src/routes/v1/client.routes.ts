const clientsRoutes = express.Router();
clientsRoutes.get("/", asyncHandler(clientsController.getAll));
clientsRoutes.get("/:id", asyncHandler(clientsController.getById));
clientsRoutes.get("/:id/orders", asyncHandler(clientsController.getOrders));
clientsRoutes.post("/", asyncHandler(clientsController.create));
clientsRoutes.put("/:id", asyncHandler(clientsController.update));
clientsRoutes.delete("/:id", asyncHandler(clientsController.delete));

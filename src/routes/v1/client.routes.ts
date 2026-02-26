import express from "express";
import asyncHandler from "../../helpers/asyncHandler";
import { clientsController } from "../../controllers/v1/clients.controller";

const ClientsRoutes = express.Router();

ClientsRoutes.get("/", asyncHandler(clientsController.getAll));
ClientsRoutes.get("/:id", asyncHandler(clientsController.getById));
ClientsRoutes.get("/:id/orders", asyncHandler(clientsController.getOrders));
ClientsRoutes.post("/", asyncHandler(clientsController.create));
ClientsRoutes.put("/:id", asyncHandler(clientsController.update));
ClientsRoutes.delete("/:id", asyncHandler(clientsController.del));

export default ClientsRoutes;

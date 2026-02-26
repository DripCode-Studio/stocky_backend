import express from "express";
import asyncHandler from "../../helpers/asyncHandler";
import { finishedProductOrdersController } from "../../controllers/v1/finished-product-order.controller";

const FinishedProductOrdersRoutes = express.Router();

FinishedProductOrdersRoutes.get(
  "/",
  asyncHandler(finishedProductOrdersController.getAll),
);
FinishedProductOrdersRoutes.get(
  "/:id",
  asyncHandler(finishedProductOrdersController.getById),
);
FinishedProductOrdersRoutes.post(
  "/",
  asyncHandler(finishedProductOrdersController.create),
);
FinishedProductOrdersRoutes.put(
  "/:id",
  asyncHandler(finishedProductOrdersController.update),
);
FinishedProductOrdersRoutes.patch(
  "/:id/status",
  asyncHandler(finishedProductOrdersController.updateStatus),
);
FinishedProductOrdersRoutes.delete(
  "/:id",
  asyncHandler(finishedProductOrdersController.del),
);

export default FinishedProductOrdersRoutes;

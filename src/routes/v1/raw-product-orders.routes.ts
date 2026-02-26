import express from "express";
import asyncHandler from "../../helpers/asyncHandler";
import { rawProductOrdersController } from "../../controllers/v1/raw-product-orders.controller";

const RawProductOrdersRoutes = express.Router();

RawProductOrdersRoutes.get(
  "/",
  asyncHandler(rawProductOrdersController.getAll),
);
RawProductOrdersRoutes.get(
  "/:id",
  asyncHandler(rawProductOrdersController.getById),
);
RawProductOrdersRoutes.post(
  "/",
  asyncHandler(rawProductOrdersController.create),
);
RawProductOrdersRoutes.put(
  "/:id",
  asyncHandler(rawProductOrdersController.update),
);
RawProductOrdersRoutes.patch(
  "/:id/status",
  asyncHandler(rawProductOrdersController.updateStatus),
);
RawProductOrdersRoutes.delete(
  "/:id",
  asyncHandler(rawProductOrdersController.del),
);

export default RawProductOrdersRoutes;

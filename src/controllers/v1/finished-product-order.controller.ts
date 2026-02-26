import type { Request, Response } from "express";
import { HttpError } from "../../error/httpError";
import { sendSuccessResponse } from "../../helpers/http-response";
import { finishedProductOrdersServices } from "../../services/finished-product-orders.services";

const getAll = async (_req: Request, res: Response) => {
  const data = await finishedProductOrdersServices.getAll();
  return sendSuccessResponse(
    res,
    200,
    "Finished product orders fetched successfully",
    data,
  );
};

const getById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await finishedProductOrdersServices.getById(Number(id));
  if (!data) throw new HttpError(404, "Finished product order not found");
  return sendSuccessResponse(
    res,
    200,
    "Finished product order fetched successfully",
    data,
  );
};

const create = async (req: Request, res: Response) => {
  const {
    finished_product_id,
    client_id,
    quantity,
    sale_price,
    ordered_at,
    expected_delivery_date,
    status,
  } = req.body;
  if (
    !finished_product_id ||
    !client_id ||
    quantity === undefined ||
    sale_price === undefined ||
    !ordered_at ||
    !expected_delivery_date
  ) {
    throw new HttpError(400, "Missing required fields");
  }
  const data = await finishedProductOrdersServices.create({
    finished_product_id,
    client_id,
    quantity,
    sale_price,
    ordered_at,
    expected_delivery_date,
    status,
  });
  return sendSuccessResponse(
    res,
    201,
    "Finished product order created successfully",
    data,
  );
};

const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const {
    finished_product_id,
    client_id,
    quantity,
    sale_price,
    ordered_at,
    expected_delivery_date,
    status,
  } = req.body;
  const updated = await finishedProductOrdersServices.update(Number(id), {
    finished_product_id,
    client_id,
    quantity,
    sale_price,
    ordered_at,
    expected_delivery_date,
    status,
  });
  if (!updated) throw new HttpError(404, "Finished product order not found");
  return sendSuccessResponse(
    res,
    200,
    "Finished product order updated successfully",
  );
};

const updateStatus = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { status } = req.body;
  if (!status) throw new HttpError(400, "Status is required");
  const updated = await finishedProductOrdersServices.updateStatus(
    Number(id),
    status,
  );
  if (!updated) throw new HttpError(404, "Finished product order not found");
  return sendSuccessResponse(
    res,
    200,
    "Finished product order status updated successfully",
  );
};

const del = async (req: Request, res: Response) => {
  const { id } = req.params;
  const deleted = await finishedProductOrdersServices.delete(Number(id));
  if (!deleted) throw new HttpError(404, "Finished product order not found");
  return sendSuccessResponse(
    res,
    200,
    "Finished product order deleted successfully",
  );
};

export const finishedProductOrdersController = {
  getAll,
  getById,
  create,
  update,
  updateStatus,
  del,
};

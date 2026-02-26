import type { Request, Response } from "express";
import { HttpError } from "../../error/httpError";
import { sendSuccessResponse } from "../../helpers/http-response";
import { RawProductOrderService } from "../../services/raw-product-order.services";

const getAll = async (_req: Request, res: Response) => {
  const data = await RawProductOrderService.getAllRawProductOrders();
  return sendSuccessResponse(
    res,
    200,
    "Raw product orders fetched successfully",
    data,
  );
};

const getById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await RawProductOrderService.getById(Number(id));
  if (!data) throw new HttpError(404, "Raw product order not found");
  return sendSuccessResponse(
    res,
    200,
    "Raw product order fetched successfully",
    data,
  );
};

const create = async (req: Request, res: Response) => {
  const {
    raw_product_id,
    supplier_id,
    quantity,
    price,
    ordered_at,
    expected_delivery_date,
    status,
  } = req.body;
  if (
    !raw_product_id ||
    !supplier_id ||
    quantity === undefined ||
    price === undefined ||
    !ordered_at ||
    !expected_delivery_date
  ) {
    throw new HttpError(400, "Missing required fields");
  }
  const data = await RawProductOrderService.create({
    raw_product_id,
    supplier_id,
    quantity,
    price,
    ordered_at,
    expected_delivery_date,
    status,
  });
  return sendSuccessResponse(
    res,
    201,
    "Raw product order created successfully",
    data,
  );
};

const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const {
    raw_product_id,
    supplier_id,
    quantity,
    price,
    ordered_at,
    expected_delivery_date,
    status,
  } = req.body;
  const updated = await RawProductOrderService.update(Number(id), {
    raw_product_id,
    supplier_id,
    quantity,
    price,
    ordered_at,
    expected_delivery_date,
    status,
  });
  if (!updated) throw new HttpError(404, "Raw product order not found");
  return sendSuccessResponse(
    res,
    200,
    "Raw product order updated successfully",
  );
};

const updateStatus = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { status } = req.body;
  if (!status) throw new HttpError(400, "Status is required");
  const updated = await RawProductOrderService.updateStatus(Number(id), status);
  if (!updated) throw new HttpError(404, "Raw product order not found");
  return sendSuccessResponse(
    res,
    200,
    "Raw product order status updated successfully",
  );
};

const del = async (req: Request, res: Response) => {
  const { id } = req.params;
  const deleted = await RawProductOrderService.del(Number(id));
  if (!deleted) throw new HttpError(404, "Raw product order not found");
  return sendSuccessResponse(
    res,
    200,
    "Raw product order deleted successfully",
  );
};

export const rawProductOrdersController = {
  getAll,
  getById,
  create,
  update,
  updateStatus,
  del,
};

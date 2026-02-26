import type { Request, Response } from "express";
import { HttpError } from "../../error/httpError";
import { sendSuccessResponse } from "../../helpers/http-response";
import { rawProductService } from "../../services/raw-products.services";

const getAll = async (_req: Request, res: Response) => {
  const data = await rawProductService.getAllRawProducts();
  return sendSuccessResponse(
    res,
    200,
    "Raw products fetched successfully",
    data,
  );
};

const getById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await rawProductService.getById(Number(id));
  if (!data) throw new HttpError(404, "Raw product not found");
  return sendSuccessResponse(
    res,
    200,
    "Raw product fetched successfully",
    data,
  );
};

const create = async (req: Request, res: Response) => {
  const { name, stock_quantity, unit_of_measure } = req.body;
  if (!name || stock_quantity === undefined || !unit_of_measure) {
    throw new HttpError(
      400,
      "Missing required fields: name, stock_quantity, unit_of_measure",
    );
  }
  const data = await rawProductService.create({
    name,
    stock_quantity,
    unit_of_measure,
  });
  return sendSuccessResponse(
    res,
    201,
    "Raw product created successfully",
    data,
  );
};

const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, stock_quantity, unit_of_measure } = req.body;
  const updated = await rawProductService.update(Number(id), {
    name,
    stock_quantity,
    unit_of_measure,
  });
  if (!updated) throw new HttpError(404, "Raw product not found");
  return sendSuccessResponse(res, 200, "Raw product updated successfully");
};

const del = async (req: Request, res: Response) => {
  const { id } = req.params;
  const deleted = await rawProductService.deleteById(Number(id));
  if (!deleted) throw new HttpError(404, "Raw product not found");
  return sendSuccessResponse(res, 200, "Raw product deleted successfully");
};

export const rawProductsController = {
  getById,
  getAll,
  create,
  update,
  del,
};

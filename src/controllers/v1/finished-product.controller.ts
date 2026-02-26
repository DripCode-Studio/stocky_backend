import type { Request, Response } from "express";
import { HttpError } from "../../error/httpError";
import { sendSuccessResponse } from "../../helpers/http-response";
import { finishedProductService } from "../../services/finished-products.services";

const getAll = async (_req: Request, res: Response) => {
  const data = await finishedProductService.getAllFinishedProducts();
  return sendSuccessResponse(
    res,
    200,
    "Finished products fetched successfully",
    data,
  );
};

const getById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await finishedProductService.getById(Number(id));
  if (!data) throw new HttpError(404, "Finished product not found");
  return sendSuccessResponse(
    res,
    200,
    "Finished product fetched successfully",
    data,
  );
};

const create = async (req: Request, res: Response) => {
  const { name, stock_quantity, unit_of_measure, comments } = req.body;
  if (!name || stock_quantity === undefined || !unit_of_measure) {
    throw new HttpError(
      400,
      "Missing required fields: name, stock_quantity, unit_of_measure",
    );
  }
  const data = await finishedProductService.create({
    name,
    stocke_quantity: stock_quantity,
    unit_of_measure,
    comments,
  });
  return sendSuccessResponse(
    res,
    201,
    "Finished product created successfully",
    data,
  );
};

const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, stock_quantity, unit_of_measure, comments } = req.body;
  const updated = await finishedProductService.update(Number(id), {
    name,
    stocke_quantity: stock_quantity,
    unit_of_measure,
    comments,
  });
  if (!updated) throw new HttpError(404, "Finished product not found");
  return sendSuccessResponse(res, 200, "Finished product updated successfully");
};

const del = async (req: Request, res: Response) => {
  const { id } = req.params;
  const deleted = await finishedProductService.deleteById(Number(id));
  if (!deleted) throw new HttpError(404, "Finished product not found");
  return sendSuccessResponse(res, 200, "Finished product deleted successfully");
};

const getRecipe = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await finishedProductService.getRecipe(Number(id));
  return sendSuccessResponse(
    res,
    200,
    "Finished product recipe fetched successfully",
    data,
  );
};

export const finishedProductsController = {
  getAll,
  getById,
  create,
  update,
  del,
  getRecipe,
};

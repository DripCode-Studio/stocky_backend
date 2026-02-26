import type { Request, Response } from "express";
import { HttpError } from "../../error/httpError";
import { sendSuccessResponse } from "../../helpers/http-response";
import { recipeItemServices } from "../../services/recipe-item.services";

const getAll = async (_req: Request, res: Response) => {
  const data = await recipeItemServices.getAllRecipeItems();
  return sendSuccessResponse(
    res,
    200,
    "Recipe items fetched successfully",
    data,
  );
};

const getByIds = async (req: Request, res: Response) => {
  const { finishedProductId, rawProductId } = req.params;
  const data = await recipeItemServices.getRecipeItemById(
    Number(finishedProductId),
    Number(rawProductId),
  );
  if (!data) throw new HttpError(404, "Recipe item not found");
  return sendSuccessResponse(
    res,
    200,
    "Recipe item fetched successfully",
    data,
  );
};

const getByFinishedProduct = async (req: Request, res: Response) => {
  const { finishedProductId } = req.params;
  const data = await recipeItemServices.getByFinishedProductId(
    Number(finishedProductId),
  );
  return sendSuccessResponse(
    res,
    200,
    "Recipe items fetched successfully",
    data,
  );
};

const create = async (req: Request, res: Response) => {
  const {
    finished_product_id,
    raw_product_id,
    quantity_required,
    unit_of_measure,
  } = req.body;
  if (
    !finished_product_id ||
    !raw_product_id ||
    quantity_required === undefined ||
    !unit_of_measure
  ) {
    throw new HttpError(
      400,
      "Missing required fields: finished_product_id, raw_product_id, quantity_required, unit_of_measure",
    );
  }
  const data = await recipeItemServices.create({
    finished_product_id,
    raw_product_id,
    quantity_required,
    unit_of_measure,
  });
  return sendSuccessResponse(
    res,
    201,
    "Recipe item created successfully",
    data,
  );
};

const update = async (req: Request, res: Response) => {
  const { finishedProductId, rawProductId } = req.params;
  const { quantity_required, unit_of_measure } = req.body;
  const updated = await recipeItemServices.update(
    Number(finishedProductId),
    Number(rawProductId),
    { quantity_required, unit_of_measure },
  );
  if (!updated) throw new HttpError(404, "Recipe item not found");
  return sendSuccessResponse(res, 200, "Recipe item updated successfully");
};

const del = async (req: Request, res: Response) => {
  const { finishedProductId, rawProductId } = req.params;
  const deleted = await recipeItemServices.del(
    Number(finishedProductId),
    Number(rawProductId),
  );
  if (!deleted) throw new HttpError(404, "Recipe item not found");
  return sendSuccessResponse(res, 200, "Recipe item deleted successfully");
};

export const recipeItemsController = {
  getAll,
  getByIds,
  getByFinishedProduct,
  create,
  update,
  del,
};

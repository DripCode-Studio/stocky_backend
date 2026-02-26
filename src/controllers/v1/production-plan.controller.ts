import type { Request, Response } from "express";
import { HttpError } from "../../error/httpError";
import { sendSuccessResponse } from "../../helpers/http-response";
import { productionPlanService } from "../../services/production-plan.services";

const getAll = async (_req: Request, res: Response) => {
  const data = await productionPlanService.getAllProductionPlans();
  return sendSuccessResponse(
    res,
    200,
    "Production plans fetched successfully",
    data,
  );
};

const getById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await productionPlanService.getById(Number(id));
  if (!data) throw new HttpError(404, "Production plan not found");
  return sendSuccessResponse(
    res,
    200,
    "Production plan fetched successfully",
    data,
  );
};

const create = async (req: Request, res: Response) => {
  const {
    finished_product_id,
    planned_quantity,
    unit_of_measure,
    planned_production_date,
    planned_duration,
    actual_duration,
    hourly_rate,
  } = req.body;
  if (
    !finished_product_id ||
    planned_quantity === undefined ||
    !unit_of_measure ||
    !planned_production_date ||
    planned_duration === undefined ||
    hourly_rate === undefined
  ) {
    throw new HttpError(400, "Missing required fields");
  }
  const data = await productionPlanService.create({
    finished_product_id,
    planned_quantity,
    unit_of_measure,
    planned_production_date,
    planned_duration,
    actual_duration,
    hourly_rate,
  });
  return sendSuccessResponse(
    res,
    201,
    "Production plan created successfully",
    data,
  );
};

const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const {
    finished_product_id,
    planned_quantity,
    unit_of_measure,
    planned_production_date,
    planned_duration,
    actual_duration,
    hourly_rate,
  } = req.body;
  const updated = await productionPlanService.update(Number(id), {
    finished_product_id,
    planned_quantity,
    unit_of_measure,
    planned_production_date,
    planned_duration,
    actual_duration,
    hourly_rate,
  });
  if (!updated) throw new HttpError(404, "Production plan not found");
  return sendSuccessResponse(res, 200, "Production plan updated successfully");
};

const del = async (req: Request, res: Response) => {
  const { id } = req.params;
  const deleted = await productionPlanService.del(Number(id));
  if (!deleted) throw new HttpError(404, "Production plan not found");
  return sendSuccessResponse(res, 200, "Production plan deleted successfully");
};

export const productionPlanController = {
  getAll,
  getById,
  create,
  update,
  del,
};

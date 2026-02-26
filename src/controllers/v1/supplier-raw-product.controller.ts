import type { Request, Response } from "express";
import { HttpError } from "../../error/httpError";
import { sendSuccessResponse } from "../../helpers/http-response";
import { SupplierRawProductsService } from "../../services/supplier-RawProducts.services";

const getAll = async (_req: Request, res: Response) => {
  const data = await SupplierRawProductsService.getAllSupplierRawProducts();
  return sendSuccessResponse(
    res,
    200,
    "Supplier raw products fetched successfully",
    data,
  );
};

const getByIds = async (req: Request, res: Response) => {
  const { supplierId, rawProductId } = req.params;
  const data = await SupplierRawProductsService.getByIds(
    Number(supplierId),
    Number(rawProductId),
  );
  if (!data) throw new HttpError(404, "Supplier raw product not found");
  return sendSuccessResponse(
    res,
    200,
    "Supplier raw product fetched successfully",
    data,
  );
};

const create = async (req: Request, res: Response) => {
  const { supplier_id, raw_product_id, unit_price, unit_of_measure } = req.body;
  if (
    !supplier_id ||
    !raw_product_id ||
    unit_price === undefined ||
    !unit_of_measure
  ) {
    throw new HttpError(
      400,
      "Missing required fields: supplier_id, raw_product_id, unit_price, unit_of_measure",
    );
  }
  const data = await SupplierRawProductsService.create({
    supplier_id,
    raw_product_id,
    unit_price,
    unit_of_measure,
  });
  return sendSuccessResponse(
    res,
    201,
    "Supplier raw product created successfully",
    data,
  );
};

const update = async (req: Request, res: Response) => {
  const { supplierId, rawProductId } = req.params;
  const { unit_price, unit_of_measure } = req.body;
  const updated = await SupplierRawProductsService.update(
    Number(supplierId),
    Number(rawProductId),
    { unit_price, unit_of_measure },
  );
  if (!updated) throw new HttpError(404, "Supplier raw product not found");
  return sendSuccessResponse(
    res,
    200,
    "Supplier raw product updated successfully",
  );
};

const del = async (req: Request, res: Response) => {
  const { supplierId, rawProductId } = req.params;
  const deleted = await SupplierRawProductsService.del(
    Number(supplierId),
    Number(rawProductId),
  );
  if (!deleted) throw new HttpError(404, "Supplier raw product not found");
  return sendSuccessResponse(
    res,
    200,
    "Supplier raw product deleted successfully",
  );
};

export const supplierRawProductsController = {
  getAll,
  getByIds,
  create,
  update,
  del,
};

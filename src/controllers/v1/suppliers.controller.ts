import type { Request, Response } from "express";
import { HttpError } from "../../error/httpError";
import { sendSuccessResponse } from "../../helpers/http-response";
import { SupplierService } from "../../services/suppliers.services";

const getAll = async (_req: Request, res: Response) => {
  const data = await SupplierService.getAllSuppliers();
  return sendSuccessResponse(res, 200, "Suppliers fetched successfully", data);
};

const getById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await SupplierService.getById(Number(id));
  if (!data) throw new HttpError(404, "Supplier not found");
  return sendSuccessResponse(res, 200, "Supplier fetched successfully", data);
};

const create = async (req: Request, res: Response) => {
  const { name, phone, email, website, contact_person } = req.body;
  if (!name || !phone || !email || !contact_person) {
    throw new HttpError(
      400,
      "Missing required fields: name, phone, email, contact_person",
    );
  }
  const data = await SupplierService.create({
    name,
    phone,
    email,
    website,
    contact_person,
  });
  return sendSuccessResponse(res, 201, "Supplier created successfully", data);
};

const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, phone, email, website, contact_person } = req.body;
  const updated = await SupplierService.update(Number(id), {
    name,
    phone,
    email,
    website,
    contact_person,
  });
  if (!updated) throw new HttpError(404, "Supplier not found");
  return sendSuccessResponse(res, 200, "Supplier updated successfully");
};

const del = async (req: Request, res: Response) => {
  const { id } = req.params;
  const deleted = await SupplierService.deleteById(Number(id));
  if (!deleted) throw new HttpError(404, "Supplier not found");
  return sendSuccessResponse(res, 200, "Supplier deleted successfully");
};

const getRawProducts = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await SupplierService.getRawProductsBySupplierId(Number(id));
  return sendSuccessResponse(
    res,
    200,
    "Supplier raw products fetched successfully",
    data,
  );
};

export const suppliersController = {
  getAll,
  getById,
  create,
  update,
  del,
  getRawProducts,
};

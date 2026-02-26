import type { Request, Response } from "express";
import { HttpError } from "../../error/httpError";
import { sendSuccessResponse } from "../../helpers/http-response";
import { clientServices } from "../../services/client.services";

const getAll = async (_req: Request, res: Response) => {
  const data = await clientServices.getAllClients();
  return sendSuccessResponse(res, 200, "Clients fetched successfully", data);
};

const getById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await clientServices.getById(Number(id));
  if (!data) throw new HttpError(404, "Client not found");
  return sendSuccessResponse(res, 200, "Client fetched successfully", data);
};

const create = async (req: Request, res: Response) => {
  const {
    name,
    phone,
    email,
    website,
    contact_person,
    client_type,
    address,
    city,
    region,
  } = req.body;
  if (
    !name ||
    !phone ||
    !contact_person ||
    !client_type ||
    !address ||
    !city ||
    !region
  ) {
    throw new HttpError(400, "Missing required fields");
  }
  const data = await clientServices.create({
    name,
    phone,
    email,
    website,
    contact_person,
    client_type,
    address,
    city,
    region,
  });
  return sendSuccessResponse(res, 201, "Client created successfully", data);
};

const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const {
    name,
    phone,
    email,
    website,
    contact_person,
    client_type,
    address,
    city,
    region,
  } = req.body;
  const updated = await clientServices.update(Number(id), {
    name,
    phone,
    email,
    website,
    contact_person,
    client_type,
    address,
    city,
    region,
  });
  if (!updated) throw new HttpError(404, "Client not found");
  return sendSuccessResponse(res, 200, "Client updated successfully");
};

const del = async (req: Request, res: Response) => {
  const { id } = req.params;
  const deleted = await clientServices.deleteClient(Number(id));
  if (!deleted) throw new HttpError(404, "Client not found");
  return sendSuccessResponse(res, 200, "Client deleted successfully");
};

const getOrders = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await clientServices.getOrdersByClientId(Number(id));
  return sendSuccessResponse(
    res,
    200,
    "Client orders fetched successfully",
    data,
  );
};

export const clientsController = {
  getAll,
  getById,
  create,
  update,
  del,
  getOrders,
};

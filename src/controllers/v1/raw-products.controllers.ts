import type { Request, Response } from "express";
import {
  sendErrorResponse,
  sendSuccessResponse,
} from "../../helpers/http-response";
import { rawProductService } from "../../services/raw-products.services";

export const getAllRawProducts = async (req: Request, res: Response) => {
  const allProducts = await rawProductService.getAllRawProducts();

  return sendSuccessResponse(
    res,
    200,
    "Raw Products Fetched fetched successfully",
    allProducts,
  );
};

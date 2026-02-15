import type { Request, Response } from "express";
import {
  sendErrorResponse,
  sendSuccessResponse,
} from "../../helpers/http-response";

export const getAllRawProducts = async (req: Request, res: Response) => {
  const user = req.user;

  if (!user) {
    return sendErrorResponse(res, 404, "User profile not found");
  }

  return sendSuccessResponse(res, 200, "User profile fetched successfully", {
    profile: user,
  });
};

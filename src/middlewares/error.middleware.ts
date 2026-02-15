import type { Response } from "express";
import { HttpError } from "../error/httpError";

export const errorHandler = (error: any, res: Response) => {
  if (error instanceof HttpError) {
    return res.status(error.statusCode).json({
      success: false,
      message: error.message,
    });
  }

  return res.status(500).json({
    success: false,
    message: error.message || "Internal server error",
  });
};

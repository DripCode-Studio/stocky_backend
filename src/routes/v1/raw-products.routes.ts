import express from "express";
import asyncHandler from "../../helpers/asyncHandler";
import { getAllRawProducts } from "../../controllers/v1/raw-products.controllers";

const RawProductsRoutes = express.Router();

RawProductsRoutes.get("/", asyncHandler(getAllRawProducts));

export default RawProductsRoutes;

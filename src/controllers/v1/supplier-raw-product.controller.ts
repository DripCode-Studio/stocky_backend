// --- Supplier Raw Products Controllers ---
const supplierRawProductsController = {
  async getAll(req: Request, res: Response) {
    const data = await supplierRawProductsService.getAll();
    return sendSuccess(
      res,
      200,
      "Supplier raw products fetched successfully",
      data,
    );
  },

  async getByIds(req: Request, res: Response) {
    const { supplierId, rawProductId } = req.params;
    const data = await supplierRawProductsService.getByIds(
      Number(supplierId),
      Number(rawProductId),
    );
    if (!data) throw new HttpError(404, "Supplier raw product not found");
    return sendSuccess(
      res,
      200,
      "Supplier raw product fetched successfully",
      data,
    );
  },

  async create(req: Request, res: Response) {
    const { supplier_id, raw_product_id, unit_price, unit_of_measure } =
      req.body;
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
    const data = await supplierRawProductsService.create({
      supplier_id,
      raw_product_id,
      unit_price,
      unit_of_measure,
    });
    return sendSuccess(
      res,
      201,
      "Supplier raw product created successfully",
      data,
    );
  },

  async update(req: Request, res: Response) {
    const { supplierId, rawProductId } = req.params;
    const { unit_price, unit_of_measure } = req.body;
    const updated = await supplierRawProductsService.update(
      Number(supplierId),
      Number(rawProductId),
      { unit_price, unit_of_measure },
    );
    if (!updated) throw new HttpError(404, "Supplier raw product not found");
    return sendSuccess(res, 200, "Supplier raw product updated successfully");
  },

  async delete(req: Request, res: Response) {
    const { supplierId, rawProductId } = req.params;
    const deleted = await supplierRawProductsService.delete(
      Number(supplierId),
      Number(rawProductId),
    );
    if (!deleted) throw new HttpError(404, "Supplier raw product not found");
    return sendSuccess(res, 200, "Supplier raw product deleted successfully");
  },
};

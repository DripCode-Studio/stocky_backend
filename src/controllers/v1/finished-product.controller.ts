const finishedProductsController = {
  async getAll(req: Request, res: Response) {
    const data = await finishedProductsService.getAll();
    return sendSuccess(
      res,
      200,
      "Finished products fetched successfully",
      data,
    );
  },

  async getById(req: Request, res: Response) {
    const { id } = req.params;
    const data = await finishedProductsService.getById(Number(id));
    if (!data) throw new HttpError(404, "Finished product not found");
    return sendSuccess(res, 200, "Finished product fetched successfully", data);
  },

  async create(req: Request, res: Response) {
    const { name, stock_quantity, unit_of_measure, comments } = req.body;
    if (!name || stock_quantity === undefined || !unit_of_measure) {
      throw new HttpError(
        400,
        "Missing required fields: name, stock_quantity, unit_of_measure",
      );
    }
    const data = await finishedProductsService.create({
      name,
      stock_quantity,
      unit_of_measure,
      comments,
    });
    return sendSuccess(res, 201, "Finished product created successfully", data);
  },

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, stock_quantity, unit_of_measure, comments } = req.body;
    const updated = await finishedProductsService.update(Number(id), {
      name,
      stock_quantity,
      unit_of_measure,
      comments,
    });
    if (!updated) throw new HttpError(404, "Finished product not found");
    return sendSuccess(res, 200, "Finished product updated successfully");
  },

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const deleted = await finishedProductsService.delete(Number(id));
    if (!deleted) throw new HttpError(404, "Finished product not found");
    return sendSuccess(res, 200, "Finished product deleted successfully");
  },

  async getRecipe(req: Request, res: Response) {
    const { id } = req.params;
    const data = await finishedProductsService.getRecipe(Number(id));
    return sendSuccess(
      res,
      200,
      "Finished product recipe fetched successfully",
      data,
    );
  },
};

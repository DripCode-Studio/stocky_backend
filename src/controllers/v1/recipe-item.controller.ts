const recipeItemsController = {
  async getAll(req: Request, res: Response) {
    const data = await recipeItemsService.getAll();
    return sendSuccess(res, 200, "Recipe items fetched successfully", data);
  },

  async getByIds(req: Request, res: Response) {
    const { finishedProductId, rawProductId } = req.params;
    const data = await recipeItemsService.getByIds(
      Number(finishedProductId),
      Number(rawProductId),
    );
    if (!data) throw new HttpError(404, "Recipe item not found");
    return sendSuccess(res, 200, "Recipe item fetched successfully", data);
  },

  async getByFinishedProduct(req: Request, res: Response) {
    const { finishedProductId } = req.params;
    const data = await recipeItemsService.getByFinishedProduct(
      Number(finishedProductId),
    );
    return sendSuccess(res, 200, "Recipe items fetched successfully", data);
  },

  async create(req: Request, res: Response) {
    const {
      finished_product_id,
      raw_product_id,
      quantity_required,
      unit_of_measure,
    } = req.body;
    if (
      !finished_product_id ||
      !raw_product_id ||
      quantity_required === undefined ||
      !unit_of_measure
    ) {
      throw new HttpError(
        400,
        "Missing required fields: finished_product_id, raw_product_id, quantity_required, unit_of_measure",
      );
    }
    const data = await recipeItemsService.create({
      finished_product_id,
      raw_product_id,
      quantity_required,
      unit_of_measure,
    });
    return sendSuccess(res, 201, "Recipe item created successfully", data);
  },

  async update(req: Request, res: Response) {
    const { finishedProductId, rawProductId } = req.params;
    const { quantity_required, unit_of_measure } = req.body;
    const updated = await recipeItemsService.update(
      Number(finishedProductId),
      Number(rawProductId),
      { quantity_required, unit_of_measure },
    );
    if (!updated) throw new HttpError(404, "Recipe item not found");
    return sendSuccess(res, 200, "Recipe item updated successfully");
  },

  async delete(req: Request, res: Response) {
    const { finishedProductId, rawProductId } = req.params;
    const deleted = await recipeItemsService.delete(
      Number(finishedProductId),
      Number(rawProductId),
    );
    if (!deleted) throw new HttpError(404, "Recipe item not found");
    return sendSuccess(res, 200, "Recipe item deleted successfully");
  },
};

// --- Production Plans Controllers ---
const productionPlansController = {
  async getAll(req: Request, res: Response) {
    const data = await productionPlansService.getAll();
    return sendSuccess(res, 200, "Production plans fetched successfully", data);
  },

  async getById(req: Request, res: Response) {
    const { id } = req.params;
    const data = await productionPlansService.getById(Number(id));
    if (!data) throw new HttpError(404, "Production plan not found");
    return sendSuccess(res, 200, "Production plan fetched successfully", data);
  },

  async create(req: Request, res: Response) {
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
    const data = await productionPlansService.create({
      finished_product_id,
      planned_quantity,
      unit_of_measure,
      planned_production_date,
      planned_duration,
      actual_duration,
      hourly_rate,
    });
    return sendSuccess(res, 201, "Production plan created successfully", data);
  },

  async update(req: Request, res: Response) {
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
    const updated = await productionPlansService.update(Number(id), {
      finished_product_id,
      planned_quantity,
      unit_of_measure,
      planned_production_date,
      planned_duration,
      actual_duration,
      hourly_rate,
    });
    if (!updated) throw new HttpError(404, "Production plan not found");
    return sendSuccess(res, 200, "Production plan updated successfully");
  },

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const deleted = await productionPlansService.delete(Number(id));
    if (!deleted) throw new HttpError(404, "Production plan not found");
    return sendSuccess(res, 200, "Production plan deleted successfully");
  },
};

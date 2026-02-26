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

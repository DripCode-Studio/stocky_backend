const finishedProductOrdersController = {
  async getAll(req: Request, res: Response) {
    const data = await finishedProductOrdersService.getAll();
    return sendSuccess(
      res,
      200,
      "Finished product orders fetched successfully",
      data,
    );
  },

  async getById(req: Request, res: Response) {
    const { id } = req.params;
    const data = await finishedProductOrdersService.getById(Number(id));
    if (!data) throw new HttpError(404, "Finished product order not found");
    return sendSuccess(
      res,
      200,
      "Finished product order fetched successfully",
      data,
    );
  },

  async create(req: Request, res: Response) {
    const {
      finished_product_id,
      client_id,
      quantity,
      sale_price,
      ordered_at,
      expected_delivery_date,
      status,
    } = req.body;
    if (
      !finished_product_id ||
      !client_id ||
      quantity === undefined ||
      sale_price === undefined ||
      !ordered_at ||
      !expected_delivery_date
    ) {
      throw new HttpError(400, "Missing required fields");
    }
    const data = await finishedProductOrdersService.create({
      finished_product_id,
      client_id,
      quantity,
      sale_price,
      ordered_at,
      expected_delivery_date,
      status,
    });
    return sendSuccess(
      res,
      201,
      "Finished product order created successfully",
      data,
    );
  },

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const {
      finished_product_id,
      client_id,
      quantity,
      sale_price,
      ordered_at,
      expected_delivery_date,
      status,
    } = req.body;
    const updated = await finishedProductOrdersService.update(Number(id), {
      finished_product_id,
      client_id,
      quantity,
      sale_price,
      ordered_at,
      expected_delivery_date,
      status,
    });
    if (!updated) throw new HttpError(404, "Finished product order not found");
    return sendSuccess(res, 200, "Finished product order updated successfully");
  },

  async updateStatus(req: Request, res: Response) {
    const { id } = req.params;
    const { status } = req.body;
    if (!status) throw new HttpError(400, "Status is required");
    const updated = await finishedProductOrdersService.updateStatus(
      Number(id),
      status,
    );
    if (!updated) throw new HttpError(404, "Finished product order not found");
    return sendSuccess(
      res,
      200,
      "Finished product order status updated successfully",
    );
  },

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const deleted = await finishedProductOrdersService.delete(Number(id));
    if (!deleted) throw new HttpError(404, "Finished product order not found");
    return sendSuccess(res, 200, "Finished product order deleted successfully");
  },
};

const rawProductOrdersController = {
  async getAll(req: Request, res: Response) {
    const data = await rawProductOrdersService.getAll();
    return sendSuccess(
      res,
      200,
      "Raw product orders fetched successfully",
      data,
    );
  },

  async getById(req: Request, res: Response) {
    const { id } = req.params;
    const data = await rawProductOrdersService.getById(Number(id));
    if (!data) throw new HttpError(404, "Raw product order not found");
    return sendSuccess(
      res,
      200,
      "Raw product order fetched successfully",
      data,
    );
  },

  async create(req: Request, res: Response) {
    const {
      raw_product_id,
      supplier_id,
      quantity,
      price,
      ordered_at,
      expected_delivery_date,
      status,
    } = req.body;
    if (
      !raw_product_id ||
      !supplier_id ||
      quantity === undefined ||
      price === undefined ||
      !ordered_at ||
      !expected_delivery_date
    ) {
      throw new HttpError(400, "Missing required fields");
    }
    const data = await rawProductOrdersService.create({
      raw_product_id,
      supplier_id,
      quantity,
      price,
      ordered_at,
      expected_delivery_date,
      status,
    });
    return sendSuccess(
      res,
      201,
      "Raw product order created successfully",
      data,
    );
  },

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const {
      raw_product_id,
      supplier_id,
      quantity,
      price,
      ordered_at,
      expected_delivery_date,
      status,
    } = req.body;
    const updated = await rawProductOrdersService.update(Number(id), {
      raw_product_id,
      supplier_id,
      quantity,
      price,
      ordered_at,
      expected_delivery_date,
      status,
    });
    if (!updated) throw new HttpError(404, "Raw product order not found");
    return sendSuccess(res, 200, "Raw product order updated successfully");
  },

  async updateStatus(req: Request, res: Response) {
    const { id } = req.params;
    const { status } = req.body;
    if (!status) throw new HttpError(400, "Status is required");
    const updated = await rawProductOrdersService.updateStatus(
      Number(id),
      status,
    );
    if (!updated) throw new HttpError(404, "Raw product order not found");
    return sendSuccess(
      res,
      200,
      "Raw product order status updated successfully",
    );
  },

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const deleted = await rawProductOrdersService.delete(Number(id));
    if (!deleted) throw new HttpError(404, "Raw product order not found");
    return sendSuccess(res, 200, "Raw product order deleted successfully");
  },
};

const suppliersController = {
  async getAll(req: Request, res: Response) {
    const data = await suppliersService.getAll();
    return sendSuccess(res, 200, "Suppliers fetched successfully", data);
  },

  async getById(req: Request, res: Response) {
    const { id } = req.params;
    const data = await suppliersService.getById(Number(id));
    if (!data) throw new HttpError(404, "Supplier not found");
    return sendSuccess(res, 200, "Supplier fetched successfully", data);
  },

  async create(req: Request, res: Response) {
    const { name, phone, email, website, contact_person } = req.body;
    if (!name || !phone || !email || !contact_person) {
      throw new HttpError(
        400,
        "Missing required fields: name, phone, email, contact_person",
      );
    }
    const data = await suppliersService.create({
      name,
      phone,
      email,
      website,
      contact_person,
    });
    return sendSuccess(res, 201, "Supplier created successfully", data);
  },

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, phone, email, website, contact_person } = req.body;
    const updated = await suppliersService.update(Number(id), {
      name,
      phone,
      email,
      website,
      contact_person,
    });
    if (!updated) throw new HttpError(404, "Supplier not found");
    return sendSuccess(res, 200, "Supplier updated successfully");
  },

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const deleted = await suppliersService.delete(Number(id));
    if (!deleted) throw new HttpError(404, "Supplier not found");
    return sendSuccess(res, 200, "Supplier deleted successfully");
  },

  async getRawProducts(req: Request, res: Response) {
    const { id } = req.params;
    const data = await suppliersService.getRawProducts(Number(id));
    return sendSuccess(
      res,
      200,
      "Supplier raw products fetched successfully",
      data,
    );
  },
};

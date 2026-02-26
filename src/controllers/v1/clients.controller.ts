const clientsController = {
  async getAll(req: Request, res: Response) {
    const data = await clientsService.getAll();
    return sendSuccess(res, 200, "Clients fetched successfully", data);
  },

  async getById(req: Request, res: Response) {
    const { id } = req.params;
    const data = await clientsService.getById(Number(id));
    if (!data) throw new HttpError(404, "Client not found");
    return sendSuccess(res, 200, "Client fetched successfully", data);
  },

  async create(req: Request, res: Response) {
    const {
      name,
      phone,
      email,
      website,
      contact_person,
      client_type,
      address,
      city,
      region,
    } = req.body;
    if (
      !name ||
      !phone ||
      !contact_person ||
      !client_type ||
      !address ||
      !city ||
      !region
    ) {
      throw new HttpError(400, "Missing required fields");
    }
    const data = await clientsService.create({
      name,
      phone,
      email,
      website,
      contact_person,
      client_type,
      address,
      city,
      region,
    });
    return sendSuccess(res, 201, "Client created successfully", data);
  },

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const {
      name,
      phone,
      email,
      website,
      contact_person,
      client_type,
      address,
      city,
      region,
    } = req.body;
    const updated = await clientsService.update(Number(id), {
      name,
      phone,
      email,
      website,
      contact_person,
      client_type,
      address,
      city,
      region,
    });
    if (!updated) throw new HttpError(404, "Client not found");
    return sendSuccess(res, 200, "Client updated successfully");
  },

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const deleted = await clientsService.delete(Number(id));
    if (!deleted) throw new HttpError(404, "Client not found");
    return sendSuccess(res, 200, "Client deleted successfully");
  },

  async getOrders(req: Request, res: Response) {
    const { id } = req.params;
    const data = await clientsService.getOrders(Number(id));
    return sendSuccess(res, 200, "Client orders fetched successfully", data);
  },
};

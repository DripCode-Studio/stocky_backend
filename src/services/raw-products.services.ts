import { pool } from "../config/pool";

const getAllRawProducts = async () => {
  const [products] = await pool.query("SELECT * FROM RawProducts");

  return products;
};

export const rawProductService = { getAllRawProducts };

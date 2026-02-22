import { pool } from "../config/pool";

const getAllRawProducts = async () => {
  const [products] = await pool.query("SELECT * FROM RawProducts");

  return products;
};

const create = async () => {
  // const [result] = await pool.query<ResultSetHeader>(
  //   "INSERT INTO users (name, email) VALUES (?, ?)",
  //   [data.name, data.email]
  // );
};

export const rawProductService = { getAllRawProducts, create };

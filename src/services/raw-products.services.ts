import { pool } from "../config/pool";
import type { RowDataPacket, ResultSetHeader } from "mysql2";
import type { RawProduct } from "../types/type";

const getAllRawProducts = async () => {
  const [products] = await pool.query<RowDataPacket[]>(
    "SELECT * FROM RawProducts",
  );

  return products;
};

const getById = async (id: number) => {
  const [product] = await pool.query<RowDataPacket[]>(
    "SELECT * FROM RawProducts WHERE id = ?",
    [id],
  );

  return product[0] || null;
};

const create = async (data: RawProduct) => {
  const [result] = await pool.query<ResultSetHeader>(
    "INSERT INTO RawProducts (name, stock_quantity, unit_of_measure) VALUES (?, ?, ?)",
    [data.name, data.stock_quantity, data.unit_of_measure],
  );

  return { id: result.insertId, ...data };
};

const update = async (id: number, data: Partial<RawProduct>) => {
  const [result] = await pool.query<ResultSetHeader>(
    "UPDATE RawProducts SET name = ?, stock_quantity = ?, unit_of_measure = ? WHERE id = ?",
    [data.name, data.stock_quantity, data.unit_of_measure, id],
  );

  return result.affectedRows > 0;
};

const deleteById = async (id: number) => {
  const [result] = await pool.query<ResultSetHeader>(
    "DELETE FROM RawProducts WHERE id = ?",
    [id],
  );

  return result.affectedRows > 0;
};

export const rawProductService = {
  getAllRawProducts,
  getById,
  create,
  update,
  deleteById,
};

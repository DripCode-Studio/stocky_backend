import { pool } from "../config/pool";
import type { RowDataPacket, ResultSetHeader } from "mysql2";
import type { FinishedProduct } from "../types/type";

const getAllFinishedProducts = async () => {
  const [products] = await pool.query<RowDataPacket[]>(
    "SELECT * FROM FinishedProducts",
  );

  return products;
};

const getById = async (id: number) => {
  const [product] = await pool.query<RowDataPacket[]>(
    "SELECT * FROM FinishedProducts WHERE id = ?",
    [id],
  );

  return product[0] || null;
};

const create = async (data: FinishedProduct) => {
  const [result] = await pool.query<ResultSetHeader>(
    "INSERT INTO FinishedProducts (name, stocke_quantity, unit_of_measure, comments) VALUES (?, ?, ?, ?)",
    [
      data.name,
      data.stocke_quantity,
      data.unit_of_measure,
      data.comments || null,
    ],
  );

  return { id: result.insertId, ...data };
};

const update = async (id: number, data: Partial<FinishedProduct>) => {
  const [result] = await pool.query<ResultSetHeader>(
    "UPDATE FinishedProducts SET name = ?, stocke_quantity = ?, unit_of_measure = ?, comments = ? WHERE id = ?",
    [
      data.name,
      data.stocke_quantity,
      data.unit_of_measure,
      data.comments || null,
      id,
    ],
  );

  return result.affectedRows > 0;
};

const deleteById = async (id: number) => {
  const [result] = await pool.query<ResultSetHeader>(
    "DELETE FROM FinishedProducts WHERE id = ?",
    [id],
  );

  return result.affectedRows > 0;
};

const getRecipe = async (finishedProductId: number) => {
  const [recipe] = await pool.query<RowDataPacket[]>(
    `SELECT rp.*, ri.quantity_required, ri.unit_of_measure as recipe_unit_of_measure
    FROM RawProducts rp
    JOIN RecipeItems ri ON rp.id = ri.raw_product_id
    WHERE ri.finished_product_id = ?`,
    [finishedProductId],
  );

  return recipe;
};

export const finishedProductService = {
  getAllFinishedProducts,
  getById,
  create,
  update,
  deleteById,
  getRecipe,
};

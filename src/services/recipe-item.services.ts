import { pool } from "../config/pool";
import type { RowDataPacket, ResultSetHeader } from "mysql2";
import type { RecipeItem } from "../types/type";

const getAllRecipeItems = async () => {
  const [rows] = await pool.query<RowDataPacket[]>(
    `SELECT ri.*, fp.name as finished_product_name, rp.name as raw_product_name
       FROM RecipeItems ri
       JOIN FinishedProducts fp ON ri.finished_product_id = fp.id
       JOIN RawProducts rp ON ri.raw_product_id = rp.id`,
  );
  return rows;
};

const getRecipeItemById = async (
  finishedProductId: number,
  rawProductId: number,
) => {
  const [rows] = await pool.query<RowDataPacket[]>(
    "SELECT * FROM RecipeItems WHERE finished_product_id = ? AND raw_product_id = ?",
    [finishedProductId, rawProductId],
  );
  return rows[0] || null;
};

const getByFinishedProductId = async (finishedProductId: number) => {
  const [rows] = await pool.query<RowDataPacket[]>(
    `SELECT ri.*, rp.name as raw_product_name
       FROM RecipeItems ri
       JOIN RawProducts rp ON ri.raw_product_id = rp.id
       WHERE ri.finished_product_id = ?`,
    [finishedProductId],
  );
  return rows;
};

const create = async (data: RecipeItem) => {
  await pool.query<ResultSetHeader>(
    "INSERT INTO RecipeItems (finished_product_id, raw_product_id, quantity_required, unit_of_measure) VALUES (?, ?, ?, ?)",
    [
      data.finished_product_id,
      data.raw_product_id,
      data.quantity_required,
      data.unit_of_measure,
    ],
  );
  return data;
};

const update = async (
  finishedProductId: number,
  rawProductId: number,
  data: Partial<RecipeItem>,
) => {
  const [result] = await pool.query<ResultSetHeader>(
    "UPDATE RecipeItems SET quantity_required = ?, unit_of_measure = ? WHERE finished_product_id = ? AND raw_product_id = ?",
    [
      data.quantity_required,
      data.unit_of_measure,
      finishedProductId,
      rawProductId,
    ],
  );
  return result.affectedRows > 0;
};

const del = async (finishedProductId: number, rawProductId: number) => {
  const [result] = await pool.query<ResultSetHeader>(
    "DELETE FROM RecipeItems WHERE finished_product_id = ? AND raw_product_id = ?",
    [finishedProductId, rawProductId],
  );
  return result.affectedRows > 0;
};

export const recipeItemServices = {
  getAllRecipeItems,
  getRecipeItemById,
  getByFinishedProductId,
  create,
  update,
  del,
};

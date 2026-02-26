import { pool } from "../config/pool";
import type { RowDataPacket, ResultSetHeader } from "mysql2";
import type { FinishedProductOrder } from "../types/type";

const getAllFinishedProductOrders = async () => {
  const [rows] = await pool.query<RowDataPacket[]>(
    `SELECT fpo.*, fp.name as finished_product_name, c.name as client_name
       FROM FinishedProductOrders fpo
       JOIN FinishedProducts fp ON fpo.finished_product_id = fp.id
       JOIN Clients c ON fpo.client_id = c.id`,
  );
  return rows;
};

const getById = async (id: number) => {
  const [rows] = await pool.query<RowDataPacket[]>(
    `SELECT fpo.*, fp.name as finished_product_name, c.name as client_name
       FROM FinishedProductOrders fpo
       JOIN FinishedProducts fp ON fpo.finished_product_id = fp.id
       JOIN Clients c ON fpo.client_id = c.id
       WHERE fpo.id = ?`,
    [id],
  );
  return rows[0] || null;
};

const create = async (data: FinishedProductOrder) => {
  const [result] = await pool.query<ResultSetHeader>(
    `INSERT INTO FinishedProductOrders (finished_product_id, client_id, quantity, sale_price, 
       ordered_at, expected_delivery_date, status) VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [
      data.finished_product_id,
      data.client_id,
      data.quantity,
      data.sale_price,
      data.ordered_at,
      data.expected_delivery_date,
      data.status || "commande",
    ],
  );
  return { id: result.insertId, ...data };
};

const update = async (id: number, data: Partial<FinishedProductOrder>) => {
  const [result] = await pool.query<ResultSetHeader>(
    `UPDATE FinishedProductOrders SET finished_product_id = ?, client_id = ?, quantity = ?, sale_price = ?,
       ordered_at = ?, expected_delivery_date = ?, status = ? WHERE id = ?`,
    [
      data.finished_product_id,
      data.client_id,
      data.quantity,
      data.sale_price,
      data.ordered_at,
      data.expected_delivery_date,
      data.status,
      id,
    ],
  );
  return result.affectedRows > 0;
};

const del = async (id: number) => {
  const [result] = await pool.query<ResultSetHeader>(
    "DELETE FROM FinishedProductOrders WHERE id = ?",
    [id],
  );
  return result.affectedRows > 0;
};

export const finishedProductOrdersServices = {};

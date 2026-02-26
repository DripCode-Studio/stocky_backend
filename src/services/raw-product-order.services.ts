import { pool } from "../config/pool";
import type { RowDataPacket, ResultSetHeader } from "mysql2";
import type { RawProductOrder } from "../types/type";

const getAllRawProductOrders = async () => {
  const [rows] = await pool.query<RowDataPacket[]>(
    `SELECT rpo.*, rp.name as raw_product_name, s.name as supplier_name
       FROM RawProductOrders rpo
       JOIN RawProducts rp ON rpo.raw_product_id = rp.id
       JOIN Suppliers s ON rpo.supplier_id = s.id`,
  );
  return rows;
};

const getById = async (id: number) => {
  const [rows] = await pool.query<RowDataPacket[]>(
    `SELECT rpo.*, rp.name as raw_product_name, s.name as supplier_name
       FROM RawProductOrders rpo
       JOIN RawProducts rp ON rpo.raw_product_id = rp.id
       JOIN Suppliers s ON rpo.supplier_id = s.id
       WHERE rpo.id = ?`,
    [id],
  );
  return rows[0] || null;
};

const create = async (data: RawProductOrder) => {
  const [result] = await pool.query<ResultSetHeader>(
    `INSERT INTO RawProductOrders (raw_product_id, supplier_id, quantity, price, ordered_at, expected_delivery_date, status) 
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [
      data.raw_product_id,
      data.supplier_id,
      data.quantity,
      data.price,
      data.ordered_at,
      data.expected_delivery_date,
      data.status || "commande",
    ],
  );
  return { id: result.insertId, ...data };
};

const update = async (id: number, data: Partial<RawProductOrder>) => {
  const [result] = await pool.query<ResultSetHeader>(
    `UPDATE RawProductOrders SET raw_product_id = ?, supplier_id = ?, quantity = ?, price = ?, 
       ordered_at = ?, expected_delivery_date = ?, status = ? WHERE id = ?`,
    [
      data.raw_product_id,
      data.supplier_id,
      data.quantity,
      data.price,
      data.ordered_at,
      data.expected_delivery_date,
      data.status,
      id,
    ],
  );
  return result.affectedRows > 0;
};

const updateStatus = async (id: number, status: RawProductOrder["status"]) => {
  const [result] = await pool.query<ResultSetHeader>(
    "UPDATE RawProductOrders SET status = ? WHERE id = ?",
    [status, id],
  );
  return result.affectedRows > 0;
};

const del = async (id: number) => {
  const [result] = await pool.query<ResultSetHeader>(
    "DELETE FROM RawProductOrders WHERE id = ?",
    [id],
  );
  return result.affectedRows > 0;
};

export const RawProductOrderService = {
  getAllRawProductOrders,
  getById,
  create,
};

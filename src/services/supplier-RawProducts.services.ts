import { pool } from "../config/pool";
import type { RowDataPacket, ResultSetHeader } from "mysql2";
import type { SupplierRawProduct } from "../types/type";

const getAllSupplierRawProducts = async () => {
  const [rows] = await pool.query<RowDataPacket[]>(
    `SELECT srp.*, s.name AS supplier_name, rp.name AS raw_product_name
        FROM SupplierRawProducts srp
        JOIN Suppliers s On srp.supplier_id = s.id
        JOIN RawProducts rp ON srp.raw_product_id = rp.id`,
  );

  return rows;
};

const getByIds = async (supplierId: number, rawProductId: number) => {
  const [rows] = await pool.query<RowDataPacket[]>(
    "SELECT * FROM SupplierRawProducts WHERE supplier_id = ? AND raw_product_id = ?",
    [supplierId, rawProductId],
  );
  return rows[0] || null;
};

const create = async (data: SupplierRawProduct) => {
  await pool.query<ResultSetHeader>(
    "INSERT INTO SupplierRawProducts (supplier_id, raw_product_id, unit_price, unit_of_measure) VALUES (?, ?, ?, ?)",
    [
      data.supplier_id,
      data.raw_product_id,
      data.unit_price,
      data.unit_of_measure,
    ],
  );
  return data;
};

const update = async (
  supplierId: number,
  rawProductId: number,
  data: Partial<SupplierRawProduct>,
) => {
  const [result] = await pool.query<ResultSetHeader>(
    "UPDATE SupplierRawProducts SET unit_price = ?, unit_of_measure = ? WHERE supplier_id = ? AND raw_product_id = ?",
    [data.unit_price, data.unit_of_measure, supplierId, rawProductId],
  );
  return result.affectedRows > 0;
};

const del = async (supplierId: number, rawProductId: number) => {
  const [result] = await pool.query<ResultSetHeader>(
    "DELETE FROM SupplierRawProducts WHERE supplier_id = ? AND raw_product_id = ?",
    [supplierId, rawProductId],
  );
  return result.affectedRows > 0;
};

export const SupplierRawProductsService = {
  getAllSupplierRawProducts,
  getByIds,
  create,
  update,
  del,
};

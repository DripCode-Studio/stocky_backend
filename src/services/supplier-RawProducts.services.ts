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

const getByIds = async (supplierId: number, rawProductId: number) => {};

export const SupplierRawProductsService = { getAllSupplierRawProducts };

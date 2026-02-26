import { pool } from "../config/pool";
import type { RowDataPacket, ResultSetHeader } from "mysql2";
import type { Supplier } from "../types/type";

const getAllSuppliers = async () => {
  const [suppliers] = await pool.query<RowDataPacket[]>(
    "SELECT * FROM Suppliers",
  );

  return suppliers;
};

const getById = async (id: number) => {
  const [supplier] = await pool.query<RowDataPacket[]>(
    "SELECT * FROM Suppliers WHERE id = ?",
    [id],
  );

  return supplier[0] || null;
};

const create = async (data: Supplier) => {
  const [result] = await pool.query<ResultSetHeader>(
    "INSERT INTO Suppliers (name, phone, email, website, contact_person) VALUES (?, ?, ?, ?, ?)",
    [
      data.name,
      data.phone,
      data.email,
      data.website || null,
      data.contact_person,
    ],
  );

  return { id: result.insertId, ...data };
};

const update = async (id: number, data: Partial<Supplier>) => {
  const [result] = await pool.query<ResultSetHeader>(
    "UPDATE Suppliers SET name = ?, phone = ?, email = ?, website = ?, contact_person = ? WHERE id = ?",
    [
      data.name,
      data.phone,
      data.email,
      data.website || null,
      data.contact_person,
      id,
    ],
  );

  return result.affectedRows > 0;
};

const deleteById = async (id: number) => {
  const [result] = await pool.query<ResultSetHeader>(
    "DELETE FROM Suppliers WHERE id = ?",
    [id],
  );

  return result.affectedRows > 0;
};

const getRawProductsBySupplierId = async (supplierId: number) => {
  const [products] = await pool.query<RowDataPacket[]>(
    `SELECT rp.*, srp.unit_price, srp.unit_of_measure as supplier_unit_of_measure
    FROM RawProducts rp
    JOIN SupplierRawProducts srp ON rp.id = srp.raw_product_id
    WHERE srp.supplier_id = ?`,
    [supplierId],
  );
  return products;
};

export const SupplierService = {
  getAllSuppliers,
  getById,
  create,
  update,
  deleteById,
  getRawProductsBySupplierId,
};

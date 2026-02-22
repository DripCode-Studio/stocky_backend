import { pool } from "../config/pool";
import type { RowDataPacket, ResultSetHeader } from "mysql2";
import type { Client } from "../types/type";

const getAllClients = async () => {
  const [rows] = await pool.query<RowDataPacket[]>("SELECT * FROM clients");
  return rows;
};

const getById = async (id: number) => {
  const [rows] = await pool.query<RowDataPacket[]>(
    "SELECT * FROM clients WHERE id = ?",
    [id],
  );
  return rows[0] || null;
};

const create = async (client: Client) => {
  const [result] = await pool.query<ResultSetHeader>(
    "INSERT INTO clients (name,phone, email, website, contact_person, client_type, address, city, region) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    [
      client.name,
      client.phone,
      client.email || null,
      client.website || null,
      client.contact_person,
      client.client_type,
      client.address,
      client.city,
      client.region,
    ],
  );
  return { id: result.insertId, ...client };
};

const update = async (id: number, client: Client) => {
  const [result] = await pool.query<ResultSetHeader>(
    "UPDATE clients SET name = ?, phone = ?, email = ?, website = ?, contact_person = ?, client_type = ?, address = ?, city = ?, region = ? WHERE id = ?",
    [
      client.name,
      client.phone,
      client.email || null,
      client.website || null,
      client.contact_person,
      client.client_type,
      client.address,
      client.city,
      client.region,
      id,
    ],
  );
  return result.affectedRows > 0;
};

const deleteClient = async (id: number) => {
  const [result] = await pool.query<ResultSetHeader>(
    "DELETE FROM clients WHERE id = ?",
    [id],
  );
  return result.affectedRows > 0;
};

const getOrdersByClientId = async (clientId: number) => {
  const [rows] = await pool.query<RowDataPacket[]>(
    `SELECT fpo.*, fp.name as finished_product_name
    FROM FinishedProductsOrders fpo
    JOIN FinishedProducts fp ON fpo.finished_product_id = fp.id
    WHERE fpo.client_id = ?`,
    [clientId],
  );

  return rows;
};

export const clientServices = {
  getAllClients,
  getById,
  create,
  update,
  deleteClient,
  getOrdersByClientId,
};

import { pool } from "../config/pool";
import type { RowDataPacket, ResultSetHeader } from "mysql2";
import type { ProductionPlan } from "../types/type";

const getAllProductionPlans = async () => {
  const [rows] = await pool.query<RowDataPacket[]>(
    `SELECT pp.*, fp.name as finished_product_name
       FROM ProductionPlans pp
       JOIN FinishedProducts fp ON pp.finished_product_id = fp.id`,
  );
  return rows;
};

const getById = async (id: number) => {
  const [rows] = await pool.query<RowDataPacket[]>(
    `SELECT pp.*, fp.name as finished_product_name
       FROM ProductionPlans pp
       JOIN FinishedProducts fp ON pp.finished_product_id = fp.id
       WHERE pp.id = ?`,
    [id],
  );
  return rows[0] || null;
};

const create = async (data: ProductionPlan) => {
  const [result] = await pool.query<ResultSetHeader>(
    `INSERT INTO ProductionPlans (finished_product_id, planned_quantity, unit_of_measure, 
       planned_production_date, planned_duration, actual_duration, hourly_rate) 
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [
      data.finished_product_id,
      data.planned_quantity,
      data.unit_of_measure,
      data.planned_production_date,
      data.planned_duration,
      data.actual_duration || null,
      data.hourly_rate,
    ],
  );
  return { id: result.insertId, ...data };
};

const update = async (id: number, data: Partial<ProductionPlan>) => {
  const [result] = await pool.query<ResultSetHeader>(
    `UPDATE ProductionPlans SET finished_product_id = ?, planned_quantity = ?, unit_of_measure = ?,
       planned_production_date = ?, planned_duration = ?, actual_duration = ?, hourly_rate = ? WHERE id = ?`,
    [
      data.finished_product_id,
      data.planned_quantity,
      data.unit_of_measure,
      data.planned_production_date,
      data.planned_duration,
      data.actual_duration || null,
      data.hourly_rate,
      id,
    ],
  );
  return result.affectedRows > 0;
};

const del = async (id: number) => {
  const [result] = await pool.query<ResultSetHeader>(
    "DELETE FROM ProductionPlans WHERE id = ?",
    [id],
  );
  return result.affectedRows > 0;
};

export const productionPlanService = {
  getAllProductionPlans,
  getById,
  create,
  update,
  del,
};

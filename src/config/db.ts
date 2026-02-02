import mysql from "mysql2/promise";
import type { ConnectionOptions } from "mysql2";

const access: ConnectionOptions = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: 3306,
};

const connectToDatabase = async () => {
  try {
    const conn = mysql.createConnection(access);

    console.log("Connected to the database");

    return conn;
  } catch (err) {
    console.log("Database connection error");
    throw err;
  }
};

export default connectToDatabase;

import { Sequelize } from "sequelize";

const db = new Sequelize(
  process.env.DB_NAME || "db_penggajian3",
  process.env.DB_USER || "root",
  process.env.DB_PASSWORD || "root",
  {
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: "mysql",
  }
);

export default db;

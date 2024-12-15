import dotenv from "dotenv";
import "reflect-metadata";
import { DataSource } from "typeorm";
dotenv.config();

export const DataSources = new DataSource({
  type: "postgres",
  host: "localhost",
  port: Number(process.env.DATABASE_USERPORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_USERPWD,
  synchronize: false,
  database: "form_database",
  schema: "form_schema",
  entities: ["src/db/entities/*{.ts,.js}"],
  migrations: ["src/db/migrations/*{.ts,.js}"],
  //   migrationsTableName: "migrations",
});

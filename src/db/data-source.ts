import dotenv from "dotenv";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { FormEntity } from "./entities/form.entity";
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
  entities: [FormEntity],
  // migrations: [
  //   process.env.NODE_ENV === "production"
  //     ? "./dist/migrations/*{.js,.ts}"
  //     : "./src/migrations/*{.ts,.js}",
  // ],
  //   migrationsTableName: "migrations",
});

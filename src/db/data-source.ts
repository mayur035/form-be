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
  synchronize: true,
  database: "form_database",
  schema: "form_schema",
  entities: [
    process.env.NODE_ENV === "production"
      ? "dist/db/entities/*{.js,.ts}"
      : "src/db/entities/*{.ts,.js}",
  ],
  migrations: [
    process.env.NODE_ENV === "production"
      ? "dist/db/migrations/*{.js,.ts}"
      : "src/db/migrations/*{.ts,.js}",
  ],
  //   migrationsTableName: "migrations",
});

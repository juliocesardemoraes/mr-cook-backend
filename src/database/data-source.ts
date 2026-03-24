import { DataSource } from "typeorm";
import { Compra } from "./schema/Compra.js";
import { Representacao } from "./schema/Representacao.js";
import { Terceiro } from "./schema/Terceiro.js";

export const AppDataSource = new DataSource({
  type: "postgres",
  synchronize: true,
  entities: [Compra, Representacao, Terceiro],
  username: process.env.DB_NAME,
  password: process.env.DB_PASS,
  database: process.env.DB_DB,
  host: process.env.DB_HOST,
  port: 8001,
  migrations: [],
  subscribers: [],
});

import { Dialect } from "sequelize";

export type DbConfig = {
  databaseConfig: {
    username: string | undefined;
    password: string | undefined;
    database: string | undefined;
  }
  databaseOptions: {
    host: string | undefined;
    port: number | undefined;
    dialect: Dialect;
  }
};



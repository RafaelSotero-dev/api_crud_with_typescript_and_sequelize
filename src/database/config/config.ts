import { DbConfig } from '../../types';
import dotenv from 'dotenv';

dotenv.config();

export const config: DbConfig = {
  databaseConfig: {
    database: process.env.DB_DATABASE,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
  },
  databaseOptions: {
    host: process.env.HOST,
    port: Number(process.env.DB_PORT),
    dialect: 'mysql',
  },
};


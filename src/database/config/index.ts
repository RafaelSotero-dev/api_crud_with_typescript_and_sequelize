import { Sequelize } from 'sequelize';
import { config } from './config';

const dbDataBase = config.databaseConfig.database as string;
const dbUseName = config.databaseConfig.username as string;
const dbPass = config.databaseConfig.password as string;
const dbHost = config.databaseOptions.host as string;
const dbPort = config.databaseOptions.port as number;
const dbDialect = config.databaseOptions.dialect;

const sequelizeConnection = new Sequelize(dbDataBase, dbUseName, dbPass, {
  host: dbHost,
  port: dbPort,
  dialect: dbDialect,
});

export = sequelizeConnection;

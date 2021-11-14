import { DatabaseConfig } from './database.model';

export const DATABASE_CONNECTION = 'DATABASE_CONNECTION';

export const DB_CONFIG: DatabaseConfig = {
  host: process.env.DB_HOST,
  name: process.env.DB_NAME,
};

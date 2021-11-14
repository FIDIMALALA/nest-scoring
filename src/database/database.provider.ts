import * as mongoose from 'mongoose';
import { DATABASE_CONNECTION, DB_CONFIG } from './database.constant';

const { name, host } = DB_CONFIG;

export const databaseProviders = [
  {
    provide: DATABASE_CONNECTION,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(`mongodb://${host}/${name}`),
  },
];

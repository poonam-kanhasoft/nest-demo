// data-source.ts
import { DataSource } from 'typeorm';
import { Example } from './src/example/example.entity'; // adjust if path is different

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'nest',
  entities: [Example],
  migrations: ['src/migrations/*.ts'],
  synchronize: false,
});

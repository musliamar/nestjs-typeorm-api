import 'dotenv/config';
import * as path from 'path';
import { DataSource } from 'typeorm';

const config = new DataSource({
  type: 'mysql',
  host: process.env.MARIADB_HOSTNAME,
  port: Number(process.env.MARIADB_PORT),
  username: process.env.MARIADB_USERNAME,
  password: process.env.MARIADB_PASSWORD,
  database: process.env.MARIADB_DATABASE,
  entities: [path.resolve(`${__dirname}/**/**.entity{.ts,.js}`)],
  migrations: [path.resolve(`${__dirname}/database/seeders/*{.ts,.js}`)],
  migrationsTableName: 'seeders',
  logging: true,
  synchronize: true,
});

export default config;

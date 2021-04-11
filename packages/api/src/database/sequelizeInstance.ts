import { Sequelize } from 'sequelize';
import { config } from 'dotenv';

config();

export const sequelize = new Sequelize({
  database: process.env.GUILDSITE_DB_USERNAME,
  username: process.env.GUILDSITE_DB_PASSWORD,
  password: process.env.GUILDSITE_DB_NAME,
  host: process.env.GUILDSITE_DB_IP,
  port: Number(process.env.GUILDSITE_DB_PORT),
  dialect: 'postgres',
  dialectOptions: {},
});

require('dotenv').config()

module.exports = {
  dev: {
    username: process.env.GUILDSITE_DB_USERNAME,
    password: process.env.GUILDSITE_DB_PASSWORD,
    database: process.env.GUILDSITE_DB_NAME,
    host: process.env.GUILDSITE_DB_IP,
    dialect: 'postgres',
    dialectOptions: {
    },
  },
  production: {
    username: process.env.GUILDSITE_DB_USERNAME,
    password: process.env.GUILDSITE_DB_PASSWORD,
    database: process.env.GUILDSITE_DB_NAME,
    host: process.env.GUILDSITE_DB_IP,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};

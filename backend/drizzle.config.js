import { ENV } from "./src/config/env.js";

export default {
    schema: './src/db/schema.js',
    dialect: 'postgresql',
    dbCredentials: {
      url: ENV.DATABASE_URL,
      // ssl: {
      //   rejectUnauthorized: false,
      // },
    },
  };
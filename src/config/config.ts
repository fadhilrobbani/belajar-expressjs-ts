import 'dotenv/config';
const { DB_USERNAME, DB_PASSWORD, DB_HOSTNAME, DB_NAME, DB_DIALECT } =
  process.env;

const dbConfig = {
  username: DB_USERNAME,
  password: DB_PASSWORD,
  hostname: DB_HOSTNAME,
  name: DB_NAME,
  dialect: DB_DIALECT,
};
export default dbConfig;

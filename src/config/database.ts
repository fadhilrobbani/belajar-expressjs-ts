import mysql from 'mysql2/promise';
import dbConfig from './config';

const { username, password, hostname, name } = dbConfig;

const getConnection = async () => {
  const connection = await mysql.createConnection({
    host: hostname,
    user: username,
    password: password,
    database: name,
  });
  return connection;
};

export default getConnection;

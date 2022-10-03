import { Response, Request } from 'express';
import getConnection from '../config/database';
import response from '../util/response';

const findAllUser = async (req: Request, res: Response) => {
  try {
    const sql: string = 'SELECT * FROM users';
    const connection = await getConnection();
    const [row, field] = await connection.execute(sql);
    response(res, 200, 'OK', 'find all user was successfull', row);
  } catch (error) {
    response(res, 400, 'BAD_REQUEST', 'failed to get all user data');
  }
};

const createUser = async (req: Request, res: Response) => {
  const sql = `INSERT INTO users (id,username,email) VALUES (?,?,?)`;
  const value = [req.body.id, req.body.username, req.body.email];
  try {
    const connection = await getConnection();
    await connection.execute(sql, value);
    response(res, 200, 'OK', 'success to create user data');
  } catch (error) {
    response(res, 400, 'BAD_REQUEST', 'failed to create user data');
  }
};

export { findAllUser, createUser };

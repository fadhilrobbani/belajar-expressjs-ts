import { Response, Request } from 'express';
import { format } from 'mysql2';
import getConnection from '../config/database';
import response from '../util/response';

const findAllUser = async (req: Request, res: Response) => {
  try {
    const sql: string = 'SELECT * FROM users';
    const connection = await getConnection();
    const [row, field] = await connection.query(sql);
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
    await connection.query(sql, value);
    response(res, 200, 'OK', 'success to create user data');
  } catch (error) {
    response(res, 400, 'BAD_REQUEST', 'id user already created');
  }
};

const deleteUser = async (req: Request, res: Response) => {
  const querySearch: string = 'SELECT * FROM users where users.id = ?';
  const queryDelete: string = 'DELETE FROM users WHERE users.id = ?';
  const searchValue: string[] = [req.body.id];
  const deleteValue: string[] = [req.body.id];
  try {
    const connection = await getConnection();
    const [row, field] = await connection.query(querySearch, searchValue);

    if (row.toString()) {
      await connection.query(queryDelete, deleteValue);
      response(res, 200, 'OK', `success to delete users ${req.body.id}`);
      console.log(row);
    } else {
      response(res, 404, 'NOT_FOUND', 'failed to get id');
    }
  } catch (error) {
    response(res, 500, 'INTERNAL_SERVER_ERROR', 'failed to delete user');
  }
};

const editUser = async (req: Request, res: Response) => {
  const querySearch: string = 'SELECT * FROM users where users.id = ?';
  const queryUpdate: string = `UPDATE users SET ? WHERE id = ?`;

  //ngetest hasil query sql
  const testValue = [{ username: 'fadhil' }, '3'];
  const testing = format(queryUpdate, testValue);
  console.log('🤣 ' + testing);

  const searchValue: string[] = [req.body.id];
  const updateValue = [req.body.data, req.body.id];
  try {
    const connection = await getConnection();
    const [row, field] = await connection.query(querySearch, searchValue);

    if (row.toString()) {
      await connection.query(queryUpdate, updateValue);
      response(res, 200, 'OK', `success to edit users ${req.body.id}`);
      console.log(row);
    } else {
      response(res, 404, 'NOT_FOUND', 'failed to get id');
    }
  } catch (error) {
    response(res, 500, 'INTERNAL_SERVER_ERROR', 'failed to edit user');
  }
};
export { findAllUser, createUser, deleteUser, editUser };

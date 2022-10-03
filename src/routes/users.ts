import express from 'express';
import getConnection from '../config/database';
import { findAllUser, createUser } from '../controller/UserController';

const usersRouter = express.Router();

usersRouter.get('/users', (req, res) => {
  findAllUser(req, res);
});

usersRouter.post('/users', (req, res) => {
  createUser(req, res);
});

export default usersRouter;

import express from 'express';
import {
  findAllUser,
  createUser,
  deleteUser,
  editUser,
} from '../controller/UserController';

const usersRouter = express.Router();

usersRouter.get('/users', (req, res) => {
  findAllUser(req, res);
});

usersRouter.post('/users', (req, res) => {
  createUser(req, res);
});

usersRouter.delete('/users', (req, res) => {
  deleteUser(req, res);
});

usersRouter.put('/users', (req, res) => {
  editUser(req, res);
});

export default usersRouter;

import express, { Express } from 'express';
import {
  createNewUserController,
  getAllUsersController,
  getUserByIdController,
  updateUserByIdController,
  deleteUserByIdController,
} from '../controllers/userController';

const route: Express = express();

//C 
route.post('/', createNewUserController);

//R 
route.get('/', getAllUsersController);
route.get('/:id', getUserByIdController);

//U
route.put('/:id', updateUserByIdController);

//D
route.delete('/:id', deleteUserByIdController);


export default route;

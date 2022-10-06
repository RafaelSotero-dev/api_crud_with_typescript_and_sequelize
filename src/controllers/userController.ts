import { Response, Request } from 'express';
import UserService from '../services/UserService';
import { IupdateUser, IuserInput } from '../types/interfaces';

const userService = new UserService();

export const createNewUserController = async (
  req: Request<{}, {}, IuserInput>,
  res: Response,
) => {
  const result = await userService.createNewUser(req.body);
  res.status(201).json(result);
};

export const getAllUsersController = async (
  req: Request,
  res: Response,
) => {
  const result = await userService.findAllUsers();

  res.status(200).json(result);
};

export const getUserByIdController = async (
  req: Request,
  res: Response,
) => {
  const { id } = req.params;
  const result = await userService.findUserById(id);

  res.status(200).json(result);
};

export const updateUserByIdController = async (
  req: Request<{ id: any }, {}, IupdateUser>,
  res: Response,
) => {
  const { id } = req.params;
  const result = await userService.updateUser(id, req.body);

  res.status(200).json(result);
};

export const deleteUserByIdController = async (
  req: Request<{ id: any }>,
  res: Response,
) => {
  const { id } = req.params;
  const result = await userService.deleteUserById(id);

  res.status(200).json(result);
};

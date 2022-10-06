import User from '../database/models/User';
import ApiError from '../helpers/ApiError';
import {
  IupdateUser,
  IuserDb,
  IuserInput,
  IuserLogin,
} from '../types/interfaces';

let regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');

class UserService {
  async findAllUsers(): Promise<IuserDb[]> {
    const result = await User.findAll();

    if (!result.length) {
      throw new ApiError('no registered user', 204);
    }

    return result;
  }

  async findUserById(id: any): Promise<IuserDb> {
    const result = await User.findOne({
      where: { id },
      attributes: { exclude: ['password'] },
    });

    if (!result) {
      throw new ApiError('no registered user', 404);
    }

    return result;
  }

  async userExist({ email, password }: IuserLogin): Promise<IuserDb> {
    if (!email || !password) {
      throw new ApiError('fild name or password or email is missing!', 400);
    }
    if (!regex.test(email) || password.length < 6) {
      throw new ApiError('Invalid email or password!', 400);
    }

    const result = await User.findAll({
      attributes: {
        include: ['created_at', 'updated_at'],
      },
      where: { email: email, password: password },
    });

    return result[0];
  }

  async createNewUser(payload: IuserInput): Promise<IuserDb | null> {
    if (!payload.name || !payload.email || !payload.password) {
      throw new ApiError('fild name or password or email is missing!', 400);
    }
    if (!regex.test(payload.email) || payload.password.length < 6) {
      throw new ApiError('Invalid email or password!', 400);
    }
    const login: IuserLogin = {
      email: payload.email,
      password: payload.password,
    };
    const user = await this.userExist(login);

    if (user) {
      throw new ApiError('User already exists!', 400);
    }

    const result = await User.create({
      name: payload.name,
      email: payload.email,
      password: payload.password,
    });

    const newUser = await User.findOne({
      where: { id: result.id },
      attributes: { exclude: ['password'] },
    });
    return newUser;
  }

  async updateUser(id: any, payload: IupdateUser): Promise<IuserDb> {
    if (!id) {
      throw new ApiError('id not informed', 400);
    }

    if (!Object.entries(payload).length) {
      throw new ApiError('missing information', 400);
    }

    const result = await User.update(payload, {
      where: { id },
    });

    if (!result) {
      throw new ApiError('no registered user', 404);
    }

    const newUser = await User.findOne({
      where: { id },
      attributes: { exclude: ['password'] },
    });

    if (!newUser) {
      throw new ApiError('no registered user', 404);
    }

    return newUser;
  }

  async deleteUserById(id: any) {
    if (!id) {
      throw new ApiError('id not informed', 400);
    }

    await User.destroy({
      where: { id }
    });

    return { message: `User id ${id} has been removed!` };
  };
}

export default UserService;

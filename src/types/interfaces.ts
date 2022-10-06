import { Optional } from 'sequelize';

export interface IuserDb {
  id: number;
  name: string;
  email: string;
  password?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IuserLogin {
  email: string;
  password: string;
}

export interface IupdateUser {
  name?: string;
  email?: string;
  password?: string;
}

export interface IuserInput
  extends Optional<IuserDb, 'id' | 'createdAt' | 'updatedAt'> {}
export interface IuserOutPut extends Required<IuserDb> {}

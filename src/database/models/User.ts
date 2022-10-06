import { Model, DataTypes } from 'sequelize';
import { IuserDb, IuserInput } from '../../types/interfaces';
import sequelizeConnection from '../config';

class User extends Model<IuserDb, IuserInput> implements IuserDb {
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;

  //timestaps
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: new Date(),
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: new Date(),
    },
  },
  {
    sequelize: sequelizeConnection,
    tableName: 'users',
    underscored: true,
  },
);

export default User;

import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";

interface UserAttributes {
  id: string;
  email: string;
  name: string;
  created_at: Date;
  updated_at: Date;
}

class User extends Model<UserAttributes> implements UserAttributes {
  public id!: string;
  public email!: string;
  public name!: string;
  public created_at!: Date;
  public updated_at!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: "users",
    timestamps: true,
    underscored: true,
  }
);

export default User;

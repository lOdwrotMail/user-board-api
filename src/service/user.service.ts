import { User } from "../model";

const getAll = () => {
  return User.findAll({
    order: ["name"],
  });
};

const getById = (userId: number) => {
  return User.findByPk(userId);
};

const addOne = (user: Pick<User, "name" | "carColorId">) => {
  return User.create(user).catch((error) => {
    console.log("Unable to create User", error);
  });
};

export const userService = { getAll, getById, addOne };

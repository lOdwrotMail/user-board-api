import { User } from "../model";
import { QueryParams } from "../type";

const getAll = ({
  perPage,
  pageNumber,
  order,
  orderBy
}: Required<QueryParams>) => {
  return User.findAndCountAll({
    limit: perPage,
    offset: perPage * pageNumber,
    order: [
      [orderBy, order]
    ]
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

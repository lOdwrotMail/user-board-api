import { User } from "../type";

export const users: User[] = [
  { id: 1, name: "Joe Biden", carColorId: 5 },
  { id: 2, name: "Elon Musk", carColorId: 4 },
  { id: 3, name: "Pan Roman", carColorId: 2 },
];

const getAll = () => {
  return users;
};

const getById = (userId: number) => {
  return users.find((v) => v.id === userId);
};

const addOne = (user: Omit<User, "id">) => {
  const userToSave = { ...user, id: users.length + 1 };
  users.push(userToSave);
  return userToSave;
};

export const userService = { getAll, getById, addOne };

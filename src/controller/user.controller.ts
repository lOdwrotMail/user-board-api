import { ControllerAction } from "./controller.types";
import { userService } from "../service/user.service";

const getAll: ControllerAction = async (req, res) => {
  res.send(await userService.getAll());
};

const getOne: ControllerAction = async (req, res) => {
  const id = Number(req.params.id);
  const user = await userService.getById(id);

  if (!user) {
    res.sendStatus(404);
    return;
  }

  res.send(user);
};

const addOne: ControllerAction = async (req, res) => {
  const { name, carColorId } = req.body;
  if (!name || !carColorId) {
    res.status(422);
    res.send("Required field missing");
    return;
  }
  const user = await userService.addOne({ name, carColorId });
  if (!user) res.sendStatus(500);

  res.status(201);
  res.send(user);
};

export const userController = { getAll, getOne, addOne };

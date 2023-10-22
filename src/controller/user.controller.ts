import { ControllerAction } from "./controller.types";
import { userService } from "../service/user.service";

const getAll: ControllerAction = (req, res) => {
  res.send(userService.getAll());
};

const getOne: ControllerAction = (req, res) => {
  const id = Number(req.params.id);
  const user = userService.getById(id);

  if (!user) {
    res.sendStatus(404);
    return;
  }

  res.send(user);
};

const addOne: ControllerAction = (req, res) => {
  const { name, carColorId } = req.body;
  if (!name || !carColorId) {
    res.status(422);
    res.send("Required field missing");
    return;
  }
  userService.addOne({ name, carColorId });
  res.sendStatus(201);
};

export const userController = { getAll, getOne, addOne };

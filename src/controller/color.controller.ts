import { colorService } from "../service/color.service";
import { parseParams } from "./controller.helpers";
import { ControllerAction } from "./controller.types";

const getAll: ControllerAction = async (req, res) => {
  const params = req.query;
  res.send(await colorService.getAll(parseParams(params)));
};

export const colorController = { getAll };

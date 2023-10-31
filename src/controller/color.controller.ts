import { colorService } from "../service/color.service";
import {
    colorValidator
} from "../validators/color.validator";
import { parseParams } from "./controller.helpers";
import { ControllerAction } from "./controller.types";

const getAll: ControllerAction = async (req, res) => {
  const params = req.query;
  try {
    colorValidator.checkQueryParams(params);
  } catch (e: any) {
    res.status(400);
    return res.send(e.message);
  }
  res.send(await colorService.getAll(parseParams(params)));
};

export const colorController = { getAll };

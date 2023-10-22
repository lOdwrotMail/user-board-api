import { colorService } from "../service/color.service";
import { ControllerAction } from "./controller.types";

const getAll: ControllerAction = (req, res) => {
    res.send(colorService.getAll());
};

export const colorController = { getAll };


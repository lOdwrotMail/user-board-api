import { colorService } from "../service/color.service";
import { ControllerAction } from "./controller.types";

const getAll: ControllerAction = async (req, res) => {
    res.send(await colorService.getAll());
};

export const colorController = { getAll };


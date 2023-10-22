import { Router } from "express";
import { colorController } from "../controller/color.controller";

export const colorRouter = Router();

colorRouter.get("/", colorController.getAll);

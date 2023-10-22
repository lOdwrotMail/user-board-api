import express, { Router } from "express";
import { userController } from "../controller/user.controller";

export const userRouter = Router();

userRouter.get("/", userController.getAll);
userRouter.get("/:id", userController.getOne);
userRouter.post("/", express.json(), userController.addOne);

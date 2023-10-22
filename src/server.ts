import express from "express";
import { colors, users } from "./data";
import cors from "cors";
import { userController } from "./controller/user.controller";
import { colorController } from "./controller/color.controller";
import { userRouter } from "./router/user.router";
import { colorRouter } from "./router/color.router";

const PORT = 5000;
const CLIENT_URL = "http://localhost:3000";
const app = express();

app.use(
  cors({
    origin: CLIENT_URL,
  })
);
app.use(express.json());

app.use('/users', userRouter);
app.use('/colors', colorRouter);

app.listen(PORT, () => {
  console.log(`API is ready on http://localhost:${PORT}`);
});

import cors from "cors";
import express from "express";
import { colorRouter } from "./router/color.router";
import { userRouter } from "./router/user.router";
import dotenv from 'dotenv';

dotenv.config();

const PORT = Number(process.env.PORT);
const CLIENT_URL = process.env.CLIENT_URL;
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

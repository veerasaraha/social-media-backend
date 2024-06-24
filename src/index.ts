import express, { Express, Request } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";

import { PORT } from "./env";
import authRouter from "./routes/auth.router";

const app: Express = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan("tiny"));

app.use("/v1/auth", authRouter);

app.listen(PORT, () => {
  console.log("App is listening on port 9090");
});

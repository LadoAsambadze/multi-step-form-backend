import express from "express";
import connect from "./database/mongo.js";
import { allData } from "./controllers/base-controller.js";
import bodyParser from "body-parser";
import cors from "cors";
import swaggerMiddleware from "./middlewares/middlewares.js";
import dotenv from "dotenv";

const app = express();
connect();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();
app.use("/postbase", allData);
app.use("/", ...swaggerMiddleware());
app.listen(3000);

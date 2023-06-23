import express from "express";
import connect from "./database/mongo.js";
import { allData } from "./controllers/base-controller.js";
import bodyParser from "body-parser";
import cors from "cors";
import swaggerMiddleware from "./middlewares/middlewares.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
connect();
app.use(bodyParser.json());
app.use(cors());

app.use("/postbase", allData);
app.listen(3000);

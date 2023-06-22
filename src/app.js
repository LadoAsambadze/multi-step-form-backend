import { express } from "express";
import connect from "./database/mongo/js";

const app = express();
connect();
app.listen(3000);

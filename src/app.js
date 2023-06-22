import express from "express";
import connect from "./database/mongo.js";

const app = express();
connect();

console.log("lado");
app.listen(3000);

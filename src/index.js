import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from "body-parser";
import api from "./api/api.js";
import db from "./database/database.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json({extended : true}))
db();
app.use('/',api);

app.listen(PORT, () => console.log(`${process.env.HOST}:${PORT}`));
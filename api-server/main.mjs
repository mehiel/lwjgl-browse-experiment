import express from "express";
import compress from "compression";
import cors from "cors";
import bodyParser from "body-parser";
import { fsPathContents } from "./fs";

const app = express();

app.use(
  cors({
    credentials: true,
    origin: (origin, callback) => callback(null, true)
  })
);
app.use(compress());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const api = express.Router();
api.get("/list", fsPathContents);
app.use("/", api);

const port = process.env.API_PORT || 8003;
app.listen(port);

console.log(`API is now served at http://localhost:${port}.`);

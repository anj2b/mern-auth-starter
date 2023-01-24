import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import auth from "./routes/auth"
import cors from 'cors';
import * as dotenv from 'dotenv'
dotenv.config()

const app = express();

app.use(cors());

const urlendcodedparser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json(), urlendcodedparser);

app.use('/auth', auth);

const dbURI = process.env.MONGO_URI;

mongoose.connect(dbURI)
    .then((res) => {
        app.listen(process.env.port, () => console.log(process.env.port))
    })
    .catch((err: Error) => console.log(err))

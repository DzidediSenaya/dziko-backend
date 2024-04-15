import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { router } from "../routes/allroutes.js";

dotenv.config();
const app = express();
app.use(express.json())
app.use(router)
const mongoUri = process.env.MONGO_URI;

mongoose.connect(mongoUri).then(() => {
    console.log('Database connected');
}).catch((error) => console.log(error));


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`DZIKO API is running! ${PORT}`);
});

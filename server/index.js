import { config } from "dotenv";
config();
import express from "express";
import authRoutes from "./routes/auth.routes.js";
import DB from "./lib/db.js";

const app = express();

app.use(express.json());

const db = new DB(process.env.MONGO_URI)
db.connect()

app.use('/api/auth', authRoutes);


app.listen(8000, console.log("Server Running in 8000"));

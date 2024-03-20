import { config } from "dotenv";
config();
import express from "express";
import authRoutes from "./routes/auth.routes.js";
import DB from "./lib/db.js";
import routeNotFound from "./middlwares/route-not-found.middlware.js";
import cors from "cors"

const app = express();


// express middlwares
app.use(express.json());
app.use(cors());


// connect db
const db = new DB(process.env.MONGO_URI)
db.connect()

// authetification routes
app.use('/api/auth', authRoutes);


// non existing routes
app.use(routeNotFound);


app.listen(8000, console.log("Server Running in 8000"));

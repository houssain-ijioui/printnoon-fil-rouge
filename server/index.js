import { config } from "dotenv";
config();
import express from "express";
import authRoutes from "./routes/auth.routes.js";
import userDashboardRoutes from "./routes/userDashboard.routes.js";
import DB from "./lib/db.js";
import routeNotFound from "./middlwares/route-not-found.middlware.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();


// express middlwares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: true }));
app.use(cookieParser());


// connect db
const db = new DB(process.env.MONGO_URI)
db.connect()

// authetification routes
app.use('/api/auth', authRoutes);

// user dashboard routes
app.use('/user/dashboard', userDashboardRoutes);


// non existing routes
app.use(routeNotFound);


app.listen(8000, console.log("Server Running in 8000"));

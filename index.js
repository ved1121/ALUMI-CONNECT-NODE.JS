
import express  from "express";
import cors from 'cors';
import cookieParser from "cookie-parser";
import dotenv from 'dotenv';
import morgan from "morgan";
import connectDB from "./config/db_config.js";
import authRoutes from "./routes/auth_routes.js";



//Dot ENV config
dotenv.config();

// mongodb connection
connectDB();

//rest object
const app = express();

//port
const PORT = process.env.PORT || 8040;
//listen
app.listen(PORT, () => {
  console.log(
    `Node Server Running In ${process.env.DEV_MODE} Mode on port no ${PORT}`
      
  );
});

//MIDLLEWARES
app.use(express());
app.use(cors());
app.use(morgan('dev'));
app.use(cookieParser());



//ROUTES
app.use("/", authRoutes);
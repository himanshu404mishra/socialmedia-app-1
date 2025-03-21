import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { configDotenv } from "dotenv";

// routes
import AuthRoute from "./routes/AuthRoutes.js"
import UserRoute from "./routes/UserRoutes.js"
import PostRoute from "./routes/PostRoutes.js"

const app = express();

// Middlewares
app.use(bodyParser.json({ limit: "30mb", extended: "true" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: "true" }));

configDotenv()

mongoose
    .connect(
        process.env.MONGODB_URI
    )
    .then(() => {
        app.listen(process.env.PORT, () => console.log(`Listening at ${process.env.PORT}...`));
    })
    .catch((error)=>{
        console.log(error)
    });


    // usageg of routes

    app.use('/auth', AuthRoute)
    app.use('/user', UserRoute)
    app.use('/post', PostRoute)
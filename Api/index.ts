import express, {Express, Request, Response, Router} from "express";
import core from "./src/core";
import dotenv from "dotenv";
dotenv.config()


const app   : Express               = express();
const port  : string | undefined    = process.env.PORT;

app.use((req:Request, res:Response, next)=>{
        console.log(new Date().toISOString());
        next();
    }
)


app.use("/",core)

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at:\n    http://localhost:${port}`);
})
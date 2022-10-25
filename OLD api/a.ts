import express, {Express, Request, Response, Router} from "express";
import core from "./src/core";
import dotenv from "dotenv";
import { Schema, model, connect } from 'mongoose';
dotenv.config()


const app   : Express               = express();
const port  : string | undefined    = process.env.PORT;
const main  : string = "mongodb+srv://deadtrix:lordvile@nightmarecore.tf3tz.mongodb.net/?retryWrites=true&w=majority"
app.use((req:Request, res:Response, next)=>{
        console.log(new Date().toISOString());
        next();
    }
)


setTimeout(() => {
    
    
    connect(main)
    .then(()=>{console.log("connexted");})
    .catch((e)=>{console.log(e);})
    
    
  }, 6000);

app.use("/",core)

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at:\n    http://localhost:${port}`);
})
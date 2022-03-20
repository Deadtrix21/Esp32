// System Imports
import express, {Express, Request, Response, Router} from "express";
import dotenv from 'dotenv';
import CoreRouter from "./core";

// Load the Config Into the app
dotenv.config();


const app   : Express           = express();
const port  : string|undefined  = process.env.PORT
const rout  : Router            = express.Router();

app.use((req: Request, res:Response, next) => {
    console.log(`Time: ${Date.now()}`)
    next()
})

app.get('/', (
    req    : Request, 
    res    : Response) => 
    {
        res.send('Express + TypeScript Server');
    }
);



app.use("/system", CoreRouter)


app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
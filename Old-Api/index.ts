// System Imports
import express, {Express, Request, Response, Router} from "express";
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

//  Modules
import CoreRouter from "./core";


// Load the Config Into the app
dotenv.config();
const app   : Express           = express();
const port  : string|undefined  = process.env.PORT


// Uses Systems
app.use(bodyParser.json());
app.use("/system", CoreRouter)

app.use((req: Request, res:Response, next) => {
    console.log(`Time: ${Date.now()}`)
    next()
})


// Index Page
app.get('/', (
    req    : Request, 
    res    : Response) => 
    {
        res.send('Express + TypeScript Server');
});




// Launch The App
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
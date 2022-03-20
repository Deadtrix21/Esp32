import express, {Express, Request, Response, Router} from "express";
import playground from "./playground";
import system from "./system";


const core : Router = express.Router();

core.use("/",system)
core.use("/",playground)

export default core
import express, {Express, Request, Response, Router} from "express"

const app   : Express = express();
const rout  : Router = express.Router();

rout.get("",(req: Request, res:Response, next) => {
    res.status(404).sendStatus(404)
})

const API = rout;
export default API
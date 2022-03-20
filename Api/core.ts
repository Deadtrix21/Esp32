import express, {Express, Request, Response, Router} from "express"

const app   : Express = express();
const rout  : Router = express.Router();

//Import ROUTES
import API from "./routes/V1";
import Tester from "./routes/Test";
import rrout from "./routes/birds";


rout.use("/V1",API)
rout.use("/T",Tester)
rout.use("/birds",rrout)



const CoreRouter = rout;
export default CoreRouter
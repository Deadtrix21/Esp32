import express, {Express, Request, Response, Router} from "express"
import master_test from './test/root';

const app   : Express = express();
const rout  : Router = express.Router();

rout.use("/graph", master_test)

const Tester = rout;
export default Tester
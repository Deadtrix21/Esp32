import express, {Express, Request, Response, Router} from "express"
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import schema from './test/master';

const app   : Express = express();
const rout  : Router = express.Router();
let list: string[] = [
"a",
"b",
"c",
"d",
]
let intlist: number[] = []

rout.use("/graph", graphqlHTTP({
	schema,
	rootValue :{
		events: () =>{
			return list
		},
		createEvent: (args: any) => {
			const eventName = args.name
			list.push(eventName)
			return eventName
		},
		addValue: (args:any)=>{
			const val = args.val
			intlist.push(val)
			return null
		},
		sumValue:()=>{
			let sum:number = 0
			intlist.forEach(element => {
				sum += element
			});
			return sum
		}
	},
	graphiql : false,
}
))

const Tester = rout;
export default Tester

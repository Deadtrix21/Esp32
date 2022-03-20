import express, {Express, Request, Response, Router} from "express";
import {graphqlHTTP} from "express-graphql"
import  schema_1  from "./Playgrounds/Example";
import { schema } from "./Playgrounds/gen1";
const playground : Router = express.Router();


playground.use('/graphql', graphqlHTTP({schema:schema_1,graphiql:true}))
playground.use('/grap', graphqlHTTP({schema:schema,graphiql:true}))

export default playground
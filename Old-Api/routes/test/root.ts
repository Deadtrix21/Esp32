import { graphqlHTTP } from "express-graphql";
import BasicCalls from "./root/class";
import schema from "./root/schematic";



const bc = new  BasicCalls()
const graphiql_val: boolean = false





const root = {
    events: () => {
        return bc.events()
    },
    createEvent(args:any){
        const Event = {
            _id:Math.random().toString(),
            title: args.title,
            description: args.description,
            price: args.price,
            date: new Date().toISOString()            
        }
        return bc.addEvent(Event)


        
    },
    deleteEvent(args:any){
        const EventName = args.name
        return bc.removeEvent(EventName)
    }
}



const master_test = graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: graphiql_val
})

export default master_test
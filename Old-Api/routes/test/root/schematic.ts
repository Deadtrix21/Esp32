import { buildSchema } from "graphql";
const _1:string = "RootQuery"
const _2:string = "RootMutation"

const Types = `
    type Event {
        _id         :   ID!
        title       :   String!
        description :   String!
        price       :   Float!
        date        :   String! 
    }
`
const _query = `type ${_1} {
    events: [Event!]!
    sumValue: Int!
}`
const _mutation = `type ${_2} {
    createEvent(
        title       : String!, 
        description : String!,
        price       : Float!, 
    ):Int!
    deleteEvent(name:String):Int!
}`





const schema:any = buildSchema(`
    ${Types}
    ${_query}
    ${_mutation}
    schema {
        query: ${_1}
        mutation: ${_2}
    }
`)

export default schema
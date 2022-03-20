import { schemaComposer, toInputObjectType } from "graphql-compose";
import { filter, find } from "lodash";

const auth = [
    { _id: 1, firstName: "Tom", lastName: "Coleman" },
    { _id: 2, firstName: "Sashko", lastName: "Stubailo" },
    { _id: 3, firstName: "Mikhail", lastName: "Novikov" },
];

function getRandomInt(min:number, max:number) : number{
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min; 
}

const UserTC = schemaComposer.createObjectTC({
    name: "User",
    fields:{
        _id         : "Int!",
        firstName   : "String",
        lastName    : "String",
        email       : "String",
        password    : "String"
    }

})



const InputTC = schemaComposer.createObjectTC({
    name: 'UserConnectDataInput',
    fields: {
      accessToken: 'String!'
    }
  });
const InputITC = toInputObjectType(InputTC);



schemaComposer.Query.addFields({
    User: {
        type: UserTC,
        args: { input: InputITC },
        resolve: (_, args) => {
            const id = args.id
            return find(auth, {_id:id})
        },
    }
})

schemaComposer.Mutation.addFields({
    SignUpUser:{
        type: UserTC,
        args: {
            firstName   : "String",
            lastName    : "String",
            email       : "String",
            password    : "String"
        },
        resolve:(_, args)=>{
            const user = {
                _id : getRandomInt(3, 2000),
                firstName:args.firstName , 
                lastName:args.lastName,
                email:args.email,
                password:args.password, 
            }
            auth.push(user)
            return user
        }
    }
})

export const schema = schemaComposer.buildSchema();

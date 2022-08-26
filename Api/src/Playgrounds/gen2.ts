import { schemaComposer } from "graphql-compose";
import { filter, find } from "lodash";

class Gen2{
    UserCompose:any = null



    constructor(){
        this.SetupCompose();
        this.SetupResolve();
    }

    SetupResolve():void {

    }
    SetupCompose():void {
        this.ComposeUserSchema();
    }


    ComposeUserSchema():void {
        this.UserCompose = schemaComposer.createObjectTC({
            name:"UserAccount",
            fields: {
                _id         : "Int!",
                firstName   : "String",
                lastName    : "String",
                email       : "String",
                password    : "String"
            },
        })
    }
}
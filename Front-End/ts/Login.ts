interface User{
    FirstName   : string,
    LastName    : string,
    Email       : string,
    Password    : string,
}

interface Password{
    rPassword : string,
    fPassword : string
}





// classes


class Person implements User{
    FirstName   : string
    LastName    : string
    Email       : string
    Password    : string

    constructor(first:string = "", last:string = "", email:string = "", pws:string=""){
        this.FirstName = first
        this.LastName = last
        this.Email = email
        this.Password = pws
    }
}


class PasswordConfirm implements Password{
    fPassword :string = ""
    rPassword :string = ""

    constructor(){}
    
    public set_f (fpass:string) {
        this.fPassword = fpass
    }
    public set_rpass (rpass:string){
        this.rPassword = rpass
    }
    public match (): boolean{
        if (this.fPassword != this.rPassword){return false}
        else {return true}
    }
}


interface iFormRules{
    VerifyName  (val :string): string| void,
    VerifyEmail (val :string): string| void
}

class FormRules implements iFormRules{
    constructor(){}
    public VerifyName (val : string) : string | void {
        if (val == null || val == ''){return "This field is required."}
        else if (val.length < 3){return "This needs to be more than 3 char."}
        return;
    }
    
    public VerifyEmail (val :string): string | void{
        if (val == null || val == ''){return 'E-mail is required.'}
        else if (/.+@.+/.test(val)){return 'E-mail must be valid.'}
        return;
    }
}
//Exports
export default {Person, PasswordConfirm, FormRules};
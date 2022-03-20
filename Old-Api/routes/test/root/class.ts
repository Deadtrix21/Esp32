class BasicCalls{
    public Events:any[] = [
        {
            "_id": "0.6510449784449364",
            "title": "Death",
            "description": "This is Fun",
            "price": 10,
            "date": "2022-03-20T20:24:27.567Z"
        },
        {
            "_id": "0.45885765012776125",
            "title": "Death",
            "description": "This is Fun",
            "price": 10,
            "date": "2022-03-20T20:24:35.488Z"
        },
    ]


    public events():string[]{
        return this.Events
    }


    public addEvent(obj:any):number{
        try {
            this.Events.push(obj)
        } catch (error) {
            return 1;
        }
        return 0
    }


    public removeEvent(name:string=""):number
    {
        let action  :boolean    = false
        let _eve_   :string[]   =[]
        try {
            for (let index = 0; index < this.Events.length; index++) {
                let element = this.Events[index];
                if (element === name){action=true}
                else{_eve_.push(element)}
            }
        } catch (error) {return 1}
        if (action == false){return 2}
        this.Events = _eve_
        return 0;
    }
}

export default BasicCalls
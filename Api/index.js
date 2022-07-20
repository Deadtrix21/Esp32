import ExpressMainFunction from 'express';
const { express } = ExpressMainFunction;

const application = ExpressMainFunction()
const port = 3000



application.get("/", (req, res)=>{res.send('Hello World!')})
application.get("/index", (req, res)=>{res.send('IndexPage')})


application.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    }
)
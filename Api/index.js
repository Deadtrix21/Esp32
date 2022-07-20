import ExpressMainFunction from 'express';
const { express } = ExpressMainFunction;

const ExpressApplication = ExpressMainFunction()
const ExpressRouter = ExpressMainFunction.Router()
const port = 3000


// Example Using Router
import birds from "../Api/birds.js"; 
ExpressApplication.use('/birds', birds)


ExpressApplication.get('/', (req, res) => {
    res.send('hello world')
  })

ExpressApplication.listen(port, () => {
    console.log(`Example app listening at: \nhttp://localhost:${port}`)
    }
)
import Express from 'express';
const { express } = Express;

const application = express()
const port = 3000






application.get("/", (req, res)=>{res.send('Hello World!')})

application.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    }
)
// Router in Action!!!!!!
//! This is a core Example
//? So most of this is just a template on what we will be working on
import express, {Express, Request, Response, Router} from "express"


const app   : Express = express();
const rrout  : Router = express.Router();

// define the home page route
rrout.get('/', (req, res) => {
  res.send('Birds home page')
})
// define the about route
rrout.get('/about', (req, res) => {
  res.send('About birds')
})

export default rrout;
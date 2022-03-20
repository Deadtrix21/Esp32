// Router in Action!!!!!!
//! This is a core Example
//? So most of this is just a template on what we will be working on

import express, {Express, Request, Response, Router} from "express"
const app   : Express = express();
const rout  : Router = express.Router();

// middleware that is specific to this router
rout.use((req, res) => {
  console.log('Time: ', Date.now())
})
// define the home page route
rout.get('/', (req, res) => {
  res.send('Birds home page')
})
// define the about route
rout.get('/about', (req, res) => {
  res.send('About birds')
})

export default rout;
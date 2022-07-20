// Router in Action!!!!!!
//! This is a core Example
//? So most of this is just a template on what we will be working on


import ExpressMainFunction from 'express';
const { express } = ExpressMainFunction;

const ExpressApplication = ExpressMainFunction()
const ExpressRouter = ExpressMainFunction.Router()

// middleware that is specific to this router
ExpressRouter.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
ExpressRouter.get('/', (req, res) => {
  res.send('Birds home page')
})
// define the about route
ExpressRouter.get('/about', (req, res) => {
  res.send('About birds')
})

export default ExpressRouter;
import express from "express";

const router = express.Router()

const animals = [
  {
    id: 1,
    firstName: "dave",
    lastName: "Smith",
    age: 25
  },
  {
    id: 2, 
    firstName: "holly",
    lastName: "Smith",
    age: 24
  }
]

//all routes in here start with /users
//browsers can only make get requests, for anything else use postman.
router.get('/', (req, res) => {
  console.log(animals)
  
  res.send(animals)
})


export default router
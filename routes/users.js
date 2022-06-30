import express from "express";
import { v4 as uuidv4 } from 'uuid';

const router = express.Router()

const users = [
  {
    firstName: "John",
    lastName: "Smith",
    age: 25
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    age: 24
  }
]

//all routes in here start with /users
//browsers can only make get requests, for anything else use postman.
router.get('/', (req, res) => {
  res.send(users)
})

router.post('/', (req, res) => {

 const user = req.body

 users.push({ ...user, id: uuidv4()})

 res.send(`user with the name ${user.firstName} added to the database`)
})

export default router
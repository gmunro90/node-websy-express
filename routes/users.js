import express from "express";

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
 users.push(user)

 res.send(`user with the name ${user.firstName} added to the database`)
})

export default router
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
router.get('/', (req, res) => {
  console.log(users)
  
  res.send('helloooo')
})

export default router
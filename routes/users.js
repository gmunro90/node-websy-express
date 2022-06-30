import express from "express";

const router = express.Router()

//all routes in here start with /users
router.get('/', (req, res) => {
  res.send('helloooo')
})

export default router
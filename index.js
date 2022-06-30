import express from 'express'
import bodyParser from 'body-parser'

import usersRoutes from "./routes/users.js";
import animalsRoutes from "./routes/animals.js";

const app = express()
const PORT = 5000

app.use(bodyParser.json())

app.use('/users', usersRoutes)
app.use('/animals', animalsRoutes)

app.get('/', (req, res) => {
  res.send('Hello from homepage')
})

app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));

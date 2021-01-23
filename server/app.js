const express = require('express')
const app = express()
const port = 3000

const db = require('./db')
const profesorRouter = require('./routes/Profesor')

app.use(express.json())

db.on('error', console.error.bind(console,'connection error: '));

app.use(profesorRouter)

app.listen(port, () => {
   console.log(`Port ${port} is listening`);
})

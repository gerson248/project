const express = require('express')
const app = express()
const port = 3000

const db = require('./db')
const profesorRouter = require('./routes/Profesor')
const studentRouter = require('./routes/Student')
const subjectRouter = require('./routes/Subject')

app.use(express.json())

db.on('error', console.error.bind(console,'connection error: '));

app.use(profesorRouter)
app.use(studentRouter)
app.use(subjectRouter)

app.listen(port, () => {
   console.log(`Port ${port} is listening`);
})

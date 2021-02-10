const express = require('express')
const app = express()

const db = require('./db')
const subjectRouter = require('./routes/Subject')
const userRouter = require('./routes/User')
const saleRouter = require('./routes/Sale')

db.on('error', console.error.bind(console,'connection error: '));

app.use(express.json())

app.use('/api', subjectRouter)
app.use('/api', userRouter)
app.use('/api', saleRouter)

module.exports = app

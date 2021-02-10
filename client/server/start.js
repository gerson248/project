const app = require('./server')
const port = 3000

app.listen(port, () => {
   console.log(`Port ${port} is listening`);
})

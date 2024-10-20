const express = require('express')
const app = express()
const port = 5000
const mongoDB = require('./db')

mongoDB()

app.use((req,res,next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173" || "https://team-up-six.vercel.app/login")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})


app.use(express.json())
app.use('/api', require('./routes/CreateUser'))
app.use('/api', require('./routes/CreateProfile'))
app.use('/api', require('./routes/CreateEvent'))


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
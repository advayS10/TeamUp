const express = require('express')
const app = express()
const port = 5000
const mongoDB = require('./db')
const cors = require('cors')

mongoDB()

const allowedOrigins = [ "http://localhost:5173" , "https://team-up-six.vercel.app", "https://backend-18fd0ca8h-advays-projects-48a8343d.vercel.app/"]

// app.use((req,res,next) => {
//   res.setHeader("Access-Control-Allow-Origin", allowedOrigins)
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   )
//   next()
// })

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,  // Allows cookies from frontend
}));

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
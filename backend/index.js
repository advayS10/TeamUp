const express = require('express')
const app = express()
const port = 5000
const mongoDB = require('./db')
const cors = require('cors')
const dotenv = require('dotenv');
dotenv.config();

const path = require('path')

mongoDB()

const allowedOrigins = [ 
  "http://localhost:5173" 
]


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
app.use('/api', require('./routes/CreateInvite'))


if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/dist')))
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"))
  })
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
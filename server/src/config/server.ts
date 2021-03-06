require('dotenv').config()

import cors from 'cors'
import express from 'express'
import path from 'path'
import serveStatic from 'serve-static'

const app = express()

const whitelist = [
  'localhost:3000',
  `localhost:${process.env.PORT || 5000}`,
  process.env.HEROKU_URL
]

const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin.headers.host)
    if (whitelist.indexOf(origin.headers.host) !== -1 || !origin) {
      console.log("Origin acceptable")
      callback(null, true)
    } else {
      console.log("Origin rejected")
      callback(new Error('Not allowed by CORS - ' + origin.headers.host))
    }
  }
}

app.use(express.json())
app.use(cors(corsOptions.origin))
app.use(serveStatic(__dirname + '/client/build'))

app.get("/api/hello", (req, res) => {
  res.send({ message: "Hello World!" })
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')))
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  });
}

app.listen(
  process.env.PORT || 4000,
  () => console.log(`Server listening on port ${process.env.PORT || 4000}`)
)

import cors from 'cors'
import express from 'express'

const app = express()

const PORT: string | number = process.env.PORT || 5000

app.use(cors())

app.get("/api/hello", (req, res) => {
  res.send({ message: "Hello World!" })
})

app.listen(PORT, () => console.log(`hosting @${PORT}`))
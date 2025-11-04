import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.js'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.get('/api/hello', (req, res) => res.json({ message: 'Hello from chetan backend!' }))
app.use('/api/auth', authRoutes)

const port = process.env.PORT || 4000
app.listen(port, ()=> console.log(`Server running on ${port}`))

import jwt from 'jsonwebtoken'
import { users } from '../data/users.js'

const JWT_SECRET = process.env.JWT_SECRET || 'secret'

export async function login(req, res){
  const { email, password } = req.body
  const user = users.find(u => u.email === email && u.password === password)
  if(!user) return res.status(401).json({ message: 'Invalid credentials' })

  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' })
  res.json({ token })
}

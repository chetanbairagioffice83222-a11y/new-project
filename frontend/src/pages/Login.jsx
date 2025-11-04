import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Login(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const nav = useNavigate()

  const submit = async (e)=>{
    e.preventDefault()
    try{
      const res = await axios.post('/api/auth/login', { email, password })
      // store token if present
      localStorage.setItem('token', res.data.token)
      nav('/')
    }catch(err){
      setError(err.response?.data?.message || 'Login failed')
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      <form onSubmit={submit} className="space-y-3">
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="w-full p-2 border rounded" />
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" className="w-full p-2 border rounded" />
        <div>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded">Sign in</button>
        </div>
        {error && <div className="text-red-600">{error}</div>}
      </form>
    </div>
  )
}

import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home(){
  const [message, setMessage] = useState('Loading...')

  useEffect(()=>{
    axios.get('/api/hello')
      .then(r => setMessage(r.data.message))
      .catch(()=> setMessage('Could not reach backend'))
  },[])

  return (
    <div>
      <h1 className="text-2xl font-bold">Welcome</h1>
      <p className="mt-4">Backend says: {message}</p>
    </div>
  )
}

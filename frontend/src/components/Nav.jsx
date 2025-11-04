import { Link } from 'react-router-dom'

export default function Nav(){
  return (
    <nav className="bg-white shadow p-4">
      <div className="max-w-4xl mx-auto flex justify-between">
        <div className="font-bold">Fullstack Starter</div>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/login" className="hover:underline">Login</Link>
        </div>
      </div>
    </nav>
  )
}

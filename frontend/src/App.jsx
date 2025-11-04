import { Outlet } from 'react-router-dom'
import Nav from './components/Nav'

export default function App(){
  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />
      <main className="p-6 max-w-4xl mx-auto">
        <Outlet />
      </main>
    </div>
  )
}

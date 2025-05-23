import { Link } from 'react-router-dom'
import logo from "../assets/HomeLogo.jpg"

export default function Navbar() {
    
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className='flex gap-3 items-center'>
        <Link to="/">
           <img src={logo} alt = "logo"
           className='object-cover h-11 w-11 rounded-full'/>
        </Link>
        <Link to="/" className="text-xl font-bold">TravelXAgency</Link>
       
        </div>
        
        
        <div className="space-x-6 flex items-center">
          <Link to="/" className="hover:text-yellow-400 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-yellow-400 transition-colors">About</Link>
          <Link to="/contact" className="hover:text-yellow-400 transition-colors">Contact</Link>
          
          </div>
          </div>
       
      
    </nav>
  )
}

import React from 'react' 
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav>
            <ul>
                <li><Link to = '/'>Dashboard</Link></li>
                <li><Link to = '/profile'>Profile</Link></li>
                <li><Link to = '/login'>Login</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
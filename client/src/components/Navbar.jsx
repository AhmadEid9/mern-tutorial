import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <Link to={'/'} className='text-white text-3xl hover:bg-orange-600 rounded-2xl p-3'>Home</Link>
      <div className='flex justify-center align-middle gap-4 p-2'>
      <Link to={'/signup'} className='text-white text-3xl hover:bg-blue-600 rounded-2xl p-3'>Sign up</Link>
      <Link to={'/login'} className='text-white text-3xl hover:bg-green-600 rounded-2xl p-3'>Login</Link>
      </div>
    </nav>
  )
}

export default Navbar;
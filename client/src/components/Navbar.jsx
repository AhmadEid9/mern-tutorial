import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = ( { onClick } ) => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <Link to={'/'} className='text-white text-3xl hover:bg-slate-600 hover:text-orange-400 hover:text-outline-black rounded-2xl p-3'>Workout Buddy</Link>
      
      <div className='flex justify-center align-middle gap-4 p-4 text-white hover:text-green-500 hover:bg-slate-600 rounded-2xl'>
        <button type="button">
            <FaPlus size={24} />
        </button>
      </div>
    </nav>
  )
}

export default Navbar;
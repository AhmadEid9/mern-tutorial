import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AddWorkoutModel from './AddWorkoutModal'

const Navbar = () => {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const showModal = () => setIsModalVisible(true)
    const handleOk = () => setIsModalVisible(false)
    const handleCancel = () => setIsModalVisible(false)

    return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <Link to={'/'} className='text-white text-3xl hover:bg-slate-600 hover:text-orange-400 hover:text-outline-black rounded-2xl p-3'>Workout Buddy</Link>
    </nav>
  )
}

export default Navbar
import axios from 'axios'
import React, { useState } from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import UpdateWorkoutModal from './UpdateWorkoutModal'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import useWorkoutContex from '../hooks/useWorkoutContex'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
const WorkoutDetails = ({workout}) => {
    const [ isModalVisible, setIsModalVisible ] = useState(false)
    const showModal = () => setIsModalVisible(true)
    const handleOk = () => setIsModalVisible(false)
    const handleCancel = () => setIsModalVisible(false)
    const {dispatch} = useWorkoutContex()
    const handleDelete = async () => {
        try {
          const response = await axios.delete(`http://localhost:4000/api/workouts/${workout._id}`)
          console.log('Delete successful:', response.data)
          dispatch({type: 'DELETE_WORKOUT', payload: workout})
        } catch (error) {
          console.error('Error deleting the workout:', error)
        }
      }
      
  return (
    <div className='bg-gray-300 px-4 py-2 rounded-md flex flex-row justify-between align-middle'>
        <div className='gap-y-2'>
        <h4 className='text-green-800 font-black text-2xl'>
            {workout.title}
        </h4>
        <p>
            <strong>Reps:</strong> {workout.reps}
        </p>
        <p>
            <strong>Load (kgs):</strong> {workout.load}
        </p>
        <p>
            {formatDistanceToNow(new Date(workout.createdAt), { addsuffixe : true})}
        </p>
        <br />
        </div>
        <div className="text-red-600 flex flex-col gap-4 justify-center p-4">
        <button onClick={handleDelete} >
            <FaTrash size={24} />
      </button>
      <button type="button" onClick={showModal}>
            <FaEdit size={24} />
        </button>
        <UpdateWorkoutModal
        isVisible={isModalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
        workout={workout}
        showErrorNotification={toast.error}
        showUpdateNotification={toast.success}
        />
        <ToastContainer />
        </div>

    </div>
  )
}

export default WorkoutDetails
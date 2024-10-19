import axios from 'axios'
import React, { useEffect, useState } from 'react'
import WorkoutDetails from '../components/WorkoutDetails'
import { FaPlus } from 'react-icons/fa'
import AddWorkoutModal from '../components/AddWorkoutModal'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import useWorkoutContex from '../hooks/useWorkoutContex'
const Home = () => {
    const [ isModalVisible, setIsModalVisible ] = useState(false)
    const showModal = () => setIsModalVisible(true)
    const handleOk = () => setIsModalVisible(false)
    const handleCancel = () => setIsModalVisible(false)
    const { workouts, dispatch} = useWorkoutContex()

    useEffect( () => {
        const fetchWorkouts = async () => {
            try {
              const response = await axios.get('http://127.0.0.1:4000/api/workouts')
              dispatch({type: "SET_WORKOUTS", payload: response.data})
            } catch (error) {
              console.error('Error fetching the workouts:', error)
            }
          }
        
        fetchWorkouts()
    }, [])
    const handleDeleteWorkout = (id) => {
        dispatch({type: "SET_WORKOUTS", payload: workouts.filter((workout) => workout._id !== id)})
      }
      const updateWorkoutInList = (updatedWorkout) => {
        dispatch({type: "SET_WORKOUTS", payload: (prevWorkouts) => prevWorkouts.map((workout) => workout._id === updatedWorkout._id ? updatedWorkout : workout)})
      }
  return (
    <div className='bg-gray-400 w-screens min-h-screen flex justify-center gap-3 rounded-x'>
        <div className="p-5 space-y-3 w-4/5">
        <div className='w-5 flex justify-center align-middle gap-4 p-4 text-white hover:text-green-500 hover:bg-slate-600 rounded-2xl'>
        <button type="button" onClick={showModal}>
            <FaPlus size={24} />
        </button>
        <AddWorkoutModal
        isVisible={isModalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
        showErrorNotification={toast.error}
        />
      </div>
         <ToastContainer />
            { workouts && workouts.map((workout) => (
                <WorkoutDetails key={workout._id} workout={workout} onDelete={handleDeleteWorkout} onUpdate={updateWorkoutInList}/>
                    )
                )
            }
        </div>
    </div>
  )
}

export default Home
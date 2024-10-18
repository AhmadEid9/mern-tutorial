import axios from 'axios'
import React, { useEffect, useState } from 'react'
import WorkoutDetails from '../components/WorkoutDetails'
import { FaPlus } from 'react-icons/fa'
import AddWorkoutModal from '../components/AddWorkoutModal'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const Home = () => {
    const [ isModalVisible, setIsModalVisible ] = useState(false)
    const showModal = () => setIsModalVisible(true)
    const handleOk = () => setIsModalVisible(false)
    const handleCancel = () => setIsModalVisible(false)
    const [ workouts, setWorkouts ] = useState([])

    useEffect( () => {
        const fetchWorkouts = async () => {
            try {
              const response = await axios.get('http://127.0.0.1:4000/api/workouts')
              setWorkouts(response.data)
            } catch (error) {
              console.error('Error fetching the workouts:', error)
            }
          }
        
        fetchWorkouts()
    }, [])
    const handleDeleteWorkout = (id) => {
        setWorkouts(workouts.filter((workout) => workout._id !== id))
      }
      const addWorkout = (newWorkout) => {
        setWorkouts((prevWorkouts) => [...prevWorkouts, newWorkout])
        handleOk()
      
      }
      const updateWorkoutInList = (updatedWorkout) => {
        setWorkouts(workouts.map((workout) =>{
            if (workout._id === updatedWorkout._id) {
                workout = updatedWorkout
            }
        }
        ));
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
        addWorkout={addWorkout}
        showErrorNotification={toast.error}
        setWorkouts={setWorkouts}
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
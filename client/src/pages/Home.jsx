import axios from 'axios'
import React, { useEffect, useState } from 'react'
import WorkoutDetails from '../components/WorkoutDetails'

const Home = () => {
    const [ workouts, setWorkouts ] = useState([])
    const [ loading, setLoading ] = useState(true)
    useEffect( () => {
        const fetchWorkouts = async () => {
            try {
              const response = await axios.get('http://127.0.0.1:4000/api/workouts');
              setWorkouts(response.data);
              setLoading(false);
            } catch (error) {
              console.error('Error fetching the workouts:', error);
              setLoading(false);
            }
          }
        
        fetchWorkouts()
    }, [])
    const handleDeleteWorkout = (id) => {
        setWorkouts(workouts.filter((workout) => workout._id !== id));
      };
  return (
    <div className='bg-gray-400 w-screens h-screen flex justify-center gap-3 rounded-x'>
        <div className="p-5 space-y-3 w-4/5">
            { workouts && workouts.map((workout) => (
                <WorkoutDetails key={workout._id} workout={workout} onDelete={handleDeleteWorkout}/>
                    )
                )
            }
        </div>
    </div>
  )
}

export default Home
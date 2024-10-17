import axios from 'axios';
import React from 'react'
import { FaTrash } from 'react-icons/fa'
const WorkoutDetails = ({workout, onDelete }) => {
    const handleDelete = async () => {
        try {
          const response = await axios.delete(`http://localhost:4000/api/workouts/${workout._id}`);
          console.log('Delete successful:', response.data);
          onDelete(workout._id);
        } catch (error) {
          console.error('Error deleting the workout:', error);
        }
      };

  return (
    <div className='bg-gray-300 px-4 py-2 rounded-md flex flex-row justify-between align-middle'>
        <div>
        <h4>
            {workout.title}
        </h4>
        <p>
            <strong>Load (kgs):</strong> {workout.load}
        </p>
        <p>
            <strong>Reps:</strong> {workout.reps}
        </p>
        <p>
            {workout.createdAt}
        </p>
        <br />
        </div>
        <div className="text-red-600 flex justify-center p-4">
        <button onClick={handleDelete} >
            <FaTrash size={24} />
      </button>
        </div>

    </div>
  )
}

export default WorkoutDetails
import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import axios from 'axios';
import useWorkoutContex from '../hooks/useWorkoutContex';

const AddWorkoutModal = ({ isVisible, handleOk, handleCancel, showErrorNotification }) => {
  const {dispatch} = useWorkoutContex()  
  const [title, setTitle] = useState(null)
  const [reps, setReps] = useState(null)
  const [load, setLoad] = useState(null)

  const createWorkout = async () => {
    if (!title || !reps || !load) {
      showErrorNotification('All fields are required and of a proper Type!')
        return
      }
      const workoutData = {
        title: title,
        reps: parseFloat(reps),
        load: parseFloat(load)
      }
      try {
        const res = await axios.post("http://127.0.0.1:4000/api/workouts/", workoutData)
        console.log("ServerResponse", res.data)
        dispatch({type: 'CREATE_WORKOUT', payload: res.data})
        handleOk()
      } catch (error) {
          console.error(error)
          showErrorNotification("Invalid data!!\nPlease make sure the title is a word and reps and load are numbers!")
        }
    }
  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-40"></div>
      )}

      <Modal
        title={<h2 className="text-xl font-bold">Add New Item</h2>}
        open={isVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={createWorkout} className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
            Ok
          </Button>,
        ]}
        className="z-50"
      >
        <div className="flex flex-col space-y-4">
          <div className="flex justify-between items-center">
            <label className="text-gray-700 font-semibold w-1/3">Title :</label>
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 w-2/3"
              placeholder="Rep's Title"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="flex justify-between items-center">
            <label className="text-gray-700 font-semibold w-1/3">Reps:</label>
            <input
              type="number"
              className="border border-gray-300 rounded-md p-2 w-2/3"
              placeholder="Number of Reps"
              onChange={(e) => setReps(e.target.value)}
              required
            />
          </div>

          <div className="flex justify-between items-center">
            <label className="text-gray-700 font-semibold w-1/3">Load (kgs):</label>
            <input
              type="number"
              className="border border-gray-300 rounded-md p-2 w-2/3"
              placeholder="Reps Load"
              onChange={(e) => setLoad(e.target.value)}
              required
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AddWorkoutModal;

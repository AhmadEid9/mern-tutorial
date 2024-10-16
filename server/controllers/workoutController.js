import Workout from "../models/workoutModel.js"
import mongoose from "mongoose"

//get all workouts
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createdAt:-1})

    res.status(200).json(workouts)
}

//get single workout
const getWorkout = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Invalid ID"})
    }
    const workout = await Workout.findById(id)
    
    if (!workout){
        return res.status(404).json({error: "Workout not found"})
    }
    res.status(200).json(workout)
}

//Create an new workout
const createWorkout = async (req, res) => {
    const {title, reps, load} = req.body

    try {
        const workout = await Workout.create({title, reps, load})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error : error.message})
    }
}

//Delete a workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Invalid ID"})
    }

    const workout = await Workout.findByIdAndDelete({_id: id})

    if(!workout){
        return res.status(400).json({error: "No such workout"})
    }
    res.status(200).json({})
}

//Update Workout
const updateWorkout = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Invalid ID"})
    }

    const workout = await Workout.findByIdAndUpdate({_id: id}, { ...req.body })

    if(!workout){
        return res.status(400).json({error: "No such workout"}) 
    }
    res.status(200).json(workout)
}

export { createWorkout, getWorkouts, getWorkout, deleteWorkout, updateWorkout }
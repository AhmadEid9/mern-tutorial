import Workout from "../models/workoutModel.js"

//get all workouts

//get single workout

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

//Update Workout


export { createWorkout }
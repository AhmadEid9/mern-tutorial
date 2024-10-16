import { Router } from "express"
import { createWorkout, getWorkouts, getWorkout, deleteWorkout, updateWorkout } from "../controllers/workoutController.js"
const router = Router()

//Get all workouts
router.get('/', getWorkouts)

//Get singular Workout
router.get('/:id', getWorkout)

//Create Workouts
router.post('/', createWorkout)

//Delete Workouts
router.delete('/:id', deleteWorkout)

//Update Workouts
router.patch('/:id', updateWorkout)

export default router
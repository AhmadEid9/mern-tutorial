import { Router } from "express"
import { createWorkout, getWorkouts, getWorkout } from "../controllers/workoutController.js"
const router = Router()

//Get all workouts
router.get('/', getWorkouts)

//Get singular Workout
router.get('/:id', getWorkout)

//Create Workouts
router.post('/', createWorkout)

//Delete Workouts
router.delete('/:id', (req, res) => {
    res.json({message: `delete workout id : ${req.params.id}`})
    }
)
//Update Workouts
router.patch('/:id', (req, res) => {
    res.json({message: `update workout id : ${req.params.id}`})
    }
)

export default router
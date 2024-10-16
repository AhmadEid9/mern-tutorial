import { Router } from "express"
import Workout from "../models/workoutModel.js"
const router = Router()

router.get('/', (req, res) => {
    res.json({message: "workouts"})
    }
)

router.get('/:id', (req, res) => {
    res.json({message: `workout id : ${req.params.id}`,})
    }
)

router.get('/', (req, res) => {
    res.json({message: "get api"})
    }
)

router.post('/', async (req, res) => {
    const {title, reps, load} = req.body

    try {
        const workout = await Workout.create({title, reps, load})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error : error.message})
        }
    }
)

router.delete('/:id', (req, res) => {
    res.json({message: `delete workout id : ${req.params.id}`})
    }
)

router.patch('/:id', (req, res) => {
    res.json({message: `update workout id : ${req.params.id}`})
    }
)

export default router
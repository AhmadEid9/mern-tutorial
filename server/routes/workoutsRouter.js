import { Router } from "express"
import { createWorkout } from "../controllers/workoutController.js"
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

router.post('/', createWorkout)

router.delete('/:id', (req, res) => {
    res.json({message: `delete workout id : ${req.params.id}`})
    }
)

router.patch('/:id', (req, res) => {
    res.json({message: `update workout id : ${req.params.id}`})
    }
)

export default router
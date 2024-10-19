import { useContext } from "react"
import { WorkoutsContext } from "../contexts/WorkoutContext"

const useWorkoutContex = () => {
    const context = useContext(WorkoutsContext)

    if (!context) {
        throw Error("useWorkoutsContext Must be used inside a WorkoutsContextProvider")
    }

    return context
}

export default useWorkoutContex
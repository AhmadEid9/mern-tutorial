
import express  from "express"
import workoutsRoutes  from "./routes/workouts.js"
import dotenv from "dotenv"
const app = express()

dotenv.config()

//Middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method, res.statusCode);
    next()
})

//Routes
app.use('/api/workouts', workoutsRoutes)

app.listen(
    process.env.PORT, () => {
        console.log("Listneing on port ", process.env.PORT)
    }
)
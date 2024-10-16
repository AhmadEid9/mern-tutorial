
import express  from "express"
import workoutsRoutes  from "./routes/workoutsRouter.js"
import dotenv from "dotenv"
import mongoose from "mongoose"

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

//Connect to DB
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        //listen to requests
        app.listen(
            process.env.PORT, () => {
                console.log("Connected to Database\n","Listneing on port ", process.env.PORT)
    }
)

    }
)
    .catch((error) => {
        console.error(error);
    }
)
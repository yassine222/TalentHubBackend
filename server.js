import express from 'express'
import mongoose from 'mongoose'
import morgan from 'morgan'
import cors from 'cors'
import { errorHandler, notFoundError } from './Middlewares/error-handler.js'
import talentRoutes from './routes/talentRoutes.js'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'

const app = express()

// const port = 9090
const dbName = "talenthubdb"
const db_url = `mongodb://127.0.0.1:27017`
app.use(morgan('prod'))
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/img', express.static("public/images")) // static directory for files

app.use('/talent', talentRoutes)

app.use(notFoundError)
app.use(errorHandler)

dotenv.config()


mongoose.set('debug', true) // log queries
mongoose.set('strictQuery', true);
mongoose.Promise = global.Promise

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("connected to the db")).catch((err) => { console.log(err) });
// mongoose.connect(`${db_url}/${dbName}`)
//     .then(() => {
//         console.log(`Connected to ${dbName}`);
//     }).catch(err => {
//         console.log(err)
//     })


// list to server 
// app.listen(port, () => {
//     console.log(`server running at http://localhost:${port}`)
// })
app.listen(process.env.PORT || 4000, () => console.log(`Example app listening on port ${process.env.PORT}!`));


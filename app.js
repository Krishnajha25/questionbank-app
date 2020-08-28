const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const connectDB = require('./config/db')
const semRoute = require('./routes/semester')
const questionRoute = require('./routes/question')
const streamRoute = require('./routes/stream')
const subjectRoute = require('./routes/subject')


// Load Config
dotenv.config({path: './config/.env'})

const app = express()

// Cors config
app.use(cors())

connectDB()

// Routes
app.get('/', (req, res) => {
    res.send("It works")
})

app.use('/semester', semRoute)
app.use('/question', questionRoute)
app.use('/stream', streamRoute)
app.use('/subject', subjectRoute)


PORT =  process.env.PORT || 3000

app.listen(
    PORT,
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
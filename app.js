const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send("It works")
})

PORT =  process.env.PORT || 3000

app.listen(
    PORT,
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
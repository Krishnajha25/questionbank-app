const mongoose = require('mongoose')

const SemesterSchema = new mongoose.Schema({
    semNum:{
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("Semester", SemesterSchema)
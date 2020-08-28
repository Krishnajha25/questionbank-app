const mongoose = require('mongoose')

const QuestionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    diffucultyLevel: {
        type: String,
        required: true
    },
    minMarks: {
        type: Number,
        required: true
    },
    maxMArks: {
        type: Number,
        required: true
    },
    stream:{
        type: String,
        required: true
    },
    semester:{
        type: String,
        required: true
    },
    subject:{
        type: String,
        required: true
    }
})
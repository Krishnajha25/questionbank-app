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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Stream'
    },
    semester:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Semester'
    },
    subject:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject'
    }
})

module.exports = mongoose.model('Question', QuestionSchema)
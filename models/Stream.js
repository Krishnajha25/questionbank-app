const mongoose = require('mongoose')

const StreamSchema = new mongoose.Schema({
    streamName:{
        type: String,
        required: true
    },
    alias:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Stream", StreamSchema)
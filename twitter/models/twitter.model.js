const mongoose = require('mongoose')

const twitterSchema = mongoose.Schema({
    text: String,
    time: String,
    Comments:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Comments'
    },
    Likes:[{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'likes'
    }]
 
})



const Twitter = mongoose.model('Twitter', twitterSchema)

module.exports = Twitter
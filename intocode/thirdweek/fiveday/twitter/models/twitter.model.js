const mongoose = require('mongoose')

const twitterSchema = mongoose.Schema({
    text: String,
    time: String,
    Saves:{
        type: mongoose.SchemaTypes.Array,
        ref: 'Users'
    },
    Likes:{
        type: mongoose.SchemaTypes.Array,
        ref: 'Users'
    }

  
 
})



const Twitter = mongoose.model('Twitter', twitterSchema)

module.exports = Twitter
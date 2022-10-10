const mongoose = require('mongoose')

const commentsSchema = mongoose.Schema({
    nameAuthor: String, // red: user
    text: String
    // tqittId
})


const Comments = mongoose.model('Comments', commentsSchema )

module.exports = Comments
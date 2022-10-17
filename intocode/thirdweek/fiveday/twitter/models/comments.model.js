const mongoose = require('mongoose')

const commentsSchema = mongoose.Schema({
    nameAuthor: String, // red: user
    text: String,
    twitter: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Twitter'
    }
    // tqittId
})


const Comments = mongoose.model('Comments', commentsSchema )

module.exports = Comments
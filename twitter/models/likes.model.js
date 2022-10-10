const mongoose = require('mongoose')

const likesSchema = mongoose.Schema({
    nameAuthor: String,

})

const Likes = mongoose.model('Likes', likesSchema)

module.exports = Likes
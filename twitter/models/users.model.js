const mongoose = require('mongoose')

const usersSchema = mongoose.Schema({
    name: String
    //saves
})


const Users = mongoose.model('Users', usersSchema)

module.exports = Users
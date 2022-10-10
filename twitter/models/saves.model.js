const mongoose = require('mongoose')

const savesSchema = mongoose.Schema({
    amount: Number
})

const Saves = mongoose.model('Save', savesSchema)

module.exports = Saves
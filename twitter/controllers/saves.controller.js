
const Saves = require('../models/saves.model')

module.exports.savesController = {

createSaves: async (req,res) => {
    const data = await Saves.create({
        ...req.body
    })
    res.json(data)
}
 }


const Likes = require('../models/likes.model')


module.exports.likesController = {

createLikes: async (req,res) => {
    const data = await Likes.create({
        ...req.body
    })
    res.json(data)
}

}
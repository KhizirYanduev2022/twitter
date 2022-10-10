
const Twitter = require('../models/twitter.model.js')


module.exports.twitterController = {
    createTwitter:(req,res) => {
    Twitter.create(req.body,(err,data)=>{
        if(err){
            res.json('err')
        }else {
            res.json(data)
        }
    })
    },

    findTwitter:(req,res) => {
        Twitter.findById(req.params.id, (err,data)=>{
            if(err){
                res.json(err)
            }else{
                res.json(data)
            }
        }).populate('Comments').populate('Likes')
    }
}
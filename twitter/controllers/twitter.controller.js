
const Twitter = require('../models/twitter.model.js')


module.exports.twitterController = {
    createTwitter:(req,res) => {
    Twitter.create(req.body,(err,data)=>{
        if(err){
            res.json(err)
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
        }).populate('Saves') .populate('Likes')
    },

LikeupdateTwitter:(req,res)=>{
        Twitter.findByIdAndUpdate(req.params.id, {$push:{Likes:req.body.usersId}},(err,data)=>{
            if(err){
                res.json(err)
            }else{
                res.json(data)
            }
        }).populate('Likes')


    }, 
     findAllTwitter:(req,res) => {
      
        Twitter.find({}, (err,data)=>{
            if(err){
                res.json(err)
            }else{
                res.json(data)
            }
        }).populate('Saves').populate('Likes')
    },

    saveupdateTwitter : (req,res) => {
        Twitter.findByIdAndUpdate(req.params.id,{$push:{Saves:req.body.usersId}}, (err,data)=>{
            if(err){
                res.json(err)
            }else{
                res.json(data)
            }
        }) .populate('Saves',{_id:0,__v:0})
    },

        commentsFindTwitter:(req,res) => {
            Twitter.find({comments:req.params.id},(err,data)=>{
                if(err){
                    res.json(err)
                }else{
                    res.json(data)
                }
            }) .populate('comments')
        }

}


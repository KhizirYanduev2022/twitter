
const Comments = require('../models/comments.model')

module.exports.commentsController = {
createComments:(req,res) => {
    Comments.create(req.body,(err,data)=>{
        if(err){
            res.json('err')
        }else{
            res.json('create')
        }
    })
}


}
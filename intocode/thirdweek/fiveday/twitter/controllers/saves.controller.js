
const Saves = require('../models/saves.model')

module.exports.savesController = {

createSaves:  (req,res) => {
Saves.create(req.body,(err,data)=>{
    if(err){
        res.json(err)
    } else{
        res.json(data)
    }
})
}
 }


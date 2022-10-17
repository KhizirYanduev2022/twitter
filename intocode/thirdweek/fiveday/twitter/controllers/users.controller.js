const e = require('express')
const Users = require('../models/users.model')

module.exports.usersController = {
 createUsers:(req,res) => {
Users.create(req.body,(err,data)=>{
    if(err){
        res.json(err)
    }else{
        res.json(data)
    }
 }) 
}


}
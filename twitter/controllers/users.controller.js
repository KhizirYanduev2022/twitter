const Users = require('../models/users.model')

module.exports.usersController = {
 createUsers:(req,res) => {
Users.create(req.body)
 }
}
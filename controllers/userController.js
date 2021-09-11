
var User = require('../models').User;

const createUser = (req, res, next) => {
	console.log(req.body,"dfgfd")
	const {name,age,department,role,status } = req.body;
	// 	if (!fullName || !age || !department || !role || !status )  {
	//   res.status(400).json({ msg: "All Fields are required" })
	// 	} else {
			User.create({
				name,age,department,role,status
			})
			.then(user => {
				if(user){
					res.redirect("/")
			}})
			.catch(err => {
				res.json({ msg: err.message || "Not created"})
			})
	//   }
}
module.exports = {
	createUser: createUser
}
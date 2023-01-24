const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
	{
		//field - email unique:true 
		email: {
			type: String,
			required: true,
			// if there is a doc with this email dont create a new one
			unique: true,
		},
		//hashed password results are saved here
		password: {
			type: String,
			required: true,
		},
		//not required means you can create a user without a token then save it later
		token: String,
	},
	{
		timestamps: true,
		toJSON: {
			transform: (_doc, user) => {
				delete user.password
				return user
			},
		},
	}
)

module.exports = mongoose.model('User', userSchema)

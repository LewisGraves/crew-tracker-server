// require mongoose
const mongoose = require('mongoose')

// Getting the Schema from Mongoose
const Schema = mongoose.Schema

// Creating a new ship Schema
const shipSchema = new Schema(
	{
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
		class: {
			type: String,
			required: true,
		},
		strength: {
			type: Number,
			required: true,
			min: 1,
			max: 30,
		},
	},
	{
		timestamps: true,
	}
)

// Creating a Mongoose Model called Ship
// Collection will be called ships
const Ship = mongoose.model('Ship', shipSchema)

// Exporting Ship model to use elsewhere
module.exports = Ship

// require mongoose
const mongoose = require('mongoose')
const logSchema = require('./log')

// Getting the Schema from Mongoose
const Schema = mongoose.Schema

// Creating a new crew Schema
const crewSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		// when you see arrays in JS think of many
		logs: [logSchema]
	},
	{
		timestamps: true,
	}
)

// Creating a Mongoose Model called Crew
// Collection will be called crews
const Crew = mongoose.model('Crew', crewSchema)

// Exporting Crew model to use elsewhere
module.exports = Crew
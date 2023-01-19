const mongoose = require('mongoose')

const Schema = mongoose.Schema

const crewSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		station: {
			type: String,
			required: true,
		},
	},
	{
        timestamps: true
    }
)

const Crew = mongoose.model('Crew', crewSchema)

module.exports = Crew
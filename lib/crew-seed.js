const express = require('express')

const Crew = require('../models/crew')

const router = express.Router()

const startCrews = [
	{
		name: 'V2',
		station: 'System Integrated AI'
	},
	{
		name: 'Alphonse"tea-bag"Delacroix',
		station: 'Pilot'
	},
	{
		name: 'Bardin"Prez"Gorrekson',
		station: 'Engineering'
	},
]

router.get('/crews', (req, res, next) => {
	Crew.deleteMany({})
        .then(() => {
            Crew.create(startCrews)
                .then((crews) => res.status(200).json({ crews: crews }))
        })
        .catch(next)
})

module.exports = router
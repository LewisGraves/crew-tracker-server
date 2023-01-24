// const express = require('express')

// const Crew = require('../models/crew')

// const router = express.Router()

// const startCrews = [
// 	{
// 		name: 'V2',
// 		station: 'System Integrated AI'
// 	},
// 	{
// 		name: 'Alphonse"tea-bag"Delacroix',
// 		station: 'Pilot'
// 	},
// 	{
// 		name: 'Bardin"Prez"Gorrekson',
// 		station: 'Engineering'
// 	},
// ]

// router.get('/crews', (req, res, next) => {
// 	Crew.deleteMany({})
//         .then(() => {
//             Crew.create(startCrews)
//                 .then((crews) => res.status(200).json({ crews: crews }))
//         })
//         .catch(next)
// })

// module.exports = router

const express = require('express')

const Ship = require('../models/ship')

const router = express.Router()

const startShips = [
	{
		firstName: 'Sam',
		lastName: 'Gamgee',
		class: 'fighter',
		strength: 9,
	},
	{
		firstName: 'Gandalf',
		lastName: 'The White',
		class: 'Wizard',
		strength: 8,
	},
	{
		firstName: 'Aragorn',
		lastName: 'Strider',
		class: 'rogue',
		strength: 12,
	},
]

router.get('/ships', (req, res, next) => {
	Ship.deleteMany({})
        .then(() => {
            Ship.create(startShips)
                .then((ships) => res.status(200).json({ ships: ships }))
        })
        .catch(next)
})

module.exports = router
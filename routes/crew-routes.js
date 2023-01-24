// require Express
const express = require('express')
const { requireToken } = require('../config/auth')
const { handle404 } = require('../lib/custom-errors')

// require the Model we just created
const Crew = require('../models/crew')

// Creating a router for us to make paths on
const router = express.Router()

// INDEX
// GET /crews
router.get('/crews', requireToken, (req, res, next) => {
	Crew.find()
		.then((crews) => {
			return crews.map((crew) => crew)
		})
		.then((crews) => res.status(200).json({ crews: crews }))
		.catch(next)
})

// SHOW
// GET /crews/5a7db6c74d55bc51bdf39793
router.get('/crews/:id', (req, res, next) => {
	// req.params.id will be set based on the `:id` in the route
	Crew.findById(req.params.id)
		.then(handle404)
		.then((crew) => res.status(200).json({ crew: crew }))
		.catch(next)
})

// CREATE
// POST /crews
router.post('/crews', (req, res, next) => {
	Crew.create(req.body.crew)
		.then((crew) => {
			res.status(201).json({ crew: crew })
		})
		.catch(next)
})

// UPDATE
// PATCH /crews/5a7db6c74d55bc51bdf39793
router.patch('/crews/:id', (req, res, next) => {
	Crew.findById(req.params.id)
		.then(handle404)
		.then((crew) => {
			return crew.updateOne(req.body.crew)
		})
		.then(() => res.sendStatus(204))
		.catch(next)
})

// DESTROY
// DELETE /crews/5a7db6c74d55bc51bdf39793
router.delete('/crews/:id', (req, res, next) => {
	Crew.findById(req.params.id)
		.then(handle404)
		.then((crew) => {
			crew.deleteOne()
		})
		.then(() => res.sendStatus(204))
		.catch(next)
})

// exporting the router to use elsewhere
module.exports = router

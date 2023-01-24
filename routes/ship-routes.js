// require Express
const express = require('express')
const { handle404 } = require('../lib/custom-errors')

// require the Model we just created
const Ship = require('../models/ship')

// Creating a router for us to make paths on
const router = express.Router()

// INDEX
// GET /ships
router.get('/ships', (req, res, next) => {
  Ship.find()
		.then((ships) => {
			return ships.map((ship) => ship)
		})
		.then((ships) => res.status(200).json({ ships: ships }))
		.catch(next)
})

// SHOW
// GET /ships/5a7db6c74d55bc51bdf39793
router.get('/ships/:id', (req, res, next) => {
	// req.params.id will be set based on the `:id` in the route
	Ship.findById(req.params.id)
		.then(handle404)
		.then((ship) => res.status(200).json({ ship: ship }))
		.catch(next)
})

// CREATE
// POST /ships
router.post('/ships', (req, res, next) => {

	Ship.create(req.body.ship)
		.then((ship) => {
			res.status(201).json({ ship: ship })
		})
		.catch(next)
})

// UPDATE
// PATCH /ships/5a7db6c74d55bc51bdf39793
router.patch('/ships/:id', (req, res, next) => {

	Ship.findById(req.params.id)
        .then(handle404)
		.then((ship) => {
			return ship.updateOne(req.body.ship)
		})
		.then(() => res.sendStatus(204))
		.catch(next)
})

// DESTROY
// DELETE /ships/5a7db6c74d55bc51bdf39793
router.delete('/ships/:id', (req, res, next) => {
	Ship.findById(req.params.id)
		.then(handle404)
		.then((ship) => {
			ship.deleteOne()
		})
		.then(() => res.sendStatus(204))
		.catch(next)
})

// exporting the router to use elsewhere
module.exports = router

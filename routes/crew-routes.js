const express =require('express')

const { handle404 } = require('../lib/custom-errors')

const Crew = require('../models/crew')

const router = express.Router()

//INDEX
// GET /crews
router.get('/crews', (req, res, next) => {
    Crew.find()
        .then(crews => {
            // THIS is not Array.protype.map
            // document method (model method) .map
            return crews.map(crew => crew)
        })
        .then(crews => {
            res.status(200).json({ crews: crews })
        })
        .catch(next)
})

// SHOW
// GET /crews/:id
router.get('/crews/:id', (req, res, next) => {
    Crew.findById(req.params.id)
        .then(handle404)
        .then(crew => {
            res.status(200).json({ crew: crew })
        })
        .catch(next)
})

// CREATE
// POST /crews
router.post('/crews', (req, res, next) => {
    // req.body
    // crew: {}
    Crew.create(req.body.crew)
        .then(crew => {
            // top lvl of this object is crew
            res.status(201).json({ crew: crew })
        })
        .catch(next)
})

// UPDATE
// PATCH /crew/:id
router.patch('/crews/:id', (req, res, next) => {
    Crew.findById(req.params.id)
        .then(handle404)
        .then(crew => {
            // { crew: {} }
            return crew.updateOne(req.body.crew)
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})

// DESTROY
// DELETE /crews/:id
router.delete('/crews/:id', (req, res, next) => {
	Crew.findById(req.params.id)
        .then(handle404)
		.then((crew) => {
			crew.deleteOne()
		})
		.then(() => res.sendStatus(204))
		.catch(next)
})

module.exports = router
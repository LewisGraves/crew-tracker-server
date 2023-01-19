const express =require('express')

const Crew = require('../models/crew')

const router = express.Router()

//INDEX crew

router.get('/crews', (req, res, next) => {
    Crew.find()
        .then(crews => {
            return crews.map(crew => crew)
        })
        .then(crews => {
            res.status(200).json({ crews: crews })
        })
        .catch(next)
})

// SHOW crew/:id

router.get('/crews/:id', (req, res, next) => {
    Crew.findById(req.params.id)
        .then(crew => {
            res.status(200).json({ crew: crew })
        })
        .catch(next)
})

// CREATE and POST /crew

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

module.exports = router
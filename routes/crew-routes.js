const express =require('express')

const Crew = require('../models/crew')

const router = express.Router()

//INDEX crew
router.get('/crew', (req, res, next) => {
    Crew.find()
        .then(crew => {
            res.status(200).json({ crew: crew })
        })
        .catch(next)
})

// router.get('/crew', (req, res, next) => {
//     Character.find()
//         .then(characters => {
//             return characters.map(character => character)
//         })
//         .then(characters => {
//             res.status(200).json({ characters: characters })
//         })
//         .catch(next)
// })

// SHOW crew/:id
router.get('/crew/:id', (req, res, next) => {
    Crew.findById(req.params.id)
        .then(crew => {
            res.status(200).json({ crew: crew })
        })
        .catch(next)
})

// router.get('/characters/:id', (req, res, next) => {
//     Character.findById(req.params.id)
//         .then(character => {
//             res.status(200).json({ character: character })
//         })
//         .catch(next)
// })

// CREATE and POST /crew
router.post('/crew', (req, res, next) => {
    // req.body
    // crew: {}
    Crew.create(req.body.crew)
        .then(crew => {
            // top lvl of this object is crew
            res.status(201).json({ crew: crew })
        })
        .catch(next)
})

// router.post('/characters', (req, res, next) => {
//     // req.body
//     // character: {}
//     Character.create(req.body.character)
//         .then(character => {
//             // top lvl of this object is character
//             res.status(201).json({ character: character })
//         })
//         .catch(next)
// })

module.exports = router
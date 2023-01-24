const express = require('express')

const Crew = require('../models/crew')
const { handle404 } = require('../lib/custom-errors')
const { requireToken } = require('../config/auth')

const router = express.Router()

// CREATE
// POST /logs
router.post('/logs', requireToken, (req, res, next) => {
    const crewId = req.body.log.crewId

    const log = req.body.log
    //ading an owner field
    log.owner = req.user.id

    // find the Crew that I want to add the log too
    // once found `push` the log into the Mongoose Array
    // send status of 201 created if success
    // next if failure
    Crew.findById(crewId)
        .then(handle404)
        .then(crew => {
            crew.logs.push(log)

            // have to save the doc when modified
            return crew.save()
        })
        .then(crew => {
            res.status(201).json({ crew: crew })
        })
        .catch(next)
})

// UPDATE
// PATCH /logs/:id
router.patch('/logs/:logId', (req, res, next) => {
    const crewId = req.body.log.crewId

    const logBody = req.body.log

    Crew.findById(crewId)
        .then(handle404)
        .then(crew => {
            // finding the log by it's id
            const log = crew.logs.id(req.params.logId)

            // setting the new log content to be the content passed in
            log.set(logBody)

            // saving it
            // I have modified the doc I need to save it
            return crew.save()
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})

// DELETE
// DELETE /logs/:logId
router.delete('/logs/:logId', (req, res, next) => {
    const crewId = req.body.log.crewId

    Crew.findById(crewId)
        .then(handle404)
        .then(crew => {
            //finding the correct log to remove
            //.remove() we delete it
            crew.logs.id(req.params.logId).remove()

            // since I've modified I have to save
            return crew.save()
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})

module.exports = router
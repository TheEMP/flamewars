let express = require('express')
let Users = require('../models/user-model')
let Threads = require('../models/thread-model')

let router = express.Router()

// THREADS
router.get('/threads', function (req, res) {
    Threads.find().then(threads => {
        res.send({ data: threads })
    }).catch(err => {
        res.send({ error: err })
    })
})

router.get('/threads/:id', function (req, res) {
    Threads.findById(req.params.id).then(thread => {
        res.send({ data: thread })
    }).catch(err => {
        res.send({ error: err })
    })
})

router.post('/threads', (req, res) => {
    let newThread = req.body

    Threads.create(newThread)
        .then(thread => {
            res.send({ message: "Successfully created a new thread", data: thread })
        })
        .catch(err => {
            res.send({ error: err })
        })

})

module.exports = router
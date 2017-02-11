let express = require('express')
let Users = require('../models/user-model')
let Threads = require('../models/thread-model')
let Votes = require('../models/vote-model')
let sessions = require('../sessions/sessions')

let router = express.Router()

// THREADS

router.get('/threads', function (req, res) {
    Threads.find(req.query).then((threads) => {

        res.send({ data: threads, count: threads.length })
    }).catch(err => {
        res.send({ error: err })
    })
})

router.get('/threads/:id', function (req, res) {
    Threads.findById(req.params.id)
        .populate("comments")
        .then(thread => {
            res.send({ data: thread })
        }).catch(err => {
            res.send({ error: err })
        })
})

router.put('/threads/:id', function (req, res) {
    Threads.findById(req.params.id).then(thread => {
        if (req.body.text)
            thread.text = req.body.text;

        if (req.body.name)
            thread.name = req.body.name;

        res.send({ message: "Successfully changed thread", data: thread })
    }).catch(err => {
        res.send({ error: err })
    })
})

router.delete('/threads/:id', function (req, res) {
    Threads.findByIdAndRemove(req.params.id)
    .then(res.send({ message: "Successfully deleted thread" })
    ).catch(err => {
        res.send({ error: err })
    })
})

// router.post('/threads/:id/upvotes', function (req, res) {
//     Threads.find({threadId: req.params.id}).then(thread => {
//         thread.votes.push()
//         res.send({ data: thread })
//     }).catch(err => {
//         res.send({ error: err })
//     })
// })

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
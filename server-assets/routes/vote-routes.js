let express = require('express')
let Users = require('../models/user-model')
let Threads = require('../models/thread-model')

let router = express.Router()

router.post('/threads/:id/upvotes', function (req, res) {

    let newVote = req.body
    console.log(req.body)
    newVote.threadId = req.params.id
    Threads.findById(req.params.id).then(thread => {
        thread.votes.push(newVote)
        res.send({ message: "Upvoted", data: thread })
    }).catch(err => {
        res.send({ error: err })
    })
})


module.exports = router
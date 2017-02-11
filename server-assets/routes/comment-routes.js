let express = require('express')
let Users = require('../models/user-model')
let Threads = require('../models/thread-model')
let Votes = require('../models/vote-model')
let sessions = require('../sessions/sessions')
let Comments = require('../models/comment-model')

let router = express.Router()

//Threads

router.get('comments', function (req, res) {
    Comments.find().then((comments) => {
        res.send({ data: comments, count: comments.length })
    }).catch(err => {
        res.send({ error: err })
    })
})

router.post('comments', function (req, res) {
    let newComment = req.body
    Comments.create(newComment)
        .then(comment => {
            res.send({ message: "Successfully created a new comment", data: comment })
        })
        .catch(err => {
            res.send({ error: err })
        })
})

module.exports = router
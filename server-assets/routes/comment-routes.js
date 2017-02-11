let express = require('express')
let Users = require('../models/user-model')
let Threads = require('../models/thread-model')
let Votes = require('../models/vote-model')
let sessions = require('../sessions/sessions')
//import { createComment, CommentModel as Comments } from '../models/comment-model'

let Comments = require('../models/comment-model')
let router = express.Router()

//Threads

router.get('/comments', function (req, res) {
    Comments.find(req.query).then((comments) => {
        res.send({ data: comments, count: comments.length })
    }).catch(err => {
        res.send({ error: err })
    })
})

router.post('/comments', function (req, res) {
    let newComment = req.body
    Comments.create(newComment)
        .then(comment => {
            res.send({ message: "Successfully created a new comment", data: comment })
        })
        .catch(err => {
            res.send({ error: err })
        })
})

router.put('/comments/:id', function (req, res) {
    Comments.findByIdAndUpdate(req.params.id, { $set: { text: req.body.text }}, {new: true})
        .then(comment => {
            res.send({
                message: "Successfully edited a comment",
                data: comment
            })
        })
        .catch(err => {
            res.send({ error: err })
        })
})

router.delete('/comments/:id', function (req, res) {
    Comments.findByIdAndRemove(req.params.id)
        .then(comment => {
            res.send({
                message: "Successfully deleted a comment",
                data: comment
            })
        })
        .catch(err => {
            res.send({ error: err })
        })
})


module.exports = router
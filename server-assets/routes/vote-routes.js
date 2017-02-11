let express = require('express')
let Users = require('../models/user-model')
let Threads = require('../models/thread-model')
// let Votes = require ('../models/vote-model')

let router = express.Router()

router.put('/threads/:id/upvote', function (req, res) {
    
    let thread = req.body
    // let userId = req.cookies.userId
    let userId = thread.userId
    
    Threads.findById(req.params.id).then(newThread => {
        console.log(newThread)
        newThread.votes = newThread.votes || {}
        newThread.votes[userId] = 1
        
        newThread.save()
        res.send({ message: "Upvoted", data: newThread })
    })
    .catch(err => {
        res.send({ error: err })
    })
})

router.put('/threads/:id/downvote', function (req, res) {
    
    let thread = req.body
    // let userId = req.cookies.userId
    let userId = thread.userId
    
    Threads.findById(req.params.id).then(newThread => {
        console.log(newThread)
        newThread.votes = newThread.votes || {}
        newThread.votes[userId] = -1
        
        newThread.save()
        res.send({ message: "Downvoted", data: newThread })
    })
    .catch(err => {
        res.send({ error: err })
    })
})

// router.put('/threads/:id/downvote', function (req, res) {
    
//     let vote = req.body
//     vote.userId = req.cookies.userId
//     vote.threadId = req.params.id
//     Votes.find(vote).then(oldVote => {
//         if(oldVote.count == -1){
//             throw new Error({message: "Already downvoted."})
//             return
//         }
//         oldVote.count--
//         return Votes.findByIdAndUpdate(oldVote._id, {$set:oldVote})
//     }).then(vote => {
//         res.send({ message: "Downvoted", data: vote })
//     })
//     .catch(err => {
//         res.send({ error: err })
//     })
// })


module.exports = router
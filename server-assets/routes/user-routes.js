let express = require('express')
let Users = require('../models/user-model')
let Threads = require('../models/thread-model')

let router = express.Router()

// Users
router.get('/users', function (req, res) {
    Users.find().then(users => {
        res.send({ data: users })
    }).catch(err => {
        res.send({ error: err })
    })
})

router.get('/users/:id', function (req, res) {
    Users.findById(req.params.id).then(user => {
        res.send({ data: user })
    }).catch(err => {
        res.send({ error: err })
    })
})

router.get('/users/:id/threads', function (req, res) {
    Threads.find({userId: req.params.userId}).then(thread => {
        res.send({ data: thread })
    }).catch(err => {
        res.send({ error: err })
    })
})

router.post('/register', (req, res) => {
    let newUser = req.body

    Users.create(newUser)
        .then(user => {
            req.session.id = user._id
            delete user.password
            res.send({ 
                message: "Successfully created a new user account", 
                data: user 
            })
        })
        .catch(err => {
            res.send({ error: err })
        })

})

module.exports = router
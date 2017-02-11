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
  Users.create(req.body)
    .then((user) => {
      req.session.uid = user._id
      req.session.save()
      user.password = null
      delete user.password
      res.send({
        message: 'Successfully created user account',
        data: user
      })
    })
    .catch(err => {
      res.send({ error: err })
    })
})


router.post('/login', (req, res) => {
  Users.findOne({ email: req.body.email })
    .then(user => {
      user.validatePassword(req.body.password)
        .then(valid => {
          if(!valid){
            return res.send({error: 'Invalid Email or Password'})
          }
          req.session.uid = user._id;
          req.session.save()
          user.password = null
          delete user.password
          res.send({
            message: 'successfully logged in',
            data: user
          })
        })
        .catch(err => {
          res.send({ error: err || 'Invalid Email or Password' })
        })
    })
    .catch(err => {
      res.send({
        error: err,
        message: 'Invalid Email or Password'
      })
    })
})

router.delete('/logout', (req, res) => {
  req.session.destroy()
  res.send({
    message: 'You have successfully been logged out. Please come back soon!'
  })
})

module.exports = router;
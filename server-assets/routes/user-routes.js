let express = require('express')
let Users = require('../models/user-model')
let Threads = require('../models/thread-model')
let Comments = require('../models/comment-model')

let router = express.Router()

// Users
// MAKE SURE TO USE THIS 
router.get('/users', function (req, res) {
    Users.find(req.query).then(users => {
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
    Threads.find({userId: req.params.userId}).then(threads => {
        res.send({ data: threads })
    }).catch(err => {
        res.send({ error: err })
    })
})

router.get('/users/:id/comments', function (req, res) {
    Comments.find({userId: req.params.userId}).then(comments => {
        res.send({ data: comments })
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
          let session = req.session.save()
          console.log(session)
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
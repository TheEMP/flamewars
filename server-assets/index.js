
var express = require('express')
var app = express()
let bodyParser = require('body-parser')
let mongoose = require('mongoose')

// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://10.7.0.3:27107/data/db');

// Put all your routes here, just like normal

let session = require('./sessions/sessions')
let userRoutes = require('./routes/user-routes')
let threadRoutes = require('./routes/thread-routes')
let commentRoutes = require('./routes/comment-routes')
let voteRoutes = require('./routes/vote-routes')
let Auth = require('./routes/user-routes')

function Validate(req, res, next) {
    // ONLY ALLOW GET METHOD IF NOT LOGGED IN 
    if (req.method !== 'GET' && !req.session.uid) {
        return res.send({ error: 'Please Login or Register to continue' })
    }
    return next()
}


app.use(session)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// What does this do?
app.use(express.static(__dirname + '/public'))
app.use(Auth)

// USE VALIDATE MIDDLEWARE AFTER AUTH
app.use(Validate)

const PORT = process.env.PORT || 8000


// DONT PUSH A REAL CONNECTION STRING TO GITHUB
const connectionString = 'mongodb://flamewars:flamewars@ds046549.mlab.com:46549/flamewars'

let connection = mongoose.connection

//copypaste this stuff because it do
mongoose.connect(connectionString, {
    server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }
});

connection.on('error', (err) => {
    console.log("No connection found", err)
})

connection.once('open', () => {
    console.log("FLAME WAAAAARS.")
    app.listen(PORT, function () {
        console.log("The server is lit on", 'http://localhost:' + PORT)
    })
})


app.use(userRoutes)
app.use(threadRoutes)
app.use(voteRoutes)

module.exports = app 
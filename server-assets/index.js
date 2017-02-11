var app = require('express')()
// let bodyParser = require('body-parser')
let mongoose = require('mongoose')

// app.get('/name/:name', (req, res)=>{
//   res.send(req.params.name)
// })

// app.get('/jom/:name', (req, res)=>{
//   res.send(req.params.name)
// })

// Put all your routes here, just like normal
// let sessions = require('.server-assets/session/session')
let userRoutes = require('./routes/user-routes')
let threadRoutes = require('./routes/thread-routes')

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))

const PORT = process.env.PORT || 8000
let Auth

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

module.exports = app 
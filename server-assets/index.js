var app = require('express')()


app.get('/name/:name', (req, res)=>{
  res.send(req.params.name)
})

app.get('/jom/:name', (req, res)=>{
  res.send(req.params.name)
})
// Put all your routes here, just like normal


module.exports = app 
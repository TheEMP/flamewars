module.exports = function(app){
  var api = require('../server-assets')
  api.get('/', function(req, res){
    res.send("You're on the Mackle G's API. Enemies of the heir beware.")
  })
  app.use('/api', api)
} 
module.exports = function(app){
  var api = require('../server-assets')
  api.get('/', function(req, res){
    var routeList = api._router.stack
                    .filter(o=>o.route)
                    .map(o=>``)
    res.send()
  })
  app.use('/api', api)
}
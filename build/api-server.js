module.exports = function(app){
  var api = require('../server-assets')
  api.get('/', function(req, res){
    var routeList = api._router.stack
                    .filter(o=>o.route)
                    .map(o=>o.route.stack
                            .map(r=>`${r.method.toUpperCase()}   ${o.route.path}`).join('')
                    ).join('\n')
    res.send(routeList)
  })
  app.use('/api', api)
}
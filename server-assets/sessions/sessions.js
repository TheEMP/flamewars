let session = require('express-session');
let MongoDBStore = require('connect-mongodb-session')(session);

let store = new MongoDBStore(
  {
    uri: 'mongodb://flamewars:flamewars@ds046549.mlab.com:46549/flamewars',
    collection: 'mySessions'
  });

// Catch errors 
store.on('error', function (error) {
  console.error(error);
});

module.exports = session({
  secret: 'It\'s dangerous to go alone',
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week 
  },
  store: store,
  resave: true,
  saveUninitialized: true
})
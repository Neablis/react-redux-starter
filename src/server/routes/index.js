module.exports = function(app, passport) {
  require('./auth.js')(app, passport); // load our routes and pass in our app and fully configured passport
  require('./application.js')(app, passport); // load our routes and pass in our app and fully configured passport
}

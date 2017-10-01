// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {
  'facebookAuth' : {
    'clientID'      : '855204271302135', // your App ID
    'clientSecret'  : 'a09f7e1e883cf2a877f685f1b4fe0e0b', // your App Secret
    'callbackURL'   : 'http://localhost:4001/auth/facebook/callback',
    'profileFields'     : ['emails', 'first_name', 'last_name']
  },
  'twitterAuth' : {
    'consumerKey'       : '0Gi4Ly5fvRDDvJqnt3z4Yw8ZT',
    'consumerSecret'    : 'qMn2sEr5a29u1fexomdyA0qNHOY2821BWeM5PDxNzqbbYFnnYh',
    'callbackURL'       : 'http://localhost:4001/auth/twitter/callback'
  },
  'googleAuth' : {
    'clientID'      : '782765751782-ulf5kiv15g9uaqnbjqfhk14qr3fuh8lc.apps.googleusercontent.com',
    'clientSecret'  : 'XhOg6x9EyF45DuAGzBfbUNuR',
    'callbackURL'   : 'http://localhost:4001/auth/google/callback'
  }
};

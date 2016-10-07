// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'linkedinAuth' : {
        'clientID'          : '',
        'clientSecret'      : '',
        'callbackURL'       : 'http://localhost:8080/auth/linkedin/callback',
        'state'             : true,
        'scope'             : ['r_basicprofile','r_emailaddress']
    }

};

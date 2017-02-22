var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET Models */
var User = require('../schemas/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  var auth = false
  if(req.isAuthenticated()) {
    auth = true
  };
  res.render('index', {auth: auth});
});

router.post('/test', function(req,res,next) {
  var inp = req.body.inp;
  console.log('inp: ' + inp);
  res.redirect('/');
});

router.post('/signup', function (req, res, next) {
  var first = req.body.first;
  var last = req.body.last;
  var username = req.body.email;
  console.log('first:' + first);
  var user = new User({
    first: first, 
    last: last,
    username: username
  });
  User.register(user, req.body.password, function(registrationError) {
    if(!registrationError) {
      req.login(user, function(loginError)
       {
        if (loginError) { return next(loginError); }
        res.redirect('/');
      });
    } else {
      res.send(registrationError);
    }
  });
});

router.post('/login', passport.authenticate('local', 
  { successRedirect: '/',
    failureRedirect: '/'})
);

router.post('/login.json', passport.authenticate('local'), 
  function(req, res){
      if (req.user) { res.send(200); }
      else { res.send(401); }
  });

router.post('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;

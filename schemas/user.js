var mongoose = require('mongoose');
var Schema = mongoose.Schema;
passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
  first: String, 
  last: String, 
  username: String,
  resetPasswordToken: String,
  resetPasswordExpires: Date, 
  real:false
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
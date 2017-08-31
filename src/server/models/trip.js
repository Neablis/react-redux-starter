// app/models/user.js
// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var Place = mongoose.Schema({
  location: {
    lat: {type: Number, required: true},
    lng: {type: Number, required: true}
  },
  placeId: {type: String, required: true},
  formatted_address: {type: String, required: true},
  name: {type: String, required: true},
  url: {type: String, required: true}
}, {
  timestamps: true
});

// define the schema for our user model
var Trip = mongoose.Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  owner: {type: String, required: true}
}, {
  timestamps: true
});

module.exports.Trip = mongoose.model('Trip', Trip);
module.exports.Place = mongoose.model('Place', Place);

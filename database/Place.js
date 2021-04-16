const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const placeSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  location: String,
  reviews: [{ramen:String, typeRamen: String, soup: String, score: String, comment: String}]
});

const Place = mongoose.model('Place', placeSchema)

module.exports = Place;
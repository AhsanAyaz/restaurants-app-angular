/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */


var mongoose = require('mongoose');

var Restaurant = mongoose.model('Restaurant');
var restaurantSeedData = require('./restaurants-seed-data');

Restaurant.find({}).remove()
      .then(function() {
        let restaurants = Restaurant.create(restaurantSeedData);
        return restaurants;
      })
      .then(() => console.log('finished populating restaurants'))
      .catch(err => console.log('error populating restaurants', err));    
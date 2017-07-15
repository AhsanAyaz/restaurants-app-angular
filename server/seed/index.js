/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */


var mongoose = require('mongoose');

var Restaurant = mongoose.model('Restaurant');
var restaurantSeedData = require('./restaurants-seed-data');

Restaurant.find({}).remove()
      .then(function() {
        return Restaurant.create(restaurantSeedData);
      })
      .then(function(){
        console.log('finished populating restaurants');
      })
      .catch(function(err) {
        console.log('error populating restaurants', err);
      });    
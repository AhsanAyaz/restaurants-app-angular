'use strict';

var Restaurant = require('./restaurant.model');

function index(req, res){

    Restaurant.find({}, function(err, restaurants){
        if(err){
            res.status(500).json({message: err.message});
        }
        else{
            res.status(200).json({
                restaurants: restaurants,
                message: "Restaurants fetched successfully"
            });    
        }
    })

}

function update(req, res){
    var restId = req.params.id;
    var updatedRest = req.body;
    Restaurant.findByIdAndUpdate( restId, updatedRest, {new: true}, function(err, savedRest){
        if(err){
            res.status(500).json({
                message: err.message
            });
        }
        else{
            res.status(200).json({
                message: "Restaurant updated successfully",
                restaurant: savedRest
            })
        }
    });
}

function create(req, res){
    var newRest = req.body;
    Restaurant.create(newRest, function(err, savedRest){
        if(err){
            res.status(500).json({message: err.message});
        }
        else{
            res.status(200).json({
                restaurant: savedRest,
                message: "Restaurant created successfully"
            });    
        }
    });
}

function remove(req, res){
    var restId = req.params.id;
    Restaurant.findByIdAndRemove( restId, function(err){
        if(err){
            res.status(500).json({
                message: err.message
            });
        }
        else{
            res.status(200).json({
                message: "Restaurant deleted successfully"
            })
        }
    });
}

function get(req, res){
    var restId = req.params.id;
    Restaurant.findById( restId, function(err, restaurant){
        if(err){
            res.status(500).json({
                message: err.message
            });
        }
        else{
            res.status(200).json({
                message: "Restaurant fetched successfully",
                restaurant: restaurant
            })
        }
    });
}


exports = module.exports = {
    index: index,
    create: create,
    remove: remove,
    update: update,
    get: get
}
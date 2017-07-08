


'use strict';

var express = require('express');
var router = express.Router();
var restaurantController = require('./restaurant.controller');


router.get('/', restaurantController.index);                  // localhost:3000/api/todos/
router.post('/', restaurantController.create);                // localhost:3000/api/todos/
router.get('/:id', restaurantController.get);                // localhost:3000/api/todos/
router.put('/:id', restaurantController.update);              // localhost:3000/api/todos/
router.delete('/:id', restaurantController.remove);           // localhost:3000/api/todos/

exports = module.exports = router;
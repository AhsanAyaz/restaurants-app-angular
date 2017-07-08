
var mongoose = require('mongoose');

var restSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image_url: String
});

var restModel = mongoose.model('Restaurant', restSchema);

module.exports = restModel;
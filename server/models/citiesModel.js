const mongoose = require('mongoose');

const cityschema = new mongoose.Schema({
    city: {
        type: String,
        unique: true
    },
    latitude: {
        type: Number,
    },
    longitude:{
        type:Number
    }
    
});


const City = mongoose.model('City', cityschema);
module.exports = City;
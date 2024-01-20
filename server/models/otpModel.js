const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
    contact: {
        type: Number,
        required: [true, "Please enter a Number"],
        unique: [true, 'Username already exists'],
    },
    otp: {
        type: Number,
        required: [true, "Please enter OTP"]
    }
    
});

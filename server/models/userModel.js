const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userschema = new mongoose.Schema({
    contact: {
        type: Number,
        required: [true, "Please enter a Number"],
        unique: [true, 'Contact already exists'],
    },
    password: {
        type: String,
        required: [true, "Please enter a password"],
        minlength: [8, 'Password minlength must be at least 8 characters']
    }
    
});

userschema.pre('save', async function (next) {
    const user = this;
    if (!user.isModified("password")) {
        return next();
    }
    try {
        const saltRound = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(user.password, saltRound);
        user.password = hashPassword;
        next();
    } catch (error) {
        return next(error);
    }
});


userschema.methods.generateToken = async function () {
    try {
        return jwt.sign({
            contact: this.contact
        },
         process.env.JWT_SECRET_KEY, 
         {
            expiresIn: '3h'
        }
        )
    } catch (error) {
        return ({ error })
    }
}

const User = mongoose.model('User', userschema);
module.exports = User;
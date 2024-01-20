const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const otpSchema = new mongoose.Schema({
    contact: {
        type: Number,
        required: [true, 'Please enter a contact number'],
        unique: [true, 'Contact number already exists'],
    },
    otp: {
        type: String, // OTP will be stored as a hashed string
        required: [true, 'Please enter OTP'],
    },
    otpGeneratedAt: {
        type: Date,
        default: Date.now,
    },
});

// Hash the OTP before saving it to the database
otpSchema.pre('save', async function(next) {
    try {
        if (this.isModified('otp')) {
            const hashedOTP = await bcrypt.hash(this.otp.toString(), 10);
            this.otp = `${hashedOTP}_${Date.now()}`; // Combine hashed OTP and timestamp
        }
        next();
    } catch (error) {
        next(error);
    }
});

// Method to compare a provided OTP with the stored hashed OTP
otpSchema.methods.compareOTP = async function(candidateOTP) {
    try {
        const [hashedOTP] = this.otp.split('_'); // Extract hashed OTP
        return await bcrypt.compare(candidateOTP.toString(), hashedOTP);
    } catch (error) {
        throw error;
    }
};

const OTP = mongoose.model('OTP', otpSchema);

module.exports = OTP;

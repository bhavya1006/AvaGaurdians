const User = require('../models/userModel');
const OTP = require('../models/otpModel');
const nodemailer = require('nodemailer');
const bcrypt = require('bcryptjs');

// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'leo1nick0@gmail.com',
//         pass: 'Leo1loin0',
//     },
// });

const Signup = async (req, res) => {
    const { contact, password, confirmpassword } = req.body;
    // const otpValue = 1234
    // try {
    //     await OTP.create({
    //         contact,
    //         otp: otpValue,
    //     });
    // } catch (error) {
    //     console.error('Error saving OTP:', error);
    //     return res.status(500).send('Internal Server Error');
    // }

    // const mailOptions = {
    //     from: 'leo1nick0@gmail.com',
    //     to: 'clashingtech44@gmail.com', 
    //     subject: 'Your OTP for Signup',
    //     text: `Your OTP for signup is: ${otpValue}`,
    // };

    // transporter.sendMail(mailOptions, (error, info) => {
    //     if (error) {
    //         console.error('Error sending email:', error);
    //         return res.status(500).send('Internal Server Error');
    //     }
    //     console.log('Email sent:', info.response);
    //     res.send('Signup successful! Check your email for the OTP.');
    // });
    try {
        const { contact, password, confirmpassword } = req.body;

        if (!contact || !password) {
            return res.status(400).send('Please enter all fields');
        }

        if (confirmpassword && confirmpassword !== password) {
            return res.status(400).send('Password does not match');
        }

        const userPresent = await User.findOne({ contact });

        if (userPresent) {
            return res.status(400).send('User already in use. Choose another.');
        }
        const user = await User.create({ contact, password});
        const token = await user.generateToken();

        res.send({ message: `User created successfully`, token});
    } catch (error) {
        res.status(400).send(error);
    }


};

const Login = async (req,res)=>{
    const {contact,password}= req.body
    const user = await User.findOne({contact})
    if(!user){
        return res.status(400).send("Number not yet registered")
    }
    const matchPassword = await bcrypt.compare(req.body.password, user.password)
    if (!matchPassword) {
        return res.status(400).send("Incorrect Password")
    }
    const token = await user.generateToken();
    res.send({ message: "User logged in", token,contact})
}

const SendOTP = async (req,res)=>{
    res.send("CheckOTP")
}

module.exports = {Signup, Login,SendOTP}
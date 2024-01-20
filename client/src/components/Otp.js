import React, { useState, useRef } from 'react';
import { useOTP } from '../store'

function Otp() {
    const [otp, setOtp] = useState(['', '', '', '']);
    const refs = [useRef(), useRef(), useRef(), useRef()];
    const {state,toggleOTP}=useOTP()

    const handleChange = (index,e) => {
        if (!isNaN(e.target.value)) {
          setOtp((prevOtp) => {
            const newOtp = [...prevOtp];
            newOtp[index] = e.target.value;
            return newOtp;
          });
    
          
          if (index < 3 && e.target.value !== '') {
            refs[index + 1].current.focus();
          }
        }
      };
    
    
  return (
        <div className="otp-Form">
            <span className="mainHeading">Enter OTP</span>
            <p className="otpSubheading">We have sent a verification code to your mobile number ending with <span className="phNoxxxx">XXXX658</span></p>
            <div className="otp-inputContainer">
            {otp.map((digit, index) => (
          <input
            key={index}
            required="required"
            maxLength="1"
            type="text"
            className="otp-input"
            id={`otp-input${index + 1}`}
            value={digit}
            onChange={(e) => handleChange(index, e)}
            ref={refs[index]}
          />
        ))}
            </div>
             <button className="verifyButton" >Verify</button>
               <button className="exitBtn" onClick={toggleOTP}>×</button>
               <p className="resendNote">Didn't receive the code? <button className="resendBtn">Resend Code</button></p>    
          </div>          
    
  )
}

export default Otp

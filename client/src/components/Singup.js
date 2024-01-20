import React, { useState } from 'react'
import { useLogin,useOTP } from '../store'
import Otp from './Otp'


function Singup() {
    const { status, toggleLogin } = useLogin()
    const{otp_status,toggleOTP}=useOTP()
    
    return (
        <div className="center-center">
            {!otp_status?<div className="form">
                <p className="form-title">Create an Account</p>
                <div className="input-container">
                    <input placeholder="Phone Number" type="text" />
                </div>
                <div className="input-container">
                    <input placeholder="Password" type="password" />
                </div>
                <div className="input-container">
                    <input placeholder="Confirm password" type="password" />
                </div>
                <button className="submit-signin" onClick={()=>toggleOTP()}>
                    Sign in
                </button>
                <p className="signup-link">
                    Already have an account?
                    <span id='singup_togo' onClick={toggleLogin}>  Sing In</span>
                </p>
                </div>
            :<Otp/>} 
        </div>
    )
}

export default Singup

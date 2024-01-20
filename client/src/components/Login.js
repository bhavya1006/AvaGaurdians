import React, { useEffect } from 'react'
import { useLogin } from '../store'
import { BASE_URL_FRONTEND } from '../service/Api'

function Login() {

    const {status,toggleLogin}= useLogin()

  return (
    
    <div className="center-center">
    <div className="form">
      <p className="form-title">Sign in to your account</p>
      <div className="input-container">
        <input placeholder="Enter Phone Number" type="text"/>
      </div>
      <div className="input-container">
        <input placeholder="Enter password" type="password"/>
      </div>
      
      <button className="submit-signin">
        Sign in
      </button>
      <p className="signup-link">
        No account? 
      <span id='singup_togo' onClick={toggleLogin}>  Sing Up</span>
      </p>
      
    </div>
  </div>
  )
}

export default Login

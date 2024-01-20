import React, { useEffect } from 'react'
import { useLogin,useAuthentication } from '../store'
import { BASE_URL_BACKEND } from '../service/Api'


function Login() {
const{toggleAuthentication}=useAuthentication()
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
      <p className="signup-link">
        Go to home page? 
      <span id='singup_togo' onClick={toggleAuthentication}>Home</span>
      </p>
      
    </div>
  </div>
  )
}

export default Login

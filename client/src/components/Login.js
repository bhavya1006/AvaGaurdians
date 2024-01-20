import React, { useEffect,useState } from 'react'
import { useLogin,useAuthentication,useUser,useToast } from '../store'
import { BASE_URL_BACKEND } from '../service/Api'
import axios from 'axios'

function Login() {
const{toggleAuthentication}=useAuthentication()
    const {status,toggleLogin}= useLogin()
    const [contact, setContact] = useState()
    const [password, setPassword] = useState()
    const {setUser} = useUser()
    const { setToast } = useToast()


    const handleLogin =async ()=>{
      await axios.post(`${BASE_URL_BACKEND}auth/login`, { contact, password}).then((response) => {
        setToast({ message: response.data.message,type:true })
        setUser(contact)
        toggleAuthentication()
    }).catch(err => {
        setToast({ message: err.response.data, type: false })
    })
    }

  return (
    
    <div className="center-center">
    <div className="form">
      <p className="form-title">Sign in to your account</p>
      <div className="input-container">
        <input placeholder="Enter Phone Number" value={contact} onChange={(e) => { setContact(e.target.value) }} type="text"/>
      </div>
      <div className="input-container">
        <input placeholder="Enter password" value={password} onChange={(e) => { setPassword(e.target.value) }} type="password"/>
      </div>
      
      <button onClick={handleLogin} className="submit-signin">
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

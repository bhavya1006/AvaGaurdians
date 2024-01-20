import React from 'react'
import { useLogin } from '../store'
import Login from './Login'
import Singup from './Singup'
import { BASE_URL_BACKEND } from '../service/Api'

function Authentication() {
  const {status,toggle}= useLogin()
  return (
  <>
   <div className="low-visibility-overlay"></div>
   <div className="logo">
        <img src={`${BASE_URL_BACKEND}images/logo.png`} alt="Avagaurdian" id="ava"/>
      </div>
      {status?<Login/>:<Singup/>}
  </>
    
  )
}

export default Authentication

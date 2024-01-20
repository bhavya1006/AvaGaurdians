import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Content from './Content'
import { usePage } from '../store'
import Contact from './Contact'
import About from './About'

function Main() {
  const {page}=usePage()
  return (
    <>
    <div className='main-page'>
    <Navbar/>
    <hr className='navbar-breaker'></hr>
    {page==="home"?<Content/>:<></>}
    {page==="about"?<About/>:<></>}
    {page==="contact"?<Contact/>:<></>}
    <Footer/>
    </div>
    </>
  )
}

export default Main
